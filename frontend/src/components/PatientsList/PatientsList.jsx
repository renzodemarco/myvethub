import './PatientsList.css'
import PatientItem from '../PatientItem/PatientItem'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const PatientsList = ({ patients }) => {

  return (
    <ul className='patients-list'>
      {patients.map(data => {
        return (
          <PatientItem
            data={data}
            key={data._id}
          />
        )
      })}
    </ul>
  )
}

export default PatientsList