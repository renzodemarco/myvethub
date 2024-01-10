const postPatient = async (formData) => {
    try {
        const response = await fetch('http://localhost:8080/api/patients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
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

export default postPatient;