import DatePicker from '../DatePicker/DatePicker.jsx'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import postPatient from '../../services/postPatient.js'
import putPatient from '../../services/putPatient.js'
import './PatientForm.css'

const NewPatientForm = ({ editMode, patient }) => {

    const [formData, setFormData] = useState({
        name: '',
        owner: '',
        species: '',
        sex: '',
        breed: '',
        birthDate: ''
    });
    const navigate = useNavigate()

    useEffect(() => {
        if (patient) {
            setFormData(prevData => ({
                ...prevData,
                name: patient.name || '',
                owner: patient.owner || '',
                species: patient.species || '',
                sex: patient.sex || '',
                breed: patient.breed || '',
                birthDate: patient.birthDate || ''
            }));
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

    const handleCancel = () => {
        navigate(`/`)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.owner || !formData.species ) {
            alert('Complete los campos obligatorios');
            return;
        }

        try {
            if (editMode) {
                await putPatient(patient._id, formData)
                alert('Paciente actualizado exitosamente');
            }
            else {
                await postPatient(formData);
                alert('Paciente creado exitosamente');
            }
            navigate('/')

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
                        <option></option>
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
                        <option></option>
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
                <DatePicker initialValue={formData.birthDate} onChange={handleBirthDateChange}/>
            </div>
            <div className="new-patient-btn-container">
                <button className="btn btn-danger" onClick={handleCancel}>CANCELAR</button>
                {editMode ?
                    <button type="submit" className="btn btn-primary">GUARDAR</button> :
                    <button type="submit" className="btn btn-primary">AGREGAR</button>}
            </div>
        </form>
    )
}

export default NewPatientForm