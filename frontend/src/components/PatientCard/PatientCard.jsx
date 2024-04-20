import { useState } from 'react'
import EntriesHistoryContainer from '../EntriesHistoryContainer/EntriesHistoryContainer'
import PatientEntry from '../PatientEntry/PatientEntry'
import EntryForm from '../EntryForm/EntryForm'
import './PatientCard.css'
import PatientCardBtnContainer from '../PatientCardBtnContainer/PatientCardBtnContainer'

const PatientCard = ({ data, handleClose }) => {

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedEntry, setSelectedEntry] = useState({})

  const handleSelectEntry = (e) => {
    setSelectedEntry(e)
    setIsFormOpen(false)
  }

  const handleNewEntry = () => {
    setSelectedEntry({})
    setIsFormOpen(true)
  }

  const handleCancel = () => {
    setIsFormOpen(false)
  }

  const createNewEntry = (entry) => {
    data.history.push(entry)
  }

  return (
    <div className="card">
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
          <PatientEntry data={selectedEntry} isFormOpen={isFormOpen} />
          <EntryForm data={selectedEntry} isOpen={isFormOpen} />
        </div>
        <PatientCardBtnContainer 
          handleClose={handleClose}
          handleCancel={handleCancel}
          handleNewEntry={handleNewEntry}
          setIsFormOpen={setIsFormOpen}
          isEntryOpen={selectedEntry.entry}
          editMode={isFormOpen}
        />
      </div>
      <div className="card-entries-container">
        <EntriesHistoryContainer data={data.history} onSelect={handleSelectEntry} />
      </div>
    </div >
  )
}

export default PatientCard


