"use strict";

const liburuak = [
  {
    titulo: "El Hobbit",
    autor: "J.R.R. Tolkien",
    year: "1937",
    leido: true,
  },
  {
    titulo: "The Martian",
    autor: "Andy Weir",
    year: "2011",
    leido: true,
  },
  {
    titulo: "Juego De Tronos",
    autor: "George R.R. Martin",
    year: "1996",
    leido: false,
  },
];

const tbody = document.querySelector("#lista");
const titulo = document.querySelector("#titulo");
const autor = document.querySelector("#autor");
const year = document.querySelector("#year");
const boton = document.querySelector("#boton");

function taulaBete(liburuak) {
  for (const liburua of liburuak) {
    const tr = document.createElement("tr");

    const tdTitulo = document.createElement("td");
    tdTitulo.textContent = liburua.titulo;
    tr.append(tdTitulo);

    const tdAutor = document.createElement("td");
    tdAutor.textContent = liburua.autor;
    tr.append(tdAutor);

    const tdYear = document.createElement("td");
    tdYear.textContent = liburua.year;
    tr.append(tdYear);

    const tdLeido = document.createElement("td");
    tdLeido.textContent = liburua.leido;
    tr.append(tdLeido);

    tbody.append(tr);
  }
}
taulaBete(liburuak);

boton.addEventListener("click", () => {
  if (empty(titulo)) {
    if (empty(autor)) {
      if (empty(year)) {
      }
    }
  }
});
