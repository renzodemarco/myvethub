export default function normalizeData(formData) {
    const data = { ...formData };

    if (data.sex === 'Macho' || data.sex === 'Male') {
        data.sex = 'male';
    } else if (data.sex === 'Hembra' || data.sex === 'Female') {
        data.sex = 'female';
    }

    if (data.species === 'Canino' || data.species === 'Canine') {
        data.species = 'canine';
    } else if (data.species === 'Felino' || data.species === 'Feline') {
        data.species = 'feline';
    }

    return data;
};
