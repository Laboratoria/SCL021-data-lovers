//import { example } from './data.js';

import rickandmorty from "./data/rickandmorty/rickandmorty.js";
import data from "./data/rickandmorty/rickandmorty.js";

//console.log(data.results);
const dataRickAndMorty = data.results;
const especies = new Set();
//selectores de los filtros y de la seccion donde se van a pintar los personajes
const selectorPersonajes = document.getElementById("personajes");
const selectorEspecies = document.getElementById("especiess");
const selectorRoot = document.getElementById("root");

function getCards(arrItems) {
  const arrCards = [];

  for (let i = 0; i < arrItems.length; i++) {
    const card = document.createElement("div");
    card.setAttribute("id","boxcard")
    const pName = document.createElement("p");
    pName.textContent = arrItems[i].name;
    pName.setAttribute = ("class", "name")
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
  especies.add(dataRickAndMorty[i].species);


}
//este for pinta el selector de especies
for (let especie of especies) {
  selectorEspecies.innerHTML += `

      <option>${especie}</option>
   
`;
}
// idealmente que esto ocurra cuando hay evento onload
function print(data){
for (let e = 0; e < 5; e++) {
  //selectorRoot.innerHTML += `<div>${dataRickAndMorty[e].name}</div>`;
  selectorRoot.appendChild(getCards(data)[e]);
}
}

print(dataRickAndMorty);

selectorEspecies.addEventListener("change", function () {
  document.getElementById("root").innerHTML = ""
  //hacer que se impriman las nuevas
  //console.log(selectorEspecies.value);
  let dataFiltered = dataRickAndMorty.filter(function (character) {
    return character.species === selectorEspecies.value;
  })
  //console.log
  print(dataFiltered);
 
});
///////////////////////////////////////////////////////////////








//crear los listener de los filtros selectores (personajes y especie)
//con los valores seleccionados en el filtros realizar una funcion para el filtrado en base a los valores seleccionados
//estas funciones deben estar en el datajs
//console.log(especies)
//console.log(dataRickAndMorty.length);