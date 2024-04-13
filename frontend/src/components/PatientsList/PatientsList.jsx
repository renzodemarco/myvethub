import './PatientsList.css'
import PatientItem from '../PatientItem/PatientItem'

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