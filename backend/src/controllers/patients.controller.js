import * as patientsServices from '../services/patients.service.js'

export const GETPatients = async (req, res, next) => {
    try {
        const patients = await patientsServices.getPatients()
        return res.status(200).json(patients)
    }
    catch(error) {
        return next(error)
    }
}