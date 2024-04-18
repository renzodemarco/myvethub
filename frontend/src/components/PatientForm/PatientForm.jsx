import DatePicker from '../DatePicker/DatePicker.jsx'
import { useState, useEffect } from 'react'
import './PatientForm.css'
import { usePatientContext } from '../../context/PatientContext.jsx'
import { createPatientAlert, updatePatientAlert } from '../../utils/alerts.js'

const NewPatientForm = ({ editMode, patient, handleClose }) => {

  const { updatePatient, createPatient } = usePatientContext()

  const [formData, setFormData] = useState({});

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
      alert('Complete los campos obligatorios');
      return;
    }

    try {
      if (editMode) {
        await updatePatient(patient._id, formData)
        updatePatientAlert();
      }
      else {
        await createPatient(formData);
        createPatientAlert();
      }
      handleClose()

    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form className='new-patient-form' onSubmit={handleSubmit}>
      <div className="new-patient-form-container">
        <div className="mb-3">
          <label className="form-label">Nombre del paciente</label>
          <input
            type="text"
            className="form-control"
            maxLength="40"
            name="name"
            autoComplete="off"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Propietario</label>
          <input
            type="text"
            className="form-control"
            maxLength="50"
            name="owner"
            autoComplete="off"
            value={formData.owner}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Especie</label>
          <select
            className="form-select"
            name="species"
            value={formData.species}
            onChange={handleChange}>
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
            onChange={handleChange}>
            <option value=''></option>
            <option value='male'>Macho</option>
            <option value='female'>Hembra</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Raza</label>
          <input
            type="text"
            className="form-control"
            name="breed"
            autoComplete="off"
            value={formData.breed}
            onChange={handleChange}
          />
        </div>
        <DatePicker initialValue={formData.birthDate} onChange={handleBirthDateChange} />
      </div>
      <div className="new-patient-btn-container">
        {editMode ?
          <button type="submit" className="btn btn-primary">GUARDAR</button> :
          <button type="submit" className="btn btn-primary">AGREGAR</button>}
        <button className="btn btn-danger" onClick={handleClose}>CANCELAR</button>
      </div>
    </form>
  )
}

export default NewPatientForm