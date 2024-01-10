import DatePicker from '../DatePicker/DatePicker'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import normalizeData from '../../utils/normalizeData.js'
import postPatient from '../../services/postPatient.js'
import './NewPatientForm.css'

const NewPatientForm = () => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const normalizedData = normalizeData(formData)

        try {
            const data = await postPatient(normalizedData);
            alert('Paciente creado exitosamente:', data.payload);
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
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Especie</label>
                    <select className="form-select" name="species" onChange={handleChange}>
                        <option></option>
                        <option>Canino</option>
                        <option>Felino</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Sexo</label>
                    <select className="form-select" name="sex" onChange={handleChange}>
                        <option></option>
                        <option>Macho</option>
                        <option>Hembra</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Raza</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="breed" 
                    autoComplete="off"
                    onChange={handleChange}
                    />
                </div>
                <DatePicker />
            </div>
            <div className="new-patient-btn-container">
                <Link to='/'>
                    <button className="btn btn-danger">CANCELAR</button>
                </Link>
                <button type="submit" className="btn btn-primary">AGREGAR</button>
            </div>
        </form>
    )
}

export default NewPatientForm