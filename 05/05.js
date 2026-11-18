'use strict'

async function getUsuarios() {
    let api = "http://192.168.207.54:3003/posts";

    const respuesta = await fetch(api);
    const posts = await respuesta.json();
    // console.log(posts);

    let main = document.getElementById('main');

    posts.forEach(element => {
        if (element.published == true) {

            let div1 = document.createElement('div');
            div1.className = 'post';

            let titulo = document.createElement('h2');
            titulo.className = 'titulo';
            titulo.textContent = element.title;

            let autor = document.createElement('span');
            autor.className = 'autor';
            autor.textContent = 'por ' + element.author.name;

            let fecha = document.createElement('span');
            fecha.className = 'fecha';
            fecha.textContent = ' el ' + element.createdAt;

            let content = document.createElement('div');
            content.className = 'content';
            content.textContent = element.content;

            div1.appendChild(titulo);
            div1.appendChild(autor);
            div1.appendChild(fecha);
            div1.appendChild(content);

            async function coment() {
                let api2 = "http://192.168.207.54:3003/posts/" + element.id + "/comments";

                const respuesta = await fetch(api2);
                const comentarios = await respuesta.json();
                //console.log(comentarios);

                let comments = document.createElement('div');
                comments.className = 'comments';

                //comments.textContent = comentarios.count();

                div1.appendChild(comments);
            }

            main.appendChild(div1);
        }

    });

}

getUsuarios();