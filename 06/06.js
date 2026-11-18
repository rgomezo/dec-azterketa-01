'use strict'

async function getUsuarios() {
    let api = "http://192.168.207.54:3003/users";

    const respuesta = await fetch(api);
    const users = await respuesta.json();
    // console.log(users);
    // console.log(users.name);
    // console.log(users[name]);
    // console.log(users['name']);
    // console.log(users["name"]);
    // console.log(users[0]["name"]);

    let author = document.getElementById('author');

    for (let i = 1; i < users.length; i++) {
        // console.log(users[i]["name"]);
        let option = document.createElement('option');
        option.textContent = users[i]['name'];

        author.appendChild(option);
    }
}

getUsuarios();

async function guardar(event) {
    event.preventDefault();

    let titulo = document.getElementById('title').value;
    let contenido = document.getElementById('content').value;
    let autor = document.getElementById('author').value;
    let publikatuta = document.getElementById('published').value;

    let api = "http://192.168.207.54:3003/posts";

    const respuesta = await fetch(
        api,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: titulo,
                content: contenido,
                author: autor,
                published: publikatuta
            })
        }
    );
}
