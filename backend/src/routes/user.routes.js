import { Router } from "express";
import * as userController from '../controllers/user.controller.js'

const userRoutes = Router()

userRoutes.post('/register', userController.POSTRegisterUser)
.post('/login', userController.POSTLoginUser)

export default userRoutes