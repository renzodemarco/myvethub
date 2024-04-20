import { Router } from 'express'
import * as historiesController from '../controllers/histories.controller.js'

const historiesRouter = new Router()

historiesRouter.get('/', historiesController.GEThistories)
.get('/:id', historiesController.GETPatientById)
.post('/:id', historiesController.POSTPatient)
.put('/:id', historiesController.PUTPatient)

export default historiesRouter