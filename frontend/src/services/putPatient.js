const putPatient = async (id, formData) => {
    try {
        const response = await fetch(`http://localhost:8080/api/patients/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
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

export default putPatient