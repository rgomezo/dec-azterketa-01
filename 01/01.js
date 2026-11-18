"use strict";
const usuarios = [
    { id: 1, nombre: 'Alice', edad: 25, correo: 'alice@example.com', activo: true },
    { id: 2, nombre: 'Bob',   edad: 30, correo: 'bob@example.com', activo: false },
    { id: 3, nombre: 'Carol', edad: 28, correo: 'carol@example.com', activo: true },
    { id: 4, nombre: 'David', edad: 22, correo: 'david@example.com', activo: false },
    { id: 5, nombre: 'Eve',   edad: 32, correo: 'eve@example.com', activo: false},
    { id: 6, nombre: 'Frank', edad:35,  correo: 'frank@example.com', activo: true}
];


const tabla = document.getElementsByName("table");
const thead = document.getElementsByName("thead");
const tbody = document.getElementById("table");
const boton = document.createElement("button");


usuarios.forEach((usuario) => {
  
  const tr = document.createElement("tr");
  const boton = document.createElement("button");
  Object.values(usuario).forEach((valor) => {
    const td = document.createElement("td");
    td.textContent = valor;
    tr.appendChild(td);
    tr.appendChild(boton);
    if(usuario.activo){
      boton.textContent= "Habilitar"


    } else {
      boton.textContent= "Deshabilitar"

    }
  });
  tbody.appendChild(tr);
  
});

tabla.appendChild(thead)
tabla.appendChild(tbody);
