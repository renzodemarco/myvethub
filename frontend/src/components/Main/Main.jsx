import { useState } from 'react'
import Aside from '../Aside/Aside'
import PatientsList from '../PatientsList/PatientsList'
import './Main.css'
import { usePatientContext } from '../../context/PatientContext'

const Main = () => {

  const { patients } = usePatientContext()

  const [searchTerm, setSearchTerm] = useState('')
  const [searchBy, setSearchBy] = useState('name')

  const filteredPatients = patients.filter(patient => {
    const value = patient[searchBy].toLowerCase();
    return value.includes(searchTerm.toLowerCase());
  });

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSearchBy = (event) => {
    setSearchBy(event.target.value)
  }

  return (
    <main>
      <Aside
        searchTerm={searchTerm}
        searchBy={searchBy}
        handleSearchTerm={handleSearchTerm}
        handleSearchBy={handleSearchBy}
      />
      <PatientsList patients={filteredPatients} />
    </main>
  )
}

export default Main