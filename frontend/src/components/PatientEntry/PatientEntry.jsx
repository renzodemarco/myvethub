import './PatientEntry.css'

const PatientEntry = ({ data }) => {

  const date = new Date().toLocaleString()

  return (
    <div className='patient-entry-container'>
      <div className='patient-entry-date'>
        {date}
      </div>
      <div className='patient-entry'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam eos sit consectetur nisi voluptas. Eum ad eligendi dicta enim, quibusdam explicabo doloremque blanditiis voluptates laudantium eaque, beatae cupiditate impedit? Sunt?
      </div>
    </div>
  )
}

export default PatientEntry