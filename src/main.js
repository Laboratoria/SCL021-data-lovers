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
    const pName = document.createElement("p");
    pName.textContent = arrItems[i].name;
    const pSpecies = document.createElement("p");
    pSpecies.textContent = arrItems[i].species;

    
    
    const imagen = document.createElement("img");
    imagen.src = arrItems[i].image;

    card.appendChild(imagen);
    card.appendChild(pName);
    card.appendChild(pSpecies);
    

    arrCards.push(card);
  }

  return arrCards;
}

//este for pinta el selector de personajes
for (var i = 0; i < dataRickAndMorty.length; i++) {
  especies.add(dataRickAndMorty[i].species);

  selectorPersonajes.innerHTML += `
<select>
      <option>${dataRickAndMorty[i].name}</option>
    </select>  
`;
}
//este for pinta el selector de especies
for (let especie of especies) {
  selectorEspecies.innerHTML += `
<select>
      <option>${especie}</option>
    </select>
`;
}
//este for solo pinta los primeros 5 personajes para las cajas
const arrCards = getCards(dataRickAndMorty);
for (let e = 0; e < 20; e++) {

  //selectorRoot.innerHTML += `<div>${dataRickAndMorty[e].name}</div>`;
  selectorRoot.appendChild(arrCards[e]);
}

selectorEspecies.addEventListener("change",function(){
  console.log(selectorEspecies.value)
  const dataFiltered = dataRickAndMorty.filter(function(character){
    return character.species == selectorEspecies.value
    
  })
  console.log (dataFiltered)
  
   

})


///////////////////////////////////////////////////////////////








//crear los listener de los filtros selectores (personajes y especie)
//con los valores seleccionados en el filtros realizar una funcion para el filtrado en base a los valores seleccionados
//estas funciones deben estar en el datajs
//console.log(especies)
//console.log(dataRickAndMorty.length);