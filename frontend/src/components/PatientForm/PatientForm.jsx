import DatePicker from '../DatePicker/DatePicker.jsx'
import { useState, useEffect } from 'react'
import './PatientForm.css'
import { usePatientContext } from '../../context/PatientContext.jsx'
import { successAlert, errorAlert } from '../../utils/alerts.js'

const NewPatientForm = ({ editMode, patient, handleClose }) => {

  const { updatePatient, createPatient } = usePatientContext()

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    owner: '',
    species: '',
    sex: '',
    breed: '',
    birthDate: ''
  });

  useEffect(() => {
    if (patient) {
      setFormData({
        name: patient.name || '',
        owner: patient.owner || '',
        species: patient.species || '',
        sex: patient.sex || '',
        breed: patient.breed || '',
        birthDate: patient.birthDate || ''
      });
    }
  }, [editMode, patient]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBirthDateChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      birthDate: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.owner || !formData.species) {
      errorAlert('Complete los campos obligatorios')
      return;
    }

    setIsSubmitting(true);

    try {
      if (editMode) {
        await updatePatient(patient._id, formData)
        successAlert('Paciente modificado exitosamente');
      }
      else {
        await createPatient(formData);
        successAlert('Paciente creado exitosamente');
      }
      handleClose()

    } catch (error) {
      console.error(error)
      const msg = `Ocurrió un error en la ${editMode? 'modificación' : 'creación'} del paciente`
      errorAlert(msg)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className='new-patient-form' onSubmit={handleSubmit}>
      <div className="new-patient-form-container">
        <div className="mb-3">
          <label className="form-label">Nombre del paciente</label>
          <input
            type="text"
            className="form-control form-text-input"
            maxLength="20"
            name="name"
            autoComplete="off"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Propietario</label>
          <input
            type="text"
            className="form-control form-text-input"
            maxLength="30"
            name="owner"
            autoComplete="off"
            value={formData.owner}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Especie</label>
          <select
            className="form-select"
            name="species"
            value={formData.species}
            onChange={handleChange}
            disabled={isSubmitting}>
            <option value=''></option>
            <option value='canine'>Canino</option>
            <option value='feline'>Felino</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Sexo</label>
          <select
            className="form-select"
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            disabled={isSubmitting}>
            <option value=''></option>
            <option value='male'>Macho</option>
            <option value='female'>Hembra</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Raza</label>
          <input
            type="text"
            className="form-control form-text-input"
            name="breed"
            autoComplete="off"
            value={formData.breed}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>
        <DatePicker
          initialValue={formData.birthDate}
          onChange={handleBirthDateChange}
          disabled={isSubmitting}
        />
      </div>
      <div className="new-patient-btn-container">
        {editMode ?
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>GUARDAR</button> :
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>AGREGAR</button>}
        <button className="btn btn-danger" onClick={handleClose} disabled={isSubmitting}>CANCELAR</button>
      </div>
    </form>
  )
}

export default NewPatientForm