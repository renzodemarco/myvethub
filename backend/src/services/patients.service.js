import Patient from "../models/patients.model.js"

export const getPatients = async (userId) => {
  try {
    return await Patient.find({user: userId})
  }
  catch (error) {
    throw error
  }
}

export const postPatient = async (data) => {
  try {
    return await Patient.create(data)
  }
  catch (error) {
    throw error
  }
}

export const putPatient = async (id, data) => {
  try {
    return await Patient.findByIdAndUpdate(id, data, { new: true })
  }
  catch (error) {
    throw error
  }
}

export const deletePatient = async (id) => {
  try {
    return await Patient.findByIdAndDelete(id)
  }
  catch (error) {
    throw error
  }
}