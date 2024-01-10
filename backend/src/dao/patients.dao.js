import PatientModel from "../models/patients.model.js";

export default class PatientDAO {
    constructor() { }
    
    async create(patient) {
        return await PatientModel.create(patient)
    }

    async read() {
        return await PatientModel.find()
    }

    async readById(id) {
        return await PatientModel.findById(id)
    }

    async update(patient, id) {
        return await PatientModel.findByIdAndUpdate(id, patient, {new: true})
    }

    async destroy(id) {
        return await PatientModel.findByIdAndDelete(id)
    }
}