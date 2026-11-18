const aviso = document.getElementById("container-aviso");

const oculto = document.getElementById("container-oculto");

const eliminar = document.getElementById("btn-eliminar");


async function habilitar() {

  if (click < 1 || click > 10) {
    alert("2 segundu eta ondoren desagertu");

    return;
  }

  elementua = await lortuLerro();

  sortuLerro();
}