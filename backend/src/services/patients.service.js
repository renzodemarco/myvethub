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