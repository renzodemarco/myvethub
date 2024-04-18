import { useState } from 'react'
import canine from '../../assets/canino.svg'
import feline from '../../assets/felino.svg'
import getCurrentAge from '../../utils/getCurrentAge'
import normalizeFromDb from '../../utils/normalizeFromDb'
import EntriesHistoryContainer from '../EntriesHistoryContainer/EntriesHistoryContainer'
import PatientEntry from '../PatientEntry/PatientEntry'
import './PatientCard.css'

const PatientCard = ({ data, handleClose }) => {

  const speciesImg = data.species == 'canine' ? canine : feline
  const age = getCurrentAge(new Date(data.birthDate))
  const patient = normalizeFromDb(data)

  const [selectedEntry, setSelectedEntry] = useState({})

  const handleSelectEntry = (e) => {
    console.log(e)
    setSelectedEntry(e)
  }

  return (
    <div className="card">
      <div className='card-body'>
        <button type="button" className="btn-close" onClick={handleClose} />
        <div className="card-info-container">
          <div className="card-info-img">
            <img className="card-img" src={speciesImg} />
          </div>
          <div className='card-patient-name'>
            <h3 id="nombrePacActual">{patient.name}</h3>
            <h4 id="propPacActual">{patient.owner}</h4>
          </div>
          <div className='card-patient-info'>
            <ul className="list-group" >
              <li className="list-group-item">Sexo:
                <p>{patient.sex}</p>
              </li>
              <li className="list-group-item">Edad:
                <p>{age}</p>
              </li>
              <li className="list-group-item">Raza:
                <p>{patient.breed}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="current-entry-container">
          <PatientEntry data={selectedEntry} />
        </div>
        <div className='card-button-container'>
          <button type="submit" className="btn btn-primary">NUEVA VISITA</button>
          <button type="submit" className="btn btn-secondary">EDITAR VISITA</button>
          <button type="submit" className="btn btn-danger" onClick={handleClose}>VOLVER</button>
        </div>
      </div>
      <div className="card-entries-container">
        <EntriesHistoryContainer data={data.history} onSelect={handleSelectEntry} />
      </div>
    </div>
  )
}

export default PatientCard


