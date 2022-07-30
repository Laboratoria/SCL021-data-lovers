//import { example } from './data.js';
// import data from './data/lol/lol.js';
 import data from './data/athletes/athletes.js';
 const divRoot = document.getElementById("root");//div de html donde guardare objetos de js
 //const fragment = document.createDocumentFragment()
 //console.log(data.athletes["age"]);

 const pais = data.athletes[i].team;
 const nuevoParrafo = document.createElement("p");
 nuevoParrafo.className.add(pais);

 
 const atleta = data.athletes[i].name;
 const deporte = data.athletes[i].sport;
 const medalla = data.athletes[i].medal;



//  pais.array.forEach(paises => {
//     const parrafo = document.createElement('p');
//     parrafo.className=pais;
    
//  });


 for(let i = 0; i <= data.athletes.length; i++){
     console.log(data.athletes[i].team);
     console.log(data.athletes[i].name);
     console.log(data.athletes[i].sport);
     console.log(data.athletes[i].medal);
    


 }