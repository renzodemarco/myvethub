import './PatientsListContainer.css'
import PatientsList from '../PatientsList/PatientsList'
import { useAppContext } from '../../context/AppContext';

const PatientsListContainer = () => {

    const { patients} = useAppContext()

    return (
        <div className='patients-list-container'>
            <PatientsList patients={patients} />
        </div>
    )
}

export default PatientsListContainer