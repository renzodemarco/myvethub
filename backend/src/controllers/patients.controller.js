import * as patientsServices from '../services/patients.service.js'

export const GETPatients = async (req, res, next) => {
    try {
        const patients = await patientsServices.getPatients()
        return res.status(200).json({ success: true, payload: patients })
    }
    catch(error) {
        return next(error)
    }
}

export const GETPatientById = async (req, res, next) => {
    try {
        const id = req.params.id
        const patient = await patientsServices.getPatientById(id)
        return res.status(200).json({ success: true, payload: patient })
    }
    catch(error) {
        return next(error)
    }
}

export const POSTPatient = async (req, res, next) => {
    try {
        const data = req.body
        const patient = await patientsServices.postPatient(data)
        return res.status(200).json({ success: true, payload: patient })
    }
    catch(error) {
        return next(error)
    }
} 

export const PUTPatient = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = req.body
        const patient = await patientsServices.putPatient(id, data)
        return res.status(200).json({ success: true, payload: patient })
    }
    catch(error) {
        return next(error)
    }
}

export const DELETEPatient = async (req, res, next) => {
    try {
        const id = req.params.id
        const patient = await patientsServices.deletePatient(id)
        return res.status(200).json({ success: true, payload: patient })
    }
    catch(error) {
        return next(error)
    }
}