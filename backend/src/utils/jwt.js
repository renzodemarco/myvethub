import jwt from 'jsonwebtoken'

const SECRET = env.JWT_SECRET

export const generateToken = (payload) => jwt.sign(payload, SECRET, { expiresIn: '240h' })

export const verifyToken = (token) => jwt.verify(token, SECRET)