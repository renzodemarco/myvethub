import { verifyToken } from '../utils/jwt.js'
import User from '../models/user.model.js'
import Patient from '../models/patients.model.js';
import CustomError from '../utils/custom.error.js';
import dictionary from '../utils/error.dictionary.js';

export const injectUser = async (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    req.user = null;
    return next();
  }
  try {
    const data = verifyToken(token)
    const user = await User.findById(data.id)
    req.user = user._id.toString()
  }
  catch (error) {
    req.user = null
  }
  next()
}

export const requireAuth = (req, res, next) => {
  try {
    if (!req.user) return CustomError.new(dictionary.authentication)
    next();
  }
  catch (error) {
    next(error)
  }
};

export const userExists = async (req, res, next) => {
  try {
    const { email } = req.body

    const user = await User.findOne({ email });

    if (!user) {
      return CustomError.new(dictionary.userNotFound)
    }

    next()
  }
  catch (error) {
    next(error)
  }
}

export const verifyPatient = async (req, res, next) => {
  try {
    const patientId = req.params.id
    const userId = req.user

    const patient = await Patient.findById(patientId);

    if (!patient) {
      return CustomError.new(dictionary.patientNotFound)
    }

    if (patient.user.toString() !== userId.toString()) {
      return CustomError.new(dictionary.authorization)
    }

    next();
  }
  catch (error) {
    next(error)
  }
}