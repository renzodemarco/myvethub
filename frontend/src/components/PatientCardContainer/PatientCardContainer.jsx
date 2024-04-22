import PatientCard from '../PatientCard/PatientCard'
import canine from '../../assets/canino.svg'
import feline from '../../assets/felino.svg'
import getCurrentAge from '../../utils/getCurrentAge'
import normalizeFromDb from '../../utils/normalizeFromDb'

const PatientCardContainer = ({ data, handleClose }) => {

  const patient = { ...data };

  normalizeFromDb(patient)
  patient.species = data.species == 'canine' ? canine : feline
  patient.age = getCurrentAge(new Date(data.birthDate))

  return (
    <div>
      <PatientCard
        data={patient}
        handleClose={handleClose}
      />
    </div>
  )
}

export default PatientCardContainer