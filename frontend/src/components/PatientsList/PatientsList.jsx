import './PatientsList.css'
import PatientButton from '../PatientButton/PatientButton'

const PatientsList = ({patients}) => {

    return (
        <ul className='patients-list'> 
            {patients.map(data => {
                return (
                    <PatientButton
                    species = {data.species}
                    name = {data.name}
                    owner = {data.owner}
                    key = {data._id}
                    />
                )
            })}
        </ul>
    )
}

export default PatientsList