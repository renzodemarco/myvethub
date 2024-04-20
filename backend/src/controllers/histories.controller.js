import * as patientsServices from '../services/patients.service.js'

export const POSTPatient = async (req, res, next) => {
  try {
      const data = req.body
      if (data.sex === '') delete data.sex
      const patient = await patientsServices.postPatient(data)
      return res.status(200).json({ success: true, payload: patient })
  }
  catch(error) {
      return next(error)
  }
} 