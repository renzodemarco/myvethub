import React, { createContext, useContext, useEffect, useState } from 'react';
import getPatients from '../services/getPatients'
import postPatient from '../services/postPatient';

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

  return (
    <AppContext.Provider value={{ patients, fetchPatients, createPatient }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };