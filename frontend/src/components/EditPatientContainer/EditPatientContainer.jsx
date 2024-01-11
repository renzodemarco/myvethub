import PatientForm from '../PatientForm/PatientForm'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../NewPatientContainer/NewPatientContainer.css'
import getPatientById from '../../services/getPatientById.js'

const EditPatientContainer = () => {

    const [patient, setPatient] = useState({})
    const [showContainer, setShowContainer] = useState(false);
    const { id } = useParams()

    useEffect(() => {
        setTimeout(() => {
            setShowContainer(true);
        }, 0);

        const fetchData = async () => {
            try {
                const data = await getPatientById(id);
                setPatient(data.payload);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData()
    }, []);

    return (
        <div className={`modal-shadow ${showContainer && 'show'}`}>
            <div className='new-patient-container'>
                <div className="new-patient-title">
                    <h2>Editando paciente</h2>
                </div>
                <PatientForm patient={patient} editMode/>
            </div>
        </div>
    )
}

export default EditPatientContainer