import { createPatientSchema, updatePatientSchema } from '../schemas/patients.schema.js'
import * as patientsServices from '../services/patients.service.js'
import CustomError from '../utils/custom.error.js'

export const GETPatients = async (req, res, next) => {
  try {
    const userId = req.user._id
    const patients = await patientsServices.getPatients(userId)
    return res.status(200).json({ success: true, payload: patients })
  }
  catch (error) {
    return next(error)
  }
}

export const POSTPatient = async (req, res, next) => {
  try {
    const data = req.body

    const { error, value } = createPatientSchema.validate(data);
    if (error) return CustomError.new({ status: 400, message: error.details[0].message })

    const patient = await patientsServices.postPatient(value)

    return res.status(200).json({ success: true, payload: patient })
  }
  catch (error) {
    return next(error)
  }
}

export const PUTPatient = async (req, res, next) => {
  try {
    const id = req.params.id
    const data = req.body

    const { error, value } = createSchema.validate(data);
    if (error) return CustomError.new({ status: 400, message: error.details[0].message })

    const patient = await updatePatientSchema.putPatient(id, value)
    return res.status(200).json({ success: true, payload: patient })
  }
  catch (error) {
    return next(error)
  }
}

export const DELETEPatient = async (req, res, next) => {
  try {
    const id = req.params.id
    const patient = await patientsServices.deletePatient(id)
    return res.status(200).json({ success: true, payload: patient })
  }
  catch (error) {
    return next(error)
  }
}