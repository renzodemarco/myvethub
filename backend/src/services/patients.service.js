import PatientDAO from "../dao/patients.dao.js"

const manager = new PatientDAO()

export const getPatients = async () => {
    try {
        return await manager.read()
    }
    catch(error) {
        throw error
    }
}

export const getPatientById = async (id) => {
    try {
        return await manager.readById(id)
    }
    catch(error) {
        throw error
    }
}

export const postPatient = async (data) => {
    try {
        return await manager.create(data)
    }
    catch(error) {
        throw error
    }
}

export const putPatient = async (id, data) => {
    try {
        return await manager.update(id, data)
    }
    catch(error) {
        throw error
    }
}

export const deletePatient = async (id) => {
    try {
        return await manager.destroy(id)
    }
    catch(error) {
        throw error
    }
}