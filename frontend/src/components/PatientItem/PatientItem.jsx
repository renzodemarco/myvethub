import './PatientItem.css'
import seeImg from '../../assets/ver.svg'
import editImg from '../../assets/editar.svg'
import deleteImg from '../../assets/eliminar.svg'
import canine from '../../assets/canino.svg'
import feline from '../../assets/felino.svg'
import EditPatientContainer from '../EditPatientContainer/EditPatientContainer.jsx'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx'
import Modal from '../Modal/Modal.jsx'
import PatientCardContainer from '../PatientCardContainer/PatientCardContainer.jsx'
import { useState } from 'react'
import { usePatientContext } from '../../context/PatientContext.jsx'
import { errorAlert, deleteAlert } from '../../utils/alerts.js'
import { deletePatientConfirm } from '../../utils/confirms.js'

const PatientItem = ({ data }) => {

  const speciesImg = data.species == 'canine' ? canine : feline

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { destroyPatient } = usePatientContext()

  const handleDelete = async () => {
    setIsSubmitting(true)
    try {
      const confirmed = await deletePatientConfirm(data.name);
      if (confirmed) {
        await destroyPatient(data._id);
        deleteAlert('Se ha eliminado al paciente ' + data.name);
      }
    } catch (error) {
      console.error(error.message);
      errorAlert('Ocurrió un error en la eliminación del paciente ' + data.name)
    } finally {
      setIsSubmitting(false)
    }
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleEditCloseModal = () => {
    setIsEditModalOpen(false)
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
        <button className="btn btn-primary list-item-btn" title="Ver paciente" onClick={() => setIsModalOpen(true)}>
          <img src={seeImg}></img>
        </button>
        <button className="btn btn-secondary list-item-btn" title="Editar paciente" onClick={() => setIsEditModalOpen(true)}>
          <img src={editImg}></img>
        </button>
        <button className="btn btn-danger list-item-btn" title="Eliminar paciente" onClick={handleDelete}>
          <img src={deleteImg}></img>
        </button>
      </li>
      <Modal isOpen={isEditModalOpen}>
        <EditPatientContainer data={data} handleClose={handleEditCloseModal} />
      </Modal>
      <Modal isOpen={isModalOpen}>
        <PatientCardContainer data={data} handleClose={handleCloseModal} />
      </Modal>
      <Modal isOpen={isSubmitting}>
        <LoadingSpinner />
      </Modal>
    </>
  )
}

export default PatientItem