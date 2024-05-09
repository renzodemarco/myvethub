const deletePatient = async (id) => {
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

export default deletePatient