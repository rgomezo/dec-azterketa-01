"use strict";
const URL_API = "https://192.168.207.54:3003";

const formulario = document.getElementById("formulario");
const content = document.getElementById("content");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault(); // no recargar la página

  // ---------- 2) LEER CAMPOS ----------
  const titulo = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();
  const author = document.getElementById("author").value;   // value del select ("" si no eligió)
  const publicado = document.getElementById("published").checked;       // true / false

  // ---------- 3) VALIDAR (acumulo errores en un array) ----------
  const errores = [];
  if (titulo.length < 3) { errores.push("El título necesita mínimo 3 caracteres"); }

  

  if (author === "") { errores.push("Elige un ator"); }
  if (!publicado) { errores.push("Debes marcar si esta publicado"); }

  if (errores.length > 0) {
    mensaje.textContent = errores.join(" | ");
    mensaje.className = "error";   
    resultado.textContent = "";
    return;                        
  }

  // ---------- 4) ENVIAR (POST) ----------
  // El objeto que mandamos al servidor
  const datos = {
    title: titulo,
    content,
    bookId: 1,                       
    author
  };

  try {
    mensaje.textContent = "Enviando...";
    mensaje.className = "";

    const respuesta = await fetch(URL_API, {
      method: "POST",                                             // método
      headers: { "Content-Type": "application/json; charset=UTF-8" }, // avisamos de que va JSON
      body: JSON.stringify(datos)                                 // el body SIEMPRE como string
    });

    // ---------- 5) COMPROBAR ----------
    if (!respuesta.ok) {
      throw new Error("Error HTTP " + respuesta.status);
    }

    // ---------- 6) MOSTRAR RESULTADO ----------
    const creado = await respuesta.json();   // el servidor devuelve lo creado (con id)
    mensaje.textContent = "Enviado correctamente. ID asignado: " + creado.id;
    mensaje.className = "ok";
    resultado.textContent = JSON.stringify(creado, null, 2); // null,2 = con sangría legible
    formulario.reset();
  } catch (err) {
    mensaje.textContent = "Error al enviar: " + err.message;
    mensaje.className = "error";
  }
});