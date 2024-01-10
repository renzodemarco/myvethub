import './AddPatientBtn.css'
import { Link } from 'react-router-dom'

const AddPatient = () => {
    return (
        <div className='add-patient-container'>
            <Link to="/create">
                <button>Agregar nuevo paciente</button>
            </Link>
        </div>
    )
}

export default AddPatient