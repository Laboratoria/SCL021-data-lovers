//import { example } from './data.js';
import data from './data/athletes/athletes.js';
const divRoot = document.getElementById("root");//div de html donde se guardaran objetos de js
const fragment = document.createDocumentFragment()
const liTemplate = document.getElementById("liTemplate")//capturamos template de html

const teamAthletes = data.athletes;//trae la base de datos de atlethes
  

//trae los datos de la DB del objeto team a nuestro html
teamAthletes.forEach(paises => {
    const clone = liTemplate.content.cloneNode(true)
    clone.getElementById("text-primary").textContent = paises.team
    fragment.appendChild(clone)
    })       
    divRoot.appendChild(fragment)
    //teamAthletes.sort();


//funcion que hace un array con todos los paises de la DB sin repetirlos
const prueba = teamAthletes.map(function(item){
    return item.team
  })
  const paises = Array.from(new Set ([...prueba]))
  //console.log(paises)

//funcion para cargar los paises en el boton select
function cargarPaises(){
    const arrayPaises = paises;
    arrayPaises.sort();// Ordena el boton select alfabeticamente
    for(const i in arrayPaises)
    {
        document.getElementById("pais").innerHTML += "<option value='"+arrayPaises[i]+"'>"+arrayPaises[i]+"</option>"; 
    }
}           

cargarPaises();


//  const atleta = data.athletes[i].name;
//  const deporte = data.athletes[i].sport;
//  const medalla = data.athletes[i].medal;

