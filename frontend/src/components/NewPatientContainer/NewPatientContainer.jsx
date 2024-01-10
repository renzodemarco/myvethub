import NewPatientForm from '../NewPatientForm/NewPatientForm'
import { useState, useEffect } from 'react'
import './NewPatientContainer.css'

const NewPatientContainer = () => {

    const [showContainer, setShowContainer] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowContainer(true);
        }, 50);
    }, []);

    return (
        <div className={`modal-shadow ${showContainer && 'show'}`}>
            <div className='new-patient-container'>
                <div className="new-patient-title">
                    <h2>Agregando nuevo paciente</h2>
                </div>
                <NewPatientForm />
            </div>
        </div>
    )
}

export default NewPatientContainer