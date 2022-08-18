//aca se crean las funciones  para exportarlos
const filterData = (characters, species) => {
  let dataFiltered = characters.filter(function (character) {
    return character.species === species;
  });
  return dataFiltered;
};

export const filtroGenero = (characters, gender) => {
  let dataFilter = characters.filter(function (character) {
    return character.gender === gender;
  });
  return dataFilter;
};
//Cuando usamos el método sort(), los elementos se ordenarán en orden 
//ascendente (de la A a la Z)
const sortData = (Data,sortBy) => {
  let orderAZ = Data.sort(function (a, b) {
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    
  })
 return orderAZ;
 
}


export { sortData };
export { filterData };