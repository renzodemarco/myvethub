const conversions = {
  sex: {
    male: "Macho",
    female: "Hembra"
  },
  species: {
    canine: "Canino",
    feline: "Felino"
  }
};

export default function normalizeData(data) {
  if (data.sex in conversions.sex) {
    data.sex = conversions.sex[data.sex];
  }

  if (data.species in conversions.species) {
    data.species = conversions.species[data.species];
  }
  
  return data
};