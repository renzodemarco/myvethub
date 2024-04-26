import PatientCard from '../PatientCard/PatientCard'
import canine from '../../assets/canino.svg'
import feline from '../../assets/felino.svg'
import getCurrentAge from '../../utils/getCurrentAge'
import normalizeFromDb from '../../utils/normalizeFromDb'

const PatientCardContainer = ({ data, handleClose }) => {

  const patient = { ...data };

  normalizeFromDb(patient)
  patient.image = data.species == 'canine' ? canine : feline
  patient.age = getCurrentAge(new Date(data.birthDate))

  return (
    <>
      <PatientCard
        data={patient}
        handleClose={handleClose}
      />
    </>
  )
}

export default PatientCardContainer