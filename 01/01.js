"use strict";

const usuarios = [
  {
    id: 1,
    nombre: "Alice",
    edad: 25,
    correo: "alice@example.com",
    activo: true,
  },
  { id: 2, nombre: "Bob", edad: 30, correo: "bob@example.com", activo: false },
  {
    id: 3,
    nombre: "Carol",
    edad: 28,
    correo: "carol@example.com",
    activo: true,
  },
  {
    id: 4,
    nombre: "David",
    edad: 22,
    correo: "david@example.com",
    activo: false,
  },
  { id: 5, nombre: "Eve", edad: 32, correo: "eve@example.com", activo: false },
  {
    id: 6,
    nombre: "Frank",
    edad: 35,
    correo: "frank@example.com",
    activo: true,
  },
];

const tbody = document.querySelector("#table");

function taulaBete(usuarios) {
  for (const usuario of usuarios) {
    const tr = document.createElement("tr");

    const tdId = document.createElement("td");
    tdId.textContent = usuario.id;
    tr.append(tdId);

    const tdNombre = document.createElement("td");
    tdNombre.textContent = usuario.nombre;
    tr.append(tdNombre);

    const tdEdad = document.createElement("td");
    tdEdad.textContent = usuario.edad;
    tr.append(tdEdad);

    const tdCorreo = document.createElement("td");
    tdCorreo.textContent = usuario.correo;
    tr.append(tdCorreo);

    const tdActivo = document.createElement("td");
    tdActivo.textContent = usuario.activo;
    tr.append(tdActivo);

    const tdAccion = document.createElement("td");
    tr.append(tdAccion);

    tbody.append(tr);
  }
}
taulaBete(usuarios);
