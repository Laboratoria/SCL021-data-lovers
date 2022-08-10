//hacer que se impriman las nuevas
//console.log(selectorEspecies.value);
const datafilter = (characters, species) => {
  let dataFiltered = characters.filter(function (character) {
    return character.species === species;
  });
  return dataFiltered;
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
