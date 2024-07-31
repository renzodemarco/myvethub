import User from '../models/user.model.js'
import CustomError from '../utils/custom.error.js';
import dictionary from '../utils/error.dictionary.js'

export const registerUser = async (data) => {
  try {
    const user = await User.findOne({ email: data.email })

    if (user) return CustomError.new(dictionary.emailExists)

    const response = await User.create(data)

    return response
  }
  catch (error) {
    throw error
  }
}

export const loginUser = async (email, password, otpToken) => {
  try {
    const user = await User.findOne({ email })

    if (!user) {
      return CustomError.new(dictionary.userNotFound)
    }

    const isMatch = await user.comparePassword(password, user.password)

    if (!isMatch) {
      return CustomError.new(dictionary.emailOrPassword)
    }

    return user
  }
  catch (error) {
    throw error
  }
}