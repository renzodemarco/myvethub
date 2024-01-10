import { Router } from 'express'
import * as patientsController from '../controllers/patients.controller.js'

const patientsRouter = new Router()

patientsRouter.get('/', patientsController.GETPatients)

export default patientsRouter