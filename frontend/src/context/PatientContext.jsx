import { createContext, useContext, useEffect, useState } from 'react';
import { getPatients, postPatient, putPatient, deletePatient } from '../services/patientsService.js'
import getTokenInfo from '../utils/jwt.js';
import { postRegisterUser, postLoginUser } from '../services/userService.js';

const PatientContext = createContext()

const PatientContextProvider = ({ children }) => {

  const [auth, setAuth] = useState(null)
  const [patients, setPatients] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    checkAuth();
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      if (!auth) return; // No hacer la llamada si no está autenticado

      setIsLoading(true);
      try {
        const data = await getPatients(token);
        setPatients(data.payload);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [auth]);


  const checkAuth = () => {
    setIsLoading(true)
    const data = getTokenInfo(token)
    if (token && data) {
      setAuth(data);
    } else {
      localStorage.removeItem('token');
      setAuth(null);
    }
    setIsLoading(false);
  };

  const registerUser = async (data) => {
    try {
      const response = await postRegisterUser(data)
      if (response.success === true) alert("Usuario registrado exitosamente")
    } catch (error) {
      throw error;
    }
  }

  const loginUser = async (data) => {
    try {
      const response = await postLoginUser(data);
      if (response.error) {
        throw response;
      }
      if (response.success) {
        localStorage.setItem('token', response.token);
        setToken(response.token);
      }
    } catch (error) {
      throw error;
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('token')
    setAuth(null);
    setToken('')
  }

  const fetchPatients = async () => {
    try {
      const newData = await getPatients(token)
      setPatients(newData.payload);
    } catch (error) {
      throw error;
    }
  }

  const createPatient = async (data) => {
    try {
      await postPatient(data, token)
      await fetchPatients()
    } catch (error) {
      throw error;
    }
  }

  const updatePatient = async (id, data) => {
    try {
      await putPatient(id, data, token)
      await fetchPatients()
    } catch (error) {
      throw error;
    }
  }

  const destroyPatient = async (id) => {
    try {
      await deletePatient(id, token)
      await fetchPatients()
    } catch (error) {
      throw error;
    }
  }

  const updateHistory = async (id, data) => {
    try {
      await updatePatient(id, { history: data })
    } catch (error) {
      throw error;
    }
  }

  return (
    <PatientContext.Provider value={{ auth, patients, isLoading, error, fetchPatients, createPatient, updatePatient, destroyPatient, updateHistory, registerUser, loginUser, logoutUser }}>
      {children}
    </PatientContext.Provider>
  );
};

const usePatientContext = () => useContext(PatientContext);

export { PatientContextProvider, usePatientContext };