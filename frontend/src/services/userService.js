import axios from 'axios';

export const postLoginUser = async (data) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/login`, data);
    return response.data;
  }
  catch (error) {
    throw new Error(`Error al loggear al usuario: ${error.response.data.message}`);
  }
};

export const postRegisterUser = async (data) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/register`, data);

    return response.data;
  }
  catch (error) {
    throw new Error(`Error al registrar al usuario: ${error.response.data.message}`);
  }
};