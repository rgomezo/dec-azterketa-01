"use strict";

const formulario = document.querySelector("#formulario");                 // El formulario
const titleInput = document.querySelector("#title");          // <input> del título
const contentInput = document.querySelector("#content");                // <textarea> del cuerpo
const authorSelect = document.querySelector("#author"); // <select> del usuario
const boton = document.querySelector("#boton");               // Botón de enviar
const emaitza = document.querySelector("#emaitza");                   // Donde se muestra el resultado

const API = "http://192.168.207.54:3003/users";

function emaitzaIdatzi(testua, klasea) {
  emaitza.textContent = testua;
  emaitza.className = klasea;
}

formulario.addEventListener("submit", async (e) => {

  // Evita el envío normal, que recargaría la página (pág. 127).
  e.preventDefault();

  // Leemos los valores. Todos son TEXTO, también el del select.
  const title = titleInput.value;
  const content = contentInput.value;
  const author = authorSelect.value; // "" si está "Aukeratu"

  // Aquí guardamos los motivos de error.
  const erroreZerrenda = [];

  if (title === "") {
    erroreZerrenda.push("Izenburua hutsik dago.");
  }


  if (content === "") {
    erroreZerrenda.push("Testua hutsik dago.");
  }

  
  if (author === "") {
    erroreZerrenda.push("Aukeratu erabiltzaile bat.");
  }


  if (erroreZerrenda.length > 0) {
    emaitzaIdatzi(erroreZerrenda.join(" "), "errorea");
    return;
  }



  emaitzaIdatzi("", "");


  boton.disabled = true;

  
  const posta = {
    title: title,
    body: content,
    userId: Number(author)
  };

  // try/catch: cualquier fallo (red, API caída, respuesta no ok) cae en el catch (pág. 149).
  try {
    
    const erantzuna = await fetch(`${API}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(posta)
    });

   
    if (!erantzuna.ok) {
      throw new Error(`HTTP ${erantzuna.status}`);
    }

    const sortutakoa = await erantzuna.json();

    // Mensaje de éxito. ${} mete el id dentro del texto.
    emaitzaIdatzi(`Posta sortuta: id ${sortutakoa.id}`, "ondo");

    izenburuaInput.value = "";
    testuaInput.value = "";
    erabiltzaileaSelect.value = "";

  } catch (error) {
    emaitzaIdatzi("Errorea posta bidaltzean", "errorea");

    console.error(error);
  }

  boton.disabled = false;
});