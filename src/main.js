//import { example } from './data.js';

 import data from './data/rickandmorty/rickandmorty.js';

console.log(data.results)
const dataRickAndMorty = data.results;

const selectBody = document.getElementById("personajes")
const selectsBody = document.getElementById("especies")
for (var i = 0; i < dataRickAndMorty.length; i++) {
selectBody.innerHTML += `

<select>
      <option>${dataRickAndMorty[i].name}</option>
    </select>
    
    
`;

selectsBody.innerHTML += `

<select>
      <option>${dataRickAndMorty[i].species}</option>
    </select>

`;
}

console.log(dataRickAndMorty.length)
 
