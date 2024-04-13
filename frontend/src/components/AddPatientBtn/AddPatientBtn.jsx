import { useState } from 'react'
import './AddPatientBtn.css'
import Modal from '../Modal/Modal'
import NewPatientContainer from '../NewPatientContainer/NewPatientContainer'

const AddPatient = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className='add-patient-container'>
        <button onClick={() => setIsModalOpen(true)}>Agregar nuevo paciente</button>
      </div>
      <Modal isOpen={isModalOpen}>
        <NewPatientContainer handleClose={handleCloseModal} />
      </Modal>
    </>
  )
}

export default AddPatient