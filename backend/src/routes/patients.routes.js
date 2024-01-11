import { Router } from 'express'
import * as patientsController from '../controllers/patients.controller.js'

const patientsRouter = new Router()

patientsRouter.get('/', patientsController.GETPatients)
.get('/:id', patientsController.GETPatientById)
.post('/', patientsController.POSTPatient)
.put('/:id', patientsController.PUTPatient)
.delete('/:id', patientsController.DELETEPatient)

export default patientsRouter