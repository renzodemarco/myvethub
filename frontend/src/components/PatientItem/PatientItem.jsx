import './PatientItem.css'
import seeImg from '../../assets/ver.svg'
import editImg from '../../assets/editar.svg'
import deleteImg from '../../assets/eliminar.svg'
import canine from '../../assets/canino.svg'
import feline from '../../assets/felino.svg'
import EditPatientContainer from '../EditPatientContainer/EditPatientContainer.jsx'
import Modal from '../Modal/Modal.jsx'
import { useState } from 'react'
import { usePatientContext } from '../../context/PatientContext.jsx'
import { deletePatientAlert, deletePatientConfirm } from '../../utils/alerts.js'

const PatientItem = ({ data }) => {

  const speciesImg = data.species == 'canine' ? canine : feline

  const { destroyPatient } = usePatientContext()

  const handleDelete = async () => {
    try {
      const confirmed = await deletePatientConfirm(data.name);
      if (confirmed) {
        // await destroyPatient(data._id);
        deletePatientAlert(data.name);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <li className='patient-list-item'>
        <div className="list-item-img">
          <img src={speciesImg} />
        </div>
        <div className="ms-2 me-auto list-item-info">
          <div className="patient-name fw-bold">{data.name}</div>
          <div className="owner-name">{data.owner}</div>
        </div>
        <button className="btn btn-primary list-item-btn" title="Ver paciente">
          <img src={seeImg}></img>
        </button>
        <button className="btn btn-secondary list-item-btn" title="Editar paciente" onClick={() => setIsModalOpen(true)}>
          <img src={editImg}></img>
        </button>
        <button className="btn btn-danger list-item-btn" title="Eliminar paciente" onClick={handleDelete}>
          <img src={deleteImg}></img>
        </button>
      </li>
      <Modal isOpen={isModalOpen}>
        <EditPatientContainer data={data} handleClose={handleCloseModal} />
      </Modal>
    </>
  )
}

export default PatientItem