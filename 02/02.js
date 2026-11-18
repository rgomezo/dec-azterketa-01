const deshabilitar = document.querySelector(".deshabilitar");
const habilitar = document.querySelector(".habilitar");
const boton = document.querySelector("button");

function cambioTextoRojo() {
  deshabilitar.innerHTML = "";
  deshabilitar.classList.remove("deshabilitar");
  deshabilitar.classList.add("habilitar");
  deshabilitar.textContent = "Deshabilitar";
}

function cambioTextoVerde() {
  habilitar.innerHTML = "";
  habilitar.classList.remove("habilitar");
  habilitar.classList.add("deshabilitar");
  habilitar.textContent = "Habilitar";
}

if (boton.classList == "habilitar") {
  boton.addEventListener("click", cambioTextoRojo);
} else {
  boton.addEventListener("click", cambioTextoVerde);
}
