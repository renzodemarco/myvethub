import PatientModel from "../models/patients.model.js";

export default class PatientDAO {
    constructor() { }
    
    async create(data) {
        return await PatientModel.create(data)
    }

    async read() {
        return await PatientModel.find()
    }

    async readById(id) {
        return await PatientModel.findById(id)
    }

    async update(id, data) {
        return await PatientModel.findByIdAndUpdate(id, data, {new: true})
    }

    async destroy(id) {
        return await PatientModel.findByIdAndDelete(id)
    }
}