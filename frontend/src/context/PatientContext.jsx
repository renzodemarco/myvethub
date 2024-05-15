import React, { createContext, useContext, useEffect, useState } from 'react';
import getPatients from '../services/getPatients'
import postPatient from '../services/postPatient';
import putPatient from '../services/putPatient';
import deletePatient from '../services/deletePatient';

const PatientContext = createContext()

const PatientContextProvider = ({ children }) => {

  const [patients, setPatients] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const data = await getPatients()
        setPatients(data.payload);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData()
  }, [])

  const fetchPatients = async () => {
    try {
      const newData = await getPatients()
      setPatients(newData.payload);
    } catch (error) {
      console.error(error);
    }
  }

  const createPatient = async (data) => {
    try {
      await postPatient(data)
      const newData = await getPatients()
      setPatients(newData.payload);
    } catch (error) {
      console.error(error);
    }
  }

  const updatePatient = async (id, data) => {
    try {
      await putPatient(id, data)
      const newData = await getPatients()
      setPatients(newData.payload);
    } catch (error) {
      console.error(error);
    }
  }

  const destroyPatient = async (id) => {
    try {
      await deletePatient(id)
      const newData = await getPatients()
      setPatients(newData.payload);
    } catch (error) {
      console.error(error);
    }
  }

  const updateHistory = async (id, data) => {
    try {
      await updatePatient(id, { history: data })
    } catch (error) {
      d
      console.error(error);
    }
  }

  return (
    <PatientContext.Provider value={{ patients, isLoading, error, fetchPatients, createPatient, updatePatient, destroyPatient, updateHistory }}>
      {children}
    </PatientContext.Provider>
  );
};

const usePatientContext = () => useContext(PatientContext);

export { PatientContextProvider, usePatientContext };