import DatePicker from '../DatePicker/DatePicker'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import postPatient from '../../services/postPatient.js'
import './NewPatientForm.css'

const NewPatientForm = () => {
    function PatientForm() {
        const [formData, setFormData] = useState({});
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const createdPatient = await postPatient(formData);
            console.log('Paciente creado exitosamente:', createdPatient);
            history.push('/');
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <>
            <form className="new-patient-form">
                <div className="mb-3">
                    <label className="form-label">Nombre del paciente</label>
                    <input type="text" className="form-control" maxLength="40" id="name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Propietario</label>
                    <input type="text" className="form-control" maxLength="50" id="owner" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Especie</label>
                    <select className="form-select" id="species">
                        <option></option>
                        <option>Canino</option>
                        <option>Felino</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Sexo</label>
                    <select className="form-select" id="sex">
                        <option></option>
                        <option>Macho</option>
                        <option>Hembra</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Raza</label>
                    <input type="text" className="form-control" />
                </div>
                <DatePicker />
            </form>
            <div className="new-patient-btn-container">
                <Link to='/'>
                    <button className="btn btn-danger">CANCELAR</button>
                </Link>
                <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>AGREGAR</button>
            </div>
        </>
    )
}

export default NewPatientForm