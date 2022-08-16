import { filterData, filtroGenero, sortData } from "../src/data.js";

const dataPersonajes = [
  {
    name: "Rick Sanchez",
    species: "Human",
    gender: "Male",
  },
  {
    name: "Morty Smith",
    species: "Human",
    gender: "Male",
  },
  {
    name: "Summer Smith",
    species: "Human",
    gender: "Female",
  },
  {
    name: "Beth Smith",
    species: "Human",
    gender: "Female",
  },
  {
    name: "Jerry Smith",
    species: "Human",
    gender: "Male",
  },
  {
    name: "Abadango Cluster Princess",
    species: "Alien",
    gender: "Female",
  },
];

describe("filterData filtra las especies", () => {
  it("is a function", () => {
    expect(typeof filterData).toBe("function");
  });

  it("Deberia retornar solo los personajes de la especie humana", () => {
    let resultado = filterData(dataPersonajes, "Human");
    expect(resultado[0].name).toBe("Rick Sanchez");
    expect(resultado[1].name).toBe("Morty Smith");
    expect(resultado[2].name).toBe("Summer Smith");
    expect(resultado[3].name).toBe("Beth Smith");
    expect(resultado[4].name).toBe("Jerry Smith");
  });
});
describe("filtroGenero, filtra informacion por genero de personaje",() => { 
it("is a function", () => {
  expect(typeof filtroGenero).toBe("function");
});
it("deberia retornar los datos filtrados por genero",()=> {
  let resultado = filtroGenero(dataPersonajes, "Male")
  expect(resultado[0].name).toBe("Rick Sanchez");
  expect(resultado[1].name).toBe("Morty Smith");
  expect(resultado[2].name).toBe("Jerry Smith");
})
});

describe("sortData ordena de la A-Z",() => {
  it("is a fuction", () => {
    let resultado = sortData(dataPersonajes, "name")
    expect(resultado[0].name).toBe("Abadango Cluster Princess");
    expect(resultado[1].name).toBe("Beth Smith");
    expect(resultado[2].name).toBe("Jerry Smith")
    expect(resultado[3].name).toBe("Morty Smith");
    expect(resultado[4].name).toBe("Rick Sanchez");
    expect(resultado[5].name).toBe("Summer Smith");
  })
});