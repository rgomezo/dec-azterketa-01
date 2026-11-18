const users = document.getElementById("users");
const posts = document.getElementById("posts");
const comments = document.getElementById("comments");

let idsUsuario = [];
let idsPosts = [];

async function obtener() {
  try {
    if (users) {
      const respuesta1 = await fetch("http://192.168.207.54:3003/users");

      if (!respuesta1.ok) {
        throw new Error(`Error HTTP: ${respuesta1.status}`);
      }

      const usuarios = await respuesta1.json();

      let contErabil = 0;

      for (let i = 0; i < usuarios.length; i++) {
        contErabil = contErabil + 1;
      }

      /* usuarios.forEach((usuario) => {
        idsUsuario = usuario.id;
      }); */

      const p = document.createElement("p");

      p.textContent = contErabil;
      users.append(p);
    }

    if (posts) {
      const respuesta2 = await fetch("http://192.168.207.54:3003/posts");
      if (!respuesta2.ok) {
        throw new Error(`Error HTTP: ${respuesta2.status}`);
      }

      const envios = await respuesta2.json();

      let contPost = 0;

      for (let i = 0; i < envios.length; i++) {
        contPost = contPost + 1;
      }

      /* usuarios.forEach((usuario) => {
        idsPosts = posts.id;
      }); */

      const p = document.createElement("p");

      p.textContent = contPost;
      posts.append(p);
    }
    if (comments) {
      const respuesta3 = await fetch(
        "http://192.168.207.54:3003/users/1/comments",
      );
      if (!respuesta3.ok) {
        throw new Error(`Error HTTP: ${respuesta3.status}`);
      }

      const comentarios = await respuesta3.json();

      let contKomentario = 0;

      for (let i = 0; i < comentarios.length; i++) {
        contKomentario = contKomentario + 1;
      }

      const p = document.createElement("p");

      p.textContent = contKomentario;
      posts.append(p);
    }
  } catch (error) {
    console.log(error);
  }
}

obtener();
