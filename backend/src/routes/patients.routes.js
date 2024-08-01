import { Router } from 'express'
import * as patientsController from '../controllers/patients.controller.js'
import { requireAuth, verifyPatient } from '../middlewares/auth.middleware.js'

const patientsRouter = new Router()

patientsRouter.get('/', requireAuth, patientsController.GETPatients)
.post('/', requireAuth, patientsController.POSTPatient)
.put('/:id', requireAuth, verifyPatient, patientsController.PUTPatient)
.delete('/:id', requireAuth, verifyPatient, patientsController.DELETEPatient)

export default patientsRouter