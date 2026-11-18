let datoJson;
fetch('libros.json')
.then(res => res.json())
.then((salida) => {
    datoJson = salida;

    let elementoTexto = document.getElementById("titulo");
    elementoTexto.textContent = datoJson.titulo;
})










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
  localStorage.setItem("year", año); // setItem(clave, valor)
  inputAutor.value = "";

  const Leido = inputLeido.value.trim();
  if (Leido.cheked) {
    alert("Escribe un año");
    return;
  }
  localStorage.setItem("leido", Leido); // setItem(clave, valor)
  inputAutor.value = "";

});



const tabla = document.getElementsByName("table");
const thead = document.getElementsByName("thead");
const tbody = document.getElementById("table");

function mostrarLibros(){
    const titulo = localStorage.getItem("titulo");
    const autor = localStorage.getItem("autor");
    const año = localStorage.getItem("year");
    const leido = localStorage.getItem("status");

   
    libros.forEach((libro) => {
  
  const tr = document.createElement("tr");
  Object.values(libro).forEach((valor) => {
    const td = document.createElement("td");
    td.textContent = valor;
    tr.appendChild(td);
    
  });
  tbody.appendChild(tr);
  
});

tabla.appendChild(thead)
tabla.appendChild(tbody);


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
  localStorage.setItem(CLAVE, JSON.stringify(libros)); 
}


function pintar() {
  const libros = leerLibros();
  lista.replaceChildren();                

  libros.forEach((l, indice) => {
    const li = document.createElement("li");
    li.textContent = l.libros + " - " + l.libros ;

    
    lista.appendChild(li);
   
  });

}
pintar();