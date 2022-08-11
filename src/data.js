const filterData = (characters, species) => {
  let dataFiltered = characters.filter(function (character) {
    return character.species === species;
  });
  return dataFiltered;
};

const datafilteres = (characters, gender) => {
  let dataFilter = characters.filter(function (character) {
    return character.gender === gender;
  });
  return dataFilter;
};

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
export {datafilteres};