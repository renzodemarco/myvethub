import './PatientEntry.css'

const PatientEntry = ({ data }) => {

  if (!data.entry) return null

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