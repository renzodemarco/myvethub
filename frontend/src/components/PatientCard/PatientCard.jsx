import { useState } from 'react'
import EntriesHistoryContainer from '../EntriesHistoryContainer/EntriesHistoryContainer'
import PatientEntry from '../PatientEntry/PatientEntry'
import EntryForm from '../EntryForm/EntryForm'
import './PatientCard.css'
import PatientCardBtnContainer from '../PatientCardBtnContainer/PatientCardBtnContainer'
import { usePatientContext } from '../../context/PatientContext'
import { deleteAlert, errorAlert, successAlert } from '../../utils/alerts'
import { deleteVisitConfirm } from '../../utils/confirms'

const PatientCard = ({ data, handleClose }) => {

  const { updateHistory } = usePatientContext()

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedEntry, setSelectedEntry] = useState({})
  const [entryValue, setEntryValue] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSelectEntry = (e) => {
    setSelectedEntry(e)
    setEntryValue(e.entry)
    setIsFormOpen(false)
  }

  const handleNewEntry = () => {
    setSelectedEntry({})
    setEntryValue('')
    setIsFormOpen(true)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setIsFormOpen(false)
  }

  const createEntry = async () => {
    const newEntry = {
      dateTime: new Date().toLocaleDateString(),
      entry: entryValue
    }
    setIsSubmitting(true)
    try {
      const newData = [...data.history, newEntry]
      await updateHistory(data._id, newData)
      successAlert('Visita registrada exitosamente')
    }
    catch (error) {
      console.error(error)
      errorAlert('Ocurrió un error en la creación de la visita')
    }
    finally {
      setIsFormOpen(false)
      setIsEditing(false)
      setIsSubmitting(false)
    }
  }

  const deleteEntry = async () => {
    setIsSubmitting(true)
    try {
      const confirmed = await deleteVisitConfirm();
      if (confirmed) {
        const newData = data.history.filter(entry => entry._id !== selectedEntry._id)
        await updateHistory(data._id, newData)
        setSelectedEntry({})
        deleteAlert('Se ha eliminado la visita')
      }
    }
    catch (error) {
      console.error(error)
      errorAlert('Ocurrió un error al eliminar la visita')
    }
    finally {
      setIsSubmitting(false)
    }
  }

  const editEntry = async () => {
    const newEntry = {
      dateTime: selectedEntry.dateTime,
      entry: entryValue
    }
    setIsSubmitting(true)

    const updatedHistory = [...data.history];
    const index = updatedHistory.findIndex(e => e._id === selectedEntry._id);
    if (index !== -1) {
      updatedHistory[index] = newEntry;
    }
    try {
      await updateHistory(data._id, updatedHistory)
      setIsFormOpen(false)
      setIsEditing(false)
      successAlert('Visita modificada exitosamente')
      setSelectedEntry(newEntry)
    }
    catch (error) {
      console.error(error)
      errorAlert('Ocurrió un error al modificar la visita')
    }
    finally {
      setIsSubmitting(false)
    }
  }

  const handleEntryChange = (event) => {
    setEntryValue(event.target.value);
    setIsEditing(true)
  };

  return (
    <div className={`card ${data.history.length < 1 && 'no-entries'}`}>
      <div className='card-body'>
        <button type="button" className="btn-close" onClick={handleClose} />
        <div className="card-info-container">
          <div className="card-info-img">
            <img className="card-img" src={data.image} />
          </div>
          <div className='card-patient-name'>
            <h3 id="nombrePacActual">{data.name}</h3>
            <h4 id="propPacActual">{data.owner}</h4>
          </div>
          <div className='card-patient-info'>
            <ul className="list-group" >
              <li className="list-group-item">Sexo:
                <p>{data.sex}</p>
              </li>
              <li className="list-group-item">Edad:
                <p>{data.age}</p>
              </li>
              <li className="list-group-item">Raza:
                <p>{data.breed}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="current-entry-container">
          <PatientEntry
            data={selectedEntry}
            isFormOpen={isFormOpen}
            handleDelete={deleteEntry}
            setIsFormOpen={setIsFormOpen}
          />
          <EntryForm
            isOpen={isFormOpen}
            handleEntryChange={handleEntryChange}
            entryValue={entryValue}
          />
        </div>
        <PatientCardBtnContainer
          handleClose={handleClose}
          handleCancel={handleCancel}
          handleNewEntry={handleNewEntry}
          editMode={isFormOpen}
          handleSave={selectedEntry.entry ? editEntry : createEntry}
          isSubmitting={isSubmitting}
        />
      </div>
      <div className="card-entries-container">
        <EntriesHistoryContainer
          data={data.history}
          onSelect={handleSelectEntry}
          isEditing={isEditing}
        />
      </div>
    </div >
  )
}

export default PatientCard


