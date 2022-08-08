//escribir funciones de filtro (filtro por personajes y filtro por especie)
let dataFiltered = dataRickAndMorty.filter(function (character) {
    return character.species === selectorEspecies.value;
  })