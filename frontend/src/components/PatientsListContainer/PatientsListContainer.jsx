import './PatientsListContainer.css'
import { useState, useEffect } from 'react';
import PatientsList from '../PatientsList/PatientsList'
import getPatients from '../../services/getPatients.js';

const PatientsListContainer = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPatients();
                setPatients(data.payload);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='patients-list-container'>
            <PatientsList patients={patients} />
        </div>
    )
}

export default PatientsListContainer