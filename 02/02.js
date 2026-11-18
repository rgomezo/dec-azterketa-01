const bH = document.querySelector(".habilitar")
const bD = document.querySelector(".deshabilitar")

document.querySelector(".habilitar").addEventListener("click", () => {
  bH.classList.replace("habilitar", "deshabilitar");
  bH.textContent="Deshabilitar";
});

document.querySelector(".deshabilitar").addEventListener("click", () => {
  bD.classList.replace("deshabilitar", "habilitar");
  bD.textContent="Habilitar";
});
