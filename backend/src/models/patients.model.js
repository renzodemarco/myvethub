import { mongoose, Schema } from "mongoose";

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
  user: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  sex: {
    type: String,
    enum: ['male', 'female']
  },
  birthDate: {
    type: String,
    required: false
  },
  breed: {
    type: String,
    required: false
  },
  history: {
    type: [{
      dateTime: String,
      entry: String
    }],
    default: []
  }
})

const PatientModel = mongoose.model('patients', patientsSchema)

export default PatientModel