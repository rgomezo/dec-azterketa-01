const GAKOA = "liburuak";

const titulo = document.querySelector("#titulo");
const Autor = document.querySelector("#autor");
const Año = document.querySelector("#year");
const estado = document.querySelector("#status");
const zerrenda = document.querySelector("#zerrenda");


function irakurriLiburua() {
  try {
    const testua = localStorage.getItem(GAKOA);
    if (testua === null) {
      return [];
    }
    const datuak = JSON.parse(testua);
    return Array.isArray(datuak) ? datuak : [];
  } catch (err) {
    // JSON hondatua badago, ez huts egin
    return [];
  }
}

function erakutsiLiburuak() {

  const table = document.querySelector("#table");
  const liburuak = document.querySelector("#formulario")
  

  for (const liburua of liburuak) {
    // Taulako errenkada
    const tr = document.createElement("tr");

    for (const balioa of [titulo, Autor, Año, estado, estado ]) {
      const td = document.createElement("td");
      td.textContent = balioa;
      tr.append(td);
    }
    table.append(tr);

  }
}

document.querySelector("#boton").addEventListener("click", erakutsiLiburuak);

