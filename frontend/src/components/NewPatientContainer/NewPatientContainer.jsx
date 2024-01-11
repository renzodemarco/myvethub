import PatientForm from '../PatientForm/PatientForm'
import { useState, useEffect } from 'react'
import './NewPatientContainer.css'

const NewPatientContainer = () => {

    const [showContainer, setShowContainer] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowContainer(true);
        }, 10);
    }, []);

    return (
        <div className={`modal-shadow ${showContainer && 'show'}`}>
            <div className='new-patient-container'>
                <div className="new-patient-title">
                    <h2>Agregando nuevo paciente</h2>
                </div>
                <PatientForm />
            </div>
        </div>
    )
}

export default NewPatientContainer