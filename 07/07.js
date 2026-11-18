'use strict'

async function getGuztia() {
    let api = "http://192.168.207.54:3003/users";
    let api2 = "http://192.168.207.54:3003/posts";
    let api3 = "http://192.168.207.54:3003/comments";

    const respuesta = await fetch(api);
    const respuesta2 = await fetch(api2);
    const respuesta3 = await fetch(api3);
    const users = await respuesta.json();
    const posts = await respuesta2.json();
    const comments = await respuesta3.json();

    let erabs = document.getElementById('users');
    let igota = document.getElementById('posts');
    let komentarioak = document.getElementById('comments');

    let zbk1 = 0;
    let zbk2 = 0;
    let zbk3 = 0;

    for (let i = 1; i <= users.length; i++) {
        zbk1++;
    }

    for (let i = 1; i <= posts.length; i++) {
        zbk2++;
    }

    for (let i = 1; i <= comments.length; i++) {
        zbk3++;
    }

    erabs.textContent = zbk1;
    igota.textContent = zbk2;
    komentarioak.textContent = zbk3;
}

getGuztia();