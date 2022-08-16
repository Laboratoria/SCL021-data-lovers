import { filterData, filtroGenero, sortData } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

//console.log(data.results);
const dataRickAndMorty = data.results;
// eslint-disable-next-line no-use-before-define
const especies = [];
const setGenero = [];
//selectores de los filtros y de la seccion donde se van a pintar los personajes
const selectorGenero = document.getElementById("genero");
const selectorEspecies = document.getElementById("especiess");
const selectorRoot = document.getElementById("root");

function getCards(arrItems) {
  const arrCards = [];

  for (let i = 0; i < arrItems.length; i++) {
    const card = document.createElement("div");
    card.setAttribute("id", "boxcard");
    const pName = document.createElement("p");
    pName.textContent = arrItems[i].name;
    pName.setAttribute = ("class", "name");
    const pSpecies = document.createElement("p");
    pSpecies.textContent = arrItems[i].species;
    const pStatus = document.createElement("p");
    pStatus.textContent = arrItems[i].status;
    const pGender = document.createElement("p");
    pGender.textContent = arrItems[i].gender;
    const pType = document.createElement("p");
    pType.textContent = arrItems[i].type;

    const imagen = document.createElement("img");

    imagen.src = arrItems[i].image;

    card.appendChild(imagen);
    card.appendChild(pName);
    card.appendChild(pSpecies);
    card.appendChild(pStatus);
    card.appendChild(pGender);
    card.appendChild(pType);
    arrCards.push(card);
  }

  return arrCards;
}

//este for pinta el selector de personajes
for (var i = 0; i < dataRickAndMorty.length; i++) {
  especies.push(dataRickAndMorty[i].species);
  setGenero.push(dataRickAndMorty[i].gender);
}
const especiesOpciones = [...new Set(especies)];
//este for pinta el selector de especies
for (let especie of especiesOpciones) {
  selectorEspecies.innerHTML += `

      <option>${especie}</option>
   
`;
}
const generosOpciones = [...new Set(setGenero)];
for (let gener of generosOpciones) {
  selectorGenero.innerHTML += `

<option>${gener}</option>
`;
}
// idealmente que esto ocurra cuando hay evento onload
function print(data) {
  for (let e = 0; e < 20; e++) {
    //selectorRoot.innerHTML += `<div>${dataRickAndMorty[e].name}</div>`;
    selectorRoot.appendChild(getCards(data)[e]);
  }
}

//print(dataRickAndMorty);

selectorEspecies.addEventListener("change", function () {
  document.getElementById("root").innerHTML = "";
  const dataFiltrada = filterData(dataRickAndMorty, selectorEspecies.value);
  if (selectorGenero.value !== "generos") {
    print(sortData(filtroGenero(dataFiltrada, selectorGenero.value),"name"));
  }else{
    print(sortData(dataFiltrada, "name"));
  }

  
});

selectorGenero.addEventListener("change", function () {
  document.getElementById("root").innerHTML = "";
  //hacer que se impriman las nuevas
  const dataFiltrada = filtroGenero(dataRickAndMorty, selectorGenero.value);

  if (selectorEspecies.value !== "Especies") {
  
    print(sortData(filterData(dataFiltrada, selectorEspecies.value),"name"));
  }else{
    print(sortData(dataFiltrada, "name"));
  }
  
});
