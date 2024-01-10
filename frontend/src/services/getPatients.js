const getPatients = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/patients');
        if (!response.ok) {
            throw new Error('Error al obtener los pacientes');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export default getPatients;