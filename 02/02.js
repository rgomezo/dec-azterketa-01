'use strict'

let button = document.querySelectorAll('button');

button.forEach(element => {
    element.addEventListener('click', kolorea);
});

function kolorea() {
    button.forEach(element => {
        if (element.className = "habilitar") {
            element.classList.add("deshabilitar")
        } else {
            element.className.add("habilitar")
        }
    });
}
