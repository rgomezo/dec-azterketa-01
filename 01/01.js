'use strict'

const usuarios = [
    { id: 1, nombre: 'Alice', edad: 25, correo: 'alice@example.com', activo: true },
    { id: 2, nombre: 'Bob', edad: 30, correo: 'bob@example.com', activo: false },
    { id: 3, nombre: 'Carol', edad: 28, correo: 'carol@example.com', activo: true },
    { id: 4, nombre: 'David', edad: 22, correo: 'david@example.com', activo: false },
    { id: 5, nombre: 'Eve', edad: 32, correo: 'eve@example.com', activo: false },
    { id: 6, nombre: 'Frank', edad: 35, correo: 'frank@example.com', activo: true }
];


let tbody = document.getElementById('table');

usuarios.forEach(element => {
    let tr = document.createElement('tr');

    let id = document.createElement('td');
    id.textContent = element['id'];
    let nombre = document.createElement('td');
    nombre.textContent = element['nombre'];
    let edad = document.createElement('td');
    edad.textContent = element['edad'];
    let correo = document.createElement('td');
    correo.textContent = element['correo'];
    let activo = document.createElement('td');
    activo.textContent = element['activo'];

    let button = document.createElement('button');

    if(element['activo'] == false){
        button.textContent = "Habilitar";
    }else{
        button.textContent = "Deshabilitar";
    }

    tr.appendChild(id);
    tr.appendChild(nombre);
    tr.appendChild(edad);
    tr.appendChild(correo);
    tr.appendChild(activo);
    tr.appendChild(button);

    tbody.appendChild(tr);
})
