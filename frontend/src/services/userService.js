import axios from 'axios';

export const postLoginUser = async (data) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/login`, data);
    return response.data;
  }
  catch (error) {
    if (error.response) {
      throw new Error(`Error al obtener los pacientes: ${error.response.data.message}`);
    } 
    else serverError()
  }
};

export const postRegisterUser = async (data) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/register`, data);

    return response.data;
  }
  catch (error) {
    if (error.response) {
      throw new Error(`Error al obtener los pacientes: ${error.response.data.message}`);
    } 
    else serverError()
  }
};