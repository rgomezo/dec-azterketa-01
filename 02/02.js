const titulo = document.getElementById("container-titulo");

const table = document.getElementById("container-titulo");

const deshabilitar = document.getElementById("btn-deshabilitar");

const habilitar = document.getElementById("btn-habilitar");


habilitar.addEventListener("click");

deshabilitar.addEventListener("click", () => {
  location.reload();
});
