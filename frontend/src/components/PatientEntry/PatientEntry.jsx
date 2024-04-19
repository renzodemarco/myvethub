import './PatientEntry.css'

const PatientEntry = ({ data, isFormOpen }) => {

  if (!data.entry) return null

  if (isFormOpen) return null

  return (
    <div className='patient-entry-container'>
      <div className='patient-entry-date'>
        {data.dateTime}
      </div>
      <div className='patient-entry'>
        {data.entry}
      </div>
    </div>
  )
}

export default PatientEntry