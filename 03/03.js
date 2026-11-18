const btnBorrar = document.getElementsByClassName("eliminar");
btnBorrar.textContent = "eliminar";


btnBorrar.addEventListener("click", (e) => {
    localStorage.removeItem("id");   
    e.stopPropagation();

});