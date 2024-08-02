export const getPatients = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/patients`);
    if (!response.ok) {
      throw new Error('Error al obtener los pacientes');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const postPatient = async (formData) => {
  try {
    const data = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value !== '')
    )
    const response = await fetch((`${import.meta.env.VITE_BACKEND_URL}/api/patients`), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error al crear el paciente');
    }
  } catch (error) {
    throw error;
  }
};

export const putPatient = async (id, formData) => {
  try {
    const data = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value !== '')
    )
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/patients/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error al actualizar el paciente');
    }
  } catch (error) {
    throw error;
  }
};

export const deletePatient = async (id) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/patients/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error al eliminar el paciente');
    }
  } catch (error) {
    throw error;
  }
};
