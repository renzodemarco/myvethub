import axios from 'axios'

export const getPatients = async (token) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/patients`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } 
  catch (error) {
    throw new Error(`Error al obtener los pacientes: ${error.response.data.message}`);
  }
};

export const postPatient = async (formData, token) => {
  try {
    const data = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value !== '')
    );
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/patients`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } 
  catch (error) {
    throw new Error(`Error al crear el paciente: ${error.response.data.message}`);
  }
};

export const putPatient = async (id, formData, token) => {
  try {
    const data = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value !== '')
    );
    const response = await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/api/patients/${id}`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } 
  catch (error) {
    throw new Error(`Error al actualizar el paciente: ${error.response.data.message}`);
  }
};

export const deletePatient = async (id, token) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/api/patients/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } 
  catch (error) {
    throw new Error(`Error al eliminar el paciente: ${error.response.data.message}`);
  }
};
