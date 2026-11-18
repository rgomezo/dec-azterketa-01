"use strict";
const usuarios = [
    { id: 1, nombre: 'Alice', edad: 25, correo: 'alice@example.com', activo: true },
    { id: 2, nombre: 'Bob',   edad: 30, correo: 'bob@example.com', activo: false },
    { id: 3, nombre: 'Carol', edad: 28, correo: 'carol@example.com', activo: true },
    { id: 4, nombre: 'David', edad: 22, correo: 'david@example.com', activo: false },
    { id: 5, nombre: 'Eve',   edad: 32, correo: 'eve@example.com', activo: false},
    { id: 6, nombre: 'Frank', edad:35,  correo: 'frank@example.com', activo: true}
];

const table = document.getElementById("table");

function akzioaUsuarios() {

    for (const usuarios of akzioaUsuarios) {

        const tr = document.createElement("tr");
        
        const tdId = document.createElement("td");
        tdId.textContent = usuarios.id;
        tr.appendChild(tdId);
        
        const tdNombre = document.createElement("td");
        tdNombre.textContent = usuarios.nombre;
        tr.appendChild(tdNombre);
        
        const tdEdad = document.createElement("td");
        tdEdad.textContent = usuarios.edad;
        tr.appendChild(tdEdad);

        const tdCorreo = document.createElement("td");
        tdCorreo.textContent = usuarios.correo;
        tr.appendChild(tdCorreo);

        const tdActivo = document.createElement("td");
        tdActivo.textContent = usuarios.activo;
        tr.appendChild(tdActivo);
        
        table.appendChild(tr);
    }
}


