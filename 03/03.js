'use strict'

let button = document.querySelectorAll('button');

button.forEach(element => {
    element.addEventListener('click', avisar);
});

function avisar() {
    let aviso = document.getElementById('aviso');

    button.forEach(element => {
        aviso.classList.remove("oculto");
        setTimeout(() => {
            aviso.className = "oculto";
        }, 2000);
    });
}
