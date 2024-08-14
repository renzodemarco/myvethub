import { Router } from "express";
import * as userController from '../controllers/user.controller.js'
import { userExists } from "../middlewares/auth.middleware.js";

const userRoutes = Router()

userRoutes.post('/register', userController.POSTRegisterUser)
.post('/login', userExists, userController.POSTLoginUser)

export default userRoutes