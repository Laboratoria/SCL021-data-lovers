//import { example } from './data.js';

import data from "./data/rickandmorty/rickandmorty.js";

//console.log(data.results);
const dataRickAndMorty = data.results;
const especies = new Set()
const selectBody = document.getElementById("personajes");
const selectsBody = document.getElementById("especies");
for (var i = 0; i < dataRickAndMorty.length; i++) {
    especies.add(dataRickAndMorty[i].species);

    selectBody.innerHTML += `

<select>
      <option>${dataRickAndMorty[i].name}</option>
    </select>
    
    
`;
}

for (let i = 0; i < especies.size; i++) {
    selectsBody.innerHTML += `

<select>
      <option>${especies}</option>
    </select>

`;
}

//console.log(dataRickAndMorty.length);
