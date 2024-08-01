import { verifyToken } from '../utils/jwt.js'
import User from '../models/user.model.js'
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
    req.user = user
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