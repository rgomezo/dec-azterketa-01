"use strict";

const table = [
    { id: 1, nombre: 'Alice', edad: 25, correo: 'alice@example.com', activo: true },
    { id: 2, nombre: 'Bob',   edad: 30, correo: 'bob@example.com', activo: false },
    { id: 3, nombre: 'Carol', edad: 28, correo: 'carol@example.com', activo: true },
    { id: 4, nombre: 'David', edad: 22, correo: 'david@example.com', activo: false },
    { id: 5, nombre: 'Eve',   edad: 32, correo: 'eve@example.com', activo: false},
    { id: 6, nombre: 'Frank', edad:35,  correo: 'frank@example.com', activo: true}
];

const tbody = document.querySelector("#table");

function taulaBete(table) {
    for (const usuario of usuarios) {
        // Crear la fila
        const tr = document.createElement("tr");

        // Crear la celda del nombre, rellenarla y meterla en la fila
        const tdNombre = document.createElement("td");
        tdNombre.textContent = table.nombre;
        td.append(tdIzena);

        const tdEdad = document.createElement("td");
        tdEdad.textContent = usuarios.edad;
        tr.append(tdEdad);

        const tdCorreo = document.createElement("td");
        tdCorreo.textContent = usuarios.correo;
        tr.append(tdCorreo);

        const tdActivo = document.createElement("td");
        tdActivo.textContent = usuarios.activo;
        tr.append(tdActivo);

        // Meter la fila terminada en el body
        tbody.append(tr);
    }
}
taulaBete(table);

