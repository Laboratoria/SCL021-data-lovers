import data from './data/athletes/athletes.js';
import { filterData } from './data.js';

const teamAthletes = data.athletes;//trae la base de datos de atlethes

//funcion que hace que la data este ordenada el orden alfabetico por pais
function sortData(data, columna = "team") {
    data.sort((a, b) => {
        return a[columna] < b[columna] ? -1 : 1;
    })
}
sortData(teamAthletes);

//ORDENA DE A-Z
function sortName(data, columna = "name") {
    return data.sort((a, b) => {
        return a[columna] < b[columna] ? -1 : 1;
    })
}
//ORDENA DE Z-A
function sortNameReverse(data, columna = "name") {
    const sortedData = sortName(data)
    sortedData.reverse()
    return sortedData

}


//funcion de select ordenar
function handleChangeOrder() {
    //tomar valor de select que escoja el usuario
    //console.log("hola");

    const selectName = document.getElementById('order').value;
    //con ese valor comparar si tengo que ordenar ascendente o descendente
    if (selectName === "order-up") {
        const ordenAZ = sortName(teamAthletes)
        showAthletes(ordenAZ)
    }
    if (selectName === "order-down") {
        const ordenZA = sortNameReverse(teamAthletes)
        showAthletes(ordenZA)
    }
}

//se aplica la funcion
const selectName = document.getElementById('order');
selectName.addEventListener('change', handleChangeOrder);
//console.log(handleChangeOrder);

//funcion que muestra la DB en una tabla
function showAthletes(lista) {
    let medalsTable = document.getElementById("medalsTable");
    let htmlmedals = "";
    lista.forEach(function (pais) {
        //se crea un html dentro de JS, se empieza a crear nuestra tabla
        htmlmedals = htmlmedals + `
      <tr>
      
      <td>${pais.team}</td>
      <td>${pais.name}</td>
      <td>${pais.sport}</td>
      <td>${pais.medal}</td>
      </tr>
      `

    })
    medalsTable.innerHTML = htmlmedals
}
showAthletes(teamAthletes);


let country = "";
let sport = "";
let medal = "";

//funcion para cambiar los filtros
function handleChange(event) {
    //console.log(event.target.value)
    if (event.target.name === "country") {
        country = event.target.value
    }
    if (event.target.name === "sport") {
        sport = event.target.value
    }
    if (event.target.name === "medal") {
        medal = event.target.value
    }

    let filterTeam = filterData(teamAthletes, country, sport, medal);
    if (country === "País") {

        showAthletes(teamAthletes)
    } else {
        if (sport === "Deporte") {

            showAthletes(filterTeam);
        }
    }
    if (medal === "Medalla") {

        showAthletes(filterTeam);
    } else {

        showAthletes(filterTeam);
    }
    if (country === "País" && sport === "Deporte" && medal === "Medalla") {
        showAthletes(teamAthletes);
    }
}

//funcion que filtra al momento de seleccionar el pais en el listado
const select = document.getElementById('pais');
select.addEventListener('change', handleChange);
const selectSport = document.getElementById('deporte');
selectSport.addEventListener('change', handleChange);
const selectMedal = document.getElementById('medalla');
selectMedal.addEventListener('change', handleChange);

//funcion que hace un array con todos los paises de la DB sin repetirlos
const pruebaCountry = teamAthletes.map(function (item) {
    return item.team
})
const paises = Array.from(new Set([...pruebaCountry]))
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

//funcion que hace un array con todos los paises de la DB sin repetirlos
const pruebaMedal = teamAthletes.map(function (item) {
    return item.medal
})
const medallas = Array.from(new Set([...pruebaMedal]))
//console.log(paises)

//funcion para cargar los paises en el boton select
function cargarMedallas() {
    const arrayMedallas = medallas;
    arrayMedallas.sort();// Ordena el boton select alfabeticamente
    for (const i in arrayMedallas) {
        document.getElementById("medalla").innerHTML += "<option value='" + arrayMedallas[i] + "'>" + arrayMedallas[i] + "</option>";
    }
}
cargarMedallas();













