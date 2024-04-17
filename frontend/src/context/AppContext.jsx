import React, { createContext, useContext, useEffect, useState } from 'react';
import getPatients from '../services/getPatients'
import postPatient from '../services/postPatient';
import putPatient from '../services/putPatient';
import deletePatient from '../services/deletePatient';


const AppContext = createContext()

const AppContextProvider = ({ children }) => {

  const [patients, setPatients] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPatients()
        setPatients(data.payload);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    }
    fetchData()
  }, [])

  const fetchPatients = async () => {
    try {
      const newData = await getPatients()
      setPatients(newData.payload);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  }

  const createPatient = async (data) => {
    try {
      await postPatient(data)
      const newData = await getPatients()
      setPatients(newData.payload);
    } catch (error) {
      console.error('Error creating patient:', error);
    }
  }

  const updatePatient = async (id, data) => {
    try {
      await putPatient(id, data)
      const newData = await getPatients()
      setPatients(newData.payload);
    } catch (error) {
      console.error('Error updating patient:', error);
    }
  }

  const destroyPatient = async (id) => {
    try {
      await deletePatient(id)
      const newData = await getPatients()
      setPatients(newData.payload);
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  }

  return (
    <AppContext.Provider value={{ patients, fetchPatients, createPatient, updatePatient, destroyPatient }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };