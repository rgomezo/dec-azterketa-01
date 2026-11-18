const INFO = "azterketa4";

const formulario = document.getElementById("formulario");
const titulo = document.getElementById("titulo");
const autor = document.getElementById("autor");
const year = document.getElementById("year");
const cstatus = document.getElementById("status");
const tabla = document.getElementById("table");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (titulo === "" || autor === "" || year === "") {
    const main = document.querySelector("main");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    li1.textContent = "Tituloa falta da";
    li2.textContent = "Autore izena falta da";
    li3.textContent = "Urtea falta da";

    ul.append(li1);
    ul.append(li2);
    ul.append(li3);

    main.append(ul);
  } else {
    const perfil = {
      titulo: titulo.value.trim(),
      autor: autor.value.trim(),
      year: year.value.trim(),
      status: cstatus.value,
    };

    localStorage.setItem(INFO, JSON.stringify(perfil));
  }
});

let libros = JSON.parse(localStorage.getItem(INFO)) || [];

function guardarEnStorage() {
  localStorage.setItem(INFO, JSON.stringify(libros));
}

function obtenerLIbro() {
  tabla.innerHTML = "";

  libros.forEach((libro) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");

    td1.textContent = libro.titulo;
    td2.textContent = libro.autor;
    td3.textContent = libro.year;
    td4.textContent = libro.status;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tabla.appendChild(tr);
  });
}

obtenerLIbro();
