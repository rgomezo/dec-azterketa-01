const usuarios = [
    { id: 1, nombre: 'Alice', edad: 25, correo: 'alice@example.com', activo: true },
    { id: 2, nombre: 'Bob',   edad: 30, correo: 'bob@example.com', activo: false },
    { id: 3, nombre: 'Carol', edad: 28, correo: 'carol@example.com', activo: true },
    { id: 4, nombre: 'David', edad: 22, correo: 'david@example.com', activo: false },
    { id: 5, nombre: 'Eve',   edad: 32, correo: 'eve@example.com', activo: false},
    { id: 6, nombre: 'Frank', edad:35,  correo: 'frank@example.com', activo: true}
];

function erakutsiProduktuak() {

  const table = document.querySelector("#table");

  for (const usuario of usuarios) {
    // Taulako errenkada
    const tr = document.createElement("tr");
    const activo = String(table.cells[1].textContent);
    const egoera = table.cells[5];

    for (const balioa of [usuario.id, usuario.nombre, usuario.edad, usuario.correo, usuario.activo]) {
      const td = document.createElement("td");
      td.textContent = balioa;
      tr.append(td);

     if (egoera == true) {
      usuario.activo.textContent = "true";
      table.classList.addButton("Deshabilitar");
    } else {
      egoera.textContent = "false";
      table.classList.addButton("Habilitar");
    }
    }
    table.append(tr);

  }
}

erakutsiProduktuak();


