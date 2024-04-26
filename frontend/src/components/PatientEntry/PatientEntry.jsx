import './PatientEntry.css'
import editImg from '../../assets/editar.svg'
import deleteImg from '../../assets/eliminar.svg'

const PatientEntry = ({ data, isFormOpen, handleDelete, setIsFormOpen }) => {

  if (!data.entry) return null

  if (isFormOpen) return null

  return (
    <div className='patient-entry-container'>
      <div className='patient-entry-header'>
        <div className='patient-entry-date'>
          {data.dateTime}
        </div>
        <div className='patient-entry-btn-container'>
          <button className='btn btn-secondary patient-entry-btn' onClick={() => setIsFormOpen(true)}>
            <img src={editImg} alt="Editar visita" />
          </button>
          <button className='btn btn-danger patient-entry-btn' onClick={handleDelete}>
            <img src={deleteImg} alt="Eliminar visita" />
          </button>
        </div>
      </div>
      <div className='patient-entry' style={{whiteSpace:'pre-line'}}>
        {data.entry}
      </div>
    </div>
  )
}

export default PatientEntry