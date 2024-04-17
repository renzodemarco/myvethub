import './PatientsListContainer.css'
import PatientsList from '../PatientsList/PatientsList'
import { usePatientContext } from '../../context/PatientContext';

const PatientsListContainer = () => {

    const { patients} = usePatientContext()

    return (
        <div className='patients-list-container'>
            <PatientsList patients={patients} />
        </div>
    )
}

export default PatientsListContainer