import './PatientCardBtnContainer.css'

const PatientCardBtnContainer = (props) => {

  const { handleClose, handleCancel, handleNewEntry, editMode, handleSave } = props

  if (editMode) return (
    <div className='card-button-container'>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleSave}
      >GUARDAR
      </button>
      <button
        type="submit"
        className="btn btn-danger"
        onClick={handleCancel}
      >CANCELAR
      </button>
    </div>
  )

  return (
    <div className='card-button-container'>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleNewEntry}
      >NUEVA VISITA
      </button>
      <button
        type="submit"
        className="btn btn-danger"
        onClick={handleClose}
      >CERRAR
      </button>
    </div>
  )
}

export default PatientCardBtnContainer