import { Router } from 'express'
import * as patientsController from '../controllers/patients.controller.js'

const patientsRouter = new Router()

patientsRouter.get('/', patientsController.GETPatients)
.post('/', patientsController.POSTPatient)
.delete('/:id', patientsController.DELETEPatient)

export default patientsRouter