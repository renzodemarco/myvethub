import './AddPatientBtn.css'
import { useNavigate } from 'react-router-dom'

const AddPatient = () => {

    const navigate = useNavigate()
    
    const handleRedirect = () => {
        navigate('/create')
    }

    return (
        <div className='add-patient-container'>
                <button onClick={handleRedirect}>Agregar nuevo paciente</button>
        </div>
    )
}

export default AddPatient