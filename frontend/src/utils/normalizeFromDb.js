const normalizeData = (data) => {
    return data.map(item => {
        return {
            ...item,
            sex: item.sex === 'male' ? 'Macho' : 'Hembra',
            species: item.species === 'canine' ? "Canino" : 'Felino'
        };
    });
};