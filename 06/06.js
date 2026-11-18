const titulo = document.getElementById("tittle");
const content = document.getElementById("content");
const author = document.getElementById("author");
const published = document.getElementById("published");
const formulario = document.getElementById("formulario");

async function obtener() {
  try {
    const respuesta1 = await fetch("http://192.168.207.54:3003/users");

    if (!respuesta1.ok) {
      throw new Error(`Error HTTP: ${respuesta1.status}`);
    }

    const erabiltzaileak = await respuesta1.json();

    const erabiltzaile = document.getElementById("author");

    const option = document.createElement("option");

    for (const propiedad in erabiltzaileak) {
      option.textContent = propiedad.name;
    }
    erabiltzaile.append(option);
  } catch (error) {
    console.log(error);
  }
}

obtener();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (titulo.value === "" || content.value === "") {
    const main = document.querySelector("main");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    li1.textContent = "Tituloa falta da";
    li2.textContent = "Content falta da";

    ul.append(li1);
    ul.append(li2);

    main.append(ul);
  }
});
