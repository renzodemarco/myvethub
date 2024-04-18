import mongoose from "mongoose";

const patientsSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    owner: {
        required: true,
        type: String
    },
    species: {
        required: true,
        type: String,
        enum: ['canine', 'feline']
    },
    sex: {
        type: String,
        enum: ['male', 'female']
    },
    birthDate: String,
    breed: String,
    history: {
        type:  [{
            dateTime: String,
            clinicalHistory: String
        }],
        default: []
    }
})

const PatientModel = mongoose.model('patients', patientsSchema)

export default PatientModel