//import { example } from './data.js';
import data from './data/athletes/athletes.js';
import { filterData } from './data.js';

const teamAthletes = data.athletes;//trae la base de datos de atlethes

function sortData(data, columna="team"){
    data.sort((a, b) => {
        return a[columna] < b[columna] ? -1 : 1;
    })
};
sortData(teamAthletes, );

function showAthletes(lista){
    let medalsTable=document.getElementById("medalsTable");
    let htmlmedals="";
    lista.forEach(function(pais){
      htmlmedals = htmlmedals + `
      <tr>
      <td>${pais.team}</td>
      <td>${pais.name}</td>
      <td>${pais.sport}</td>
      <td>${pais.medal}</td>
      </tr>
      `
  
    })
    medalsTable.innerHTML=htmlmedals
  }
  showAthletes(teamAthletes);
  

let country = "";
let sport = "";

function handleChange(event) {
    //console.log(event.target.value)
    if (event.target.name === "country") {
        country = event.target.value
    }
    if (event.target.name === "sport") {
        sport = event.target.value
    }
   
    let filterTeam = filterData(teamAthletes, country, sport);
    if (country === "Pais"){
        
        showAthletes(teamAthletes)
    }else{
        if (sport === "Deporte"){
            
            showAthletes(filterTeam);
        }else{
            
            showAthletes(filterTeam);
        }
    }
        
    
}

//funcion que filtra al momento de seleccionar el pais en el listado
const select = document.getElementById('pais');
select.addEventListener('change', handleChange);
const selectSport = document.getElementById('deporte');
selectSport.addEventListener('change', handleChange);

//funcion que hace un array con todos los paises de la DB sin repetirlos
const prueba = teamAthletes.map(function (item) {
    return item.team
})
const paises = Array.from(new Set([...prueba]))
//console.log(paises)

//funcion para cargar los paises en el boton select
function cargarPaises() {
    const arrayPaises = paises;
    arrayPaises.sort();// Ordena el boton select alfabeticamente
    for (const i in arrayPaises) {
        document.getElementById("pais").innerHTML += "<option value='" + arrayPaises[i] + "'>" + arrayPaises[i] + "</option>";
    }
}
cargarPaises();

//funcion que hace un array con todos los deportes de la DB sin repetirlos
const pruebaSPort = teamAthletes.map(function (item) {
    return item.sport
})
const deporte = Array.from(new Set([...pruebaSPort]))
//console.log(paises)

//funcion para cargar los deportes en el boton select
function cargarDeporte() {
    const arrayDeportes = deporte;
    arrayDeportes.sort();// Ordena el boton select alfabeticamente
    for (const i in arrayDeportes) {
        document.getElementById("deporte").innerHTML += "<option value='" + arrayDeportes[i] + "'>" + arrayDeportes[i] + "</option>";
    }
}
cargarDeporte();














