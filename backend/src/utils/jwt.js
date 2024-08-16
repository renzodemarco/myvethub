import jwt from 'jsonwebtoken'
import '../config/env.config.js'

const SECRET = process.env.JWT_SECRET

export const generateToken = (payload) => jwt.sign(payload, SECRET, { expiresIn: '1440h' })

export const verifyToken = (token) => jwt.verify(token, SECRET)