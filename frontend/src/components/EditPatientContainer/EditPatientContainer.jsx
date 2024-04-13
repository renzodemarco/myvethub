import PatientForm from '../PatientForm/PatientForm'
import '../NewPatientContainer/NewPatientContainer.css'

const EditPatientContainer = ({ data, handleClose }) => {

  return (
    <div className='new-patient-container'>
      <div className="new-patient-title">
        <h2>Editando paciente</h2>
      </div>
      <PatientForm patient={data} handleClose={handleClose} editMode />
    </div>
  )
}

export default EditPatientContainer