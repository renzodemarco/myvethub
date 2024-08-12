import './PatientCardBtnContainer.css'

const PatientCardBtnContainer = (props) => {

  const { handleClose, handleCancel, handleNewEntry, editMode, handleSave, isSubmitting } = props

  if (editMode) return (
    <div className='card-button-container'>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleSave}
        disabled={isSubmitting}
      >GUARDAR
      </button>
      <button
        type="submit"
        className="btn btn-danger"
        onClick={handleCancel}
        disabled={isSubmitting}
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
        disabled={isSubmitting}
      >NUEVA VISITA
      </button>
      <button
        type="submit"
        className="btn btn-danger"
        onClick={handleClose}
        disabled={isSubmitting}
      >CERRAR
      </button>
    </div>
  )
}

export default PatientCardBtnContainer