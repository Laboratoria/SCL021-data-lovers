//import { example } from './data.js';
import data from './data/athletes/athletes.js';
import { filterData } from './data.js';

const divRoot = document.getElementById("root");//div de html donde se guardaran objetos de js
const fragment = document.createDocumentFragment()
const liTemplate = document.getElementById("liTemplate")//capturamos template de html

const teamAthletes = data.athletes;//trae la base de datos de atlethes

//funcion que trae los datos a HTML
function listaPaises(lista) {
    divRoot.innerHTML = "";
    lista.forEach(paises => {
        const divContainerAthletes = document.createElement("div");
        divContainerAthletes.classList.add("divContainerAthletes");
        //crean las listas 
        const pNameAthletes = document.createElement("list");
        pNameAthletes.classList.add("pNameAthletes");
        const pTeamAthletes = document.createElement("list");
        pTeamAthletes.classList.add("pTeamAthletes");
        const pSportAthletes = document.createElement("list");
        pSportAthletes.classList.add("pSportAthletes");
        const pMedalAthletes = document.createElement("list");
        pMedalAthletes.classList.add("pMedalAthletes");
        const clone = liTemplate.content.cloneNode(true)
        //se le da el valor de la data
        pTeamAthletes.textContent = paises.team
        pNameAthletes.textContent = paises.name
        pSportAthletes.textContent = paises.sport
        pMedalAthletes.textContent = paises.medal
        //se refleja en la pagina
        divContainerAthletes.appendChild(pTeamAthletes)
        divContainerAthletes.appendChild(pNameAthletes)
        divContainerAthletes.appendChild(pSportAthletes)
        divContainerAthletes.appendChild(pMedalAthletes)
        fragment.appendChild(divContainerAthletes)
    })
    divRoot.appendChild(fragment)
}
listaPaises(teamAthletes);

let country = "";
let sport = "";
let medal = "";

function handleChange(event) {
    console.log(event.target.value)
    if (event.target.name === "country"){
        country=event.target.value
    }
    if (event.target.name === "sport"){
        sport=event.target.value
    }
    if (event.target.name === "medal"){
        medal=event.target.value
    }
    let filterTeam = filterData(teamAthletes, country);
    console.log(filterTeam);
    // filterTeam = filterData (filterTeam, sport);
    // console.log(filterTeam);
    // filterTeam = filterData (filterTeam, medal);
    // console.log(filterTeam);
    if (country === "Pais")
        listaPaises(teamAthletes);
    else
        listaPaises(filterTeam);
    

       // console.log(handleChange);

    // const filterSport = filterData(teamAthletes, event.target.value);

    //  if (event.target.value === "Deporte")
    //      listaPaises(teamAthletes);
    // else
    //     listaPaises(filterSport);
}




// function handleChangeDos(event) {
//     // console.log(event.target.value)
//     const filterTeam = filterData(teamAthletes, event.target.value);
//     if (event.target.value === "Deporte")
//         listaPaises(teamAthletes);
//     else
//         listaPaises(filterTeam);
// }

//funcion que filtra al momento de seleccionar el pais en el listado
const select = document.getElementById('pais');
select.addEventListener('change', handleChange);
const selectSport = document.getElementById('deporte');
selectSport.addEventListener('change', handleChange);
const selectMedal = document.getElementById('medalla');
selectMedal.addEventListener('change', handleChange);

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


//funcion que hace un array con todas las medallas de la DB sin repetirlos
const pruebaMedalla = teamAthletes.map(function (item) {
    return item.medal
})
const medalla = Array.from(new Set([...pruebaMedalla]))
console.log(medalla)

//funcion para cargar las medallas en el boton select
 function cargarMedalla() {
     const arrayMedalla = medalla;
     arrayMedalla.sort();// Ordena el boton select alfabeticamente
     for (const i in arrayMedalla) {
         document.getElementById("medalla").innerHTML += "<option value='" + arrayMedalla[i] + "'>" + arrayMedalla[i] + "</option>";
     }
 }
 cargarMedalla();








//   const sortedAthletes = teamAthletes.sort( (a,b) => {
      
//       return -1 ? : 1 ; 
//      });
      
// console.log(sortedAthletes);






//  const atleta = data.athletes[i].name;
//  const deporte = data.athletes[i].sport;
//  const medalla = data.athletes[i].medal;

