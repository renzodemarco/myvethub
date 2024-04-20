import PatientCard from '../PatientCard/PatientCard'
import canine from '../../assets/canino.svg'
import feline from '../../assets/felino.svg'
import getCurrentAge from '../../utils/getCurrentAge'
import normalizeFromDb from '../../utils/normalizeFromDb'

const PatientCardContainer = ({ data, handleClose }) => {

  data = normalizeFromDb(data)
  data.image = data.species == 'canine' ? canine : feline
  data.age = getCurrentAge(new Date(data.birthDate))

  return (
    <div>
      <PatientCard
        data={data}
        handleClose={handleClose}
      />
    </div>
  )
}

export default PatientCardContainer