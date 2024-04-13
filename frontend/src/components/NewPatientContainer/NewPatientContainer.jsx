import PatientForm from '../PatientForm/PatientForm'
import './NewPatientContainer.css'

const NewPatientContainer = ({ handleClose }) => {

  return (
    <div className='new-patient-container'>
      <div className="new-patient-title">
        <h2>Agregando nuevo paciente</h2>
      </div>
      <PatientForm handleClose={handleClose} />
    </div>
  )
}

export default NewPatientContainer