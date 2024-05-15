import './PatientsList.css'
import PatientItem from '../PatientItem/PatientItem'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { usePatientContext } from '../../context/PatientContext'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

const PatientsList = ({ patients }) => {

  const { isLoading, error } = usePatientContext()

  if (isLoading) return <LoadingSpinner />

  if (error) return <ErrorMessage />

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