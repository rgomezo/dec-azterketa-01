const usuarios = [
  {
    id: 1,
    nombre: "Alice",
    edad: 25,
    correo: "alice@example.com",
    activo: true,
  },
  { id: 2, nombre: "Bob", edad: 30, correo: "bob@example.com", activo: false },
  {
    id: 3,
    nombre: "Carol",
    edad: 28,
    correo: "carol@example.com",
    activo: true,
  },
  {
    id: 4,
    nombre: "David",
    edad: 22,
    correo: "david@example.com",
    activo: false,
  },
  { id: 5, nombre: "Eve", edad: 32, correo: "eve@example.com", activo: false },
  {
    id: 6,
    nombre: "Frank",
    edad: 35,
    correo: "frank@example.com",
    activo: true,
  },
];

const tabla = document.getElementById("table");

function crearTabla(arrayUsuarios) {
  tabla.innerHTML = "";

  const columnas = Object.keys(arrayUsuarios[0]);

  arrayUsuarios.forEach((objetoItem) => {
    const tr = document.createElement("tr");
    const button = document.createElement("button");
    const td = document.createElement("td");

    let botonEstado = "";

    if (objetoItem.activo === true) {
      botonEstado = "Deshabilitar";
    } else {
      botonEstado = "Habilitar";
    }

    columnas.forEach((col) => {
      const td1 = document.createElement("td");
      td1.textContent = objetoItem[col];

      tr.append(td1);
    });

    button.textContent = botonEstado;

    td.append(button);
    tr.append(td);

    tabla.append(tr);
  });

  /* arrayUsuarios.forEach(function (users) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const button = document.createElement("button");
    let botonEstado = "";

    if (users.activo === true) {
      botonEstado = "Deshabilitar";
    } else {
      botonEstado = "Habilitar";
    }

    tr.innerHTML = `
      <td>${users.id}</td>
      <td>${users.nombre}</td>
      <td>${users.edad}</td>
      <td>${users.correo}</td>
      <td>${users.activo}</td>
      <td><button>${botonEstado}</button></td>
    `;

    tabla.appendChild(fila);
  }); */
}

crearTabla(usuarios);
