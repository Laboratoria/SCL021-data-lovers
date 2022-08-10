const datafilter = (characters, species) => {
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







const sortData = (arrData, sortBy, sortOrder) => {
  let arrResult = arrData.sort((a, b) => {
    if (a[sortBy] > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  });
  return arrResult;
};
export { datafilter };
export {datafilteres};

