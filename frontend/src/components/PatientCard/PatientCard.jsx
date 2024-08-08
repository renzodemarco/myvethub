import { useState } from 'react'
import EntriesHistoryContainer from '../EntriesHistoryContainer/EntriesHistoryContainer'
import PatientEntry from '../PatientEntry/PatientEntry'
import EntryForm from '../EntryForm/EntryForm'
import './PatientCard.css'
import PatientCardBtnContainer from '../PatientCardBtnContainer/PatientCardBtnContainer'
import { usePatientContext } from '../../context/PatientContext'
import { createVisitAlert, deleteVisitAlert, deleteVisitConfirm } from '../../utils/alerts'

const PatientCard = ({ data, handleClose }) => {

  const { updateHistory } = usePatientContext()

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedEntry, setSelectedEntry] = useState({})
  const [entryValue, setEntryValue] = useState('')

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
    setIsFormOpen(false)
  }

  const createEntry = async () => {
    const newEntry = {
      dateTime: new Date().toLocaleDateString(),
      entry: entryValue
    }
    console.log(data.history)
    data.history.push(newEntry)
    await updateHistory(data._id, data.history)
    setIsFormOpen(false)
    createVisitAlert()
  }

  const deleteEntry = async () => {
    try {
      const confirmed = await deleteVisitConfirm();
      if (confirmed) {
        const newData = data.history.filter(entry => entry._id !== selectedEntry._id)
        await updateHistory(data._id, newData)
        setSelectedEntry({})
        deleteVisitAlert()
      }
    } catch (error) {
      console.error(error.message);
    }

  }

  const editEntry = async () => {
    const newEntry = {
      dateTime: new Date().toLocaleDateString(),
      entry: entryValue
    }
    const index = data.history.findIndex(e => e._id === selectedEntry._id)
    if (index !== -1) data.history[index] = newEntry;
    else console.log('No se ha encontrado la visita en el historial del paciente');
    await updateHistory(data._id, data.history)
    setIsFormOpen(false)
    setSelectedEntry(newEntry)
  }

  const handleEntryChange = (event) => {
    setEntryValue(event.target.value);
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
        />
      </div>
      <div className="card-entries-container">
        <EntriesHistoryContainer data={data.history} onSelect={handleSelectEntry} />
      </div>
    </div >
  )
}

export default PatientCard


