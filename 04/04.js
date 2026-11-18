'use strict'

const usuarios = [
    { id: 1, titulo: 'Alice', año: 25, autor: 'alice@example.com', leido: true },
    { id: 2, titulo: 'Bob', año: 30, autor: 'bob@example.com', leido: false },
    { id: 3, titulo: 'Carol', año: 28, autor: 'carol@example.com', leido: true }
];

usuarios.forEach(element => {
    let titulo = element['titulo'];
    let año = element['año'];
    let autor = element['autor'];
    let leido = element['leido'];

    let info = [titulo, año, autor, leido];

    localStorage.setItem('azterketa4', info);

    console.log(localStorage.getItem('azterketa4'));
    
})

let formulario = document.getElementById('formulario').addEventListener('submit', añadir);

function añadir(event) {
    event.preventDefault();
    let errores = document.getElementById('lista_errores');
    let li = document.createElement('li');

    let titulo = document.getElementById('titulo').value;
    let autor = document.getElementById('autor').value;
    let año = document.getElementById('year').value;
    let leido = document.getElementById('status').value;

    if (titulo.trim() === "" || autor.trim() === "" || año <= 0) {
        // errores.innerHTML = '';
        errores.className = "";
        li.textContent = "ERROR, revisa los datos introducidos";
        errores.appendChild(li);
    } else {
        let tbody = document.getElementById('table');

        let tr = document.createElement('tr');

        let titulo2 = document.createElement('td');
        titulo2.textContent = titulo;
        let autor2 = document.createElement('td');
        autor2.textContent = autor;
        let año2 = document.createElement('td');
        año2.textContent = año;
        let leido2 = document.createElement('td');
        if (leido == true) {
            leido2.textContent = 'Si';
        } else {
            leido2.textContent = 'No';
        }

        tr.appendChild(titulo2);
        tr.appendChild(autor2);
        tr.appendChild(año2);
        tr.appendChild(leido2);

        tbody.appendChild(tr);
    }

}