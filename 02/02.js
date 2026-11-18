function botoiakaldatu() {
  const errenkadak = document.querySelectorAll("#taula tbody tr");

  for (const errenkada of errenkadak) {
    const nota = Number(errenkada.cells[1].textContent);
    const egoera = errenkada.cells[2];

    if (nota < 5) {
      egoera.textContent = "Suspendua";
      errenkada.classList.add("button.habilitar");
    } else {
      egoera.textContent = "Onartua";
      errenkada.classList.add("button.deshabilitar");
    }
  }
}

document.querySelector("#egiaztatu").addEventListener("click", egiaztatuNotak);
