
const btnHabilitar = document.getElementsByClassName("habilitar");

btnHabilitar.addEventListener("click", () => {
    
    btnHabilitar.style.background = "red"; 
});

const  btnDeshabilitar = document.getElementsByClassName("deshabilitar");
btnDeshabilitar.addEventListener("click", (e) => {




});

function cambiarHabilitar(){
    if(document.getElementsByClassName('habilitar').style.background ='red'){
        document.getElementsByClassName('habilitar').style.background = "green";

    }

}