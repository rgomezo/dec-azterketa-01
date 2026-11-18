"use strict";

const usuarios = [
    { id: 1, nombre: 'Alice', edad: 25, correo: 'alice@example.com', activo: true },
    { id: 2, nombre: 'Bob',   edad: 30, correo: 'bob@example.com', activo: false },
    { id: 3, nombre: 'Carol', edad: 28, correo: 'carol@example.com', activo: true },
    { id: 4, nombre: 'David', edad: 22, correo: 'david@example.com', activo: false },
    { id: 5, nombre: 'Eve',   edad: 32, correo: 'eve@example.com', activo: false},
    { id: 6, nombre: 'Frank', edad:35,  correo: 'frank@example.com', activo: true}
];

const taula = document.querySelector("#usuarios");

function taulaBete(usuarios) {
    for (const usuario of usuarios) {
        // Crear la fila
        const tr = document.createElement("tr");

        // Crear la celda del nombre, rellenarla y meterla en la fila
        const tdId = document.createElement("td"); //create element para crear una fila horizontal
        tdId.textContent = usuario.id; //aqui para meterle el izena 
        tr.append(tdId); //mete la celda (tdIzena) dentro de la fila (tr)

        const tdEdad = document.createElement("td"); //create element para crear fila horizontal(el td)
        tdEdad.textContent = usuario.edad;
        tr.append(tdEdad);
                                                                                
        const tdCorreo = document.createElement("td");
        tdCorreo.textContent = usuario.correo;
        tr.append(tdCorreo);

        const tdActivo = document.createElement("td");
        tdActivo.textContent = usuario.activo;
        tr.append(tdActivo);

        // Meter la fila terminada en el body
        taula.append(tr);  
    }
}
//esto ponerlo siempre para llamar al metodo despues del ejercicio
taulaBete(usuarios);

