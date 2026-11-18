const usuarios = [
    { id: 1, nombre: 'Alice', edad: 25, correo: 'alice@example.com', activo: true },
    { id: 2, nombre: 'Bob', edad: 30, correo: 'bob@example.com', activo: false },
    { id: 3, nombre: 'Carol', edad: 28, correo: 'carol@example.com', activo: true },
    { id: 4, nombre: 'David', edad: 22, correo: 'david@example.com', activo: false },
    { id: 5, nombre: 'Eve', edad: 32, correo: 'eve@example.com', activo: false },
    { id: 6, nombre: 'Frank', edad: 35, correo: 'frank@example.com', activo: true }
];

let cuerpo = document.querySelector("#table")
let boton = document.createElement("button")

function crearCelda(tipo, texto) {
  const celda = document.createElement(tipo);
  celda.textContent = texto;
  return celda;
}

for (const usuario of usuarios) {
    const fila = document.createElement("tr");
    fila.dataset.id = usuario.id;
    const columnas = Object.keys(usuarios[0]);
    for (const clave of columnas) {
      fila.append(crearCelda("td", usuario[clave]));
    }
    cuerpo.append(fila);
  }


