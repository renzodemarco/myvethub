import { registerUserSchema, loginUserSchema } from '../schemas/user.schema.js';
import { generateToken } from '../utils/jwt.js';
import * as userServices from '../services/user.service.js'
import CustomError from '../utils/custom.error.js';

export const POSTRegisterUser = async (req, res, next) => {
  try {
    const data = req.body

    const { error, value } = registerUserSchema.validate(data);
    if (error) return CustomError.new({ status: 400, message: error.details[0].message })

    const user = await userServices.registerUser(value)

    return res.status(201).json({ success: true, payload: user.username })
  }
  catch (error) {
    next(error)
  }
}

export const POSTLoginUser = async (req, res, next) => {
  try {
    const data = req.body

    const { error, value } = loginUserSchema.validate(data);
    if (error) return CustomError.new({ status: 400, message: error.details[0].message })

    const user = await userServices.loginUser(value)

    const token = generateToken({ username: user.username, email: user.email, id: user._id })

    return res.status(200).json({ success: true, token })
  }
  catch (error) {
    next(error)
  }
}