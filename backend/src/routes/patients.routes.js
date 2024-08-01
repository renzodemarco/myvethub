import { Router } from 'express'
import * as patientsController from '../controllers/patients.controller.js'
import { requireAuth } from '../middlewares/auth.middleware.js'

const patientsRouter = new Router()

patientsRouter.get('/', requireAuth, patientsController.GETPatients)
.post('/', requireAuth, patientsController.POSTPatient)
.put('/:id', requireAuth, patientsController.PUTPatient)
.delete('/:id', requireAuth, patientsController.DELETEPatient)

export default patientsRouter