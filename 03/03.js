const eliminar = document.querySelector(".eliminar");
const table = document.getElementById("table");
const boton = document.querySelector("button");
const tr = document.querySelector("tr");

boton.addEventListener("click", function () {
    tr.remove();
});
