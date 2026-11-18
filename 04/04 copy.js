const inputTitulo = document.getElementById("titulo");
const inputAutor = document.getElementById("autor");
const inputAño = document.getElementById("year");
const inputLeido = document.getElementById("status");


document.getElementById("boton").addEventListener("click", () => {
  const titulo = inputTitulo.value.trim();
  if (titulo === "") {
    alert("Escribe un titulo");
    return;
  }
  localStorage.setItem("titulo", titulo); // setItem(clave, valor)
  inputTitulo.value = "";


  const autor = inputAutor.value.trim();
  if (autor === "") {
    alert("Escribe un autor");
    return;
  }
  localStorage.setItem("autor", autor); // setItem(clave, valor)
  inputAutor.value = "";

  
  const año = inputAño.value.trim();
  if (año === "") {
    alert("Escribe un año");
    return;
  }
  localStorage.setItem("año", año); // setItem(clave, valor)
  inputAutor.value = "";

  const Leido = inputLeido.value.trim();
  if (Leido.cheked) {
    alert("Escribe un año");
    return;
  }
  localStorage.setItem("Leido", Leido); // setItem(clave, valor)
  inputAutor.value = "";

});


const tabla = document.getElementById("table");

function mostrarLibros(){
    const titulo = localStorage.getItem("titulo");
    const autor = localStorage.getItem("autor");
    const año = localStorage.getItem("year");
    const leido = localStorage.getItem("leido");

    if (titulo !== null) {
    tabla.textContent = "Titulo, " + titulo;
  } else {
    tabla.textContent = "No hay ningún nombre guardado";
  }


}
mostrarLibros();








//HIRUGURREN PARTEA
const CLAVE = "azterketa4";                
const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista");
const error = document.getElementById("errores");

function leerLibros() {
  const texto = localStorage.getItem(CLAVE);
  return texto ? JSON.parse(texto) : [];   
}

function guardarLibros(libros) {
  localStorage.setItem(CLAVE, JSON.stringify(libros)); // de array a string
}


function pintar() {
  const libros = leerLibros();
  lista.replaceChildren();                

  libros.forEach((l, indice) => {
    const li = document.createElement("li");
    li.textContent = l.libros + " - " + l.libros.toFixed(2) ;

    
    lista.appendChild(li);
   
  });

}