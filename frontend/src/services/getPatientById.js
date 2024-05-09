const getPatientById = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/patients/${id}`)

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Error al obtener el paciente');
        }
    } catch (error) {
        throw error;
    }
};

export default getPatientById