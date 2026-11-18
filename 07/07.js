
const BASE = "https://192.168.207.54:3003";

const mensaje = document.getElementById("mensaje");
const listaUsuarios = document.getElementById("users");
const contPosts = document.getElementById("posts");
const listaTodos = document.getElementById("comments");

async function obtener(ruta) {
  const respuesta = await fetch(BASE + ruta);   
  if (!respuesta.ok) {                          
    throw new Error("Error HTTP " + respuesta.status);
  }
  return await respuesta.json();                
}

async function cargarUsuarios() {
  try {                                         // try/catch para controlar errores de red
    const usuarios = await obtener("/users");   // array de objetos
    mensaje.textContent = "";

    usuarios.forEach((u) => {
      const li = document.createElement("li");
      li.textContent = u.name + " (" + u.email + ")";
      li.classList.add("usuario");
      // Al hacer clic, cargo sus posts y sus tareas (endpoints 2 y 3)
      li.addEventListener("click", () => {
        // quito la marca del anterior y la pongo en este
        document.querySelectorAll(".usuario").forEach((el) => el.classList.remove("activo"));
        li.classList.add("activo");
        cargarDetalle(u.id);
      });
      listaUsuarios.appendChild(li);
    });
  } catch (err) {
    mensaje.textContent = "No se pudieron cargar los usuarios: " + err.message;
  }
}