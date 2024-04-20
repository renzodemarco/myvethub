import './PatientCardBtnContainer.css'

const PatientCardBtnContainer = (props) => {

  const { handleClose, handleCancel, handleNewEntry, setIsFormOpen, isEntryOpen, editMode, createEntry, deleteEntry } = props

  if (editMode) return (
    <div className='card-button-container'>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={createEntry}
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
      {isEntryOpen &&
      <>
        <button
          type="submit"
          className="btn btn-secondary"
          onClick={() => setIsFormOpen(true)}
        >EDITAR VISITA
        </button>
        <button
        type="submit"
        className="btn btn-danger"
        onClick={deleteEntry}
      >ELIMINAR VISITA
      </button>
        </>
      }
      {!isEntryOpen &&
        <button
        type="submit"
        className="btn btn-danger"
        onClick={handleClose}
      >VOLVER
      </button>
      }
    </div>
  )
}

export default PatientCardBtnContainer