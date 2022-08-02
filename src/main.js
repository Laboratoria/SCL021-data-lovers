//import { example } from './data.js';
// import data from './data/lol/lol.js';
  import data from './data/athletes/athletes.js';
  const divRoot = document.getElementById("root");//div de html donde guardare objetos de js
  const fragment = document.createDocumentFragment()
  const liTemplate = document.getElementById("liTemplate")//capturamos template de html

  const teamAthletes = data.athletes;
//   const result = data.athletes.reduce(function (allTeam, athletes) {//aqui se crea la const para aplicar el reduce y queremos traer el pais 
//     return Array.from(new Set([...allTeam, ...athletes.team]))//deberia retornar solo los paises sin repetirse 
//   }, [])



function botonPais(){
    paises
}

document.getElementById("btnPais").onclick = function(){
    botonPais();
}


  const prueba = teamAthletes.map(function(item){
    return item.team
  })
  const paises = new Set ([...prueba])


  console.log(paises)
  

   

 
 

  //console.log(newTeamAthletes)
  

  teamAthletes.forEach(paises => {
     const clone = liTemplate.content.cloneNode(true)
     clone.getElementById("text-primary").textContent = paises.team

     fragment.appendChild(clone)
 })

 divRoot.appendChild(fragment)
 
    
    
    
 
 //console.log(data.athletes["age"]);

//  const nuevoParrafo = document.createElement("p");
//  nuevoParrafo.className.add(pais);

 
//  const atleta = data.athletes[i].name;
//  const deporte = data.athletes[i].sport;
//  const medalla = data.athletes[i].medal;



//  pais.array.forEach(paises => {
//     const parrafo = document.createElement('p');
//     parrafo.className=pais;
    
//  });


//   for(let i = 0; i <= data.athletes.length; i++){
//       console.log(data.athletes[i].team);
//      console.log(data.athletes[i].name);
//      console.log(data.athletes[i].sport);
//      console.log(data.athletes[i].medal);
    
  //}