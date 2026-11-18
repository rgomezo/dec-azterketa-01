const usuarios = [
    { id: 1, nombre: 'Alice', edad: 25, correo: 'alice@example.com', activo: true },
    { id: 2, nombre: 'Bob',   edad: 30, correo: 'bob@example.com', activo: false },
    { id: 3, nombre: 'Carol', edad: 28, correo: 'carol@example.com', activo: true },
    { id: 4, nombre: 'David', edad: 22, correo: 'david@example.com', activo: false },
    { id: 5, nombre: 'Eve',   edad: 32, correo: 'eve@example.com', activo: false},
    { id: 6, nombre: 'Frank', edad:35,  correo: 'frank@example.com', activo: true}
];

const tbody = document.querySelector("#usuarios");
const table = document.querySelector("#tabla");

function taulaUsuarios(usuarios) {

    for (const usuario of usuarios){

        const tr = document.createElement("tr");

        const tdId = document.createElement("td");
        tdId.textContent =  usuario.id;
        tr.append(tdId);

        const tdNombre = document.createElement("td");
        tdNombre.textContent = usuario.nombre;
        tr.append(tdNombre);

        const tdEdad = document.createElement("td");
        tdEdad.textContent = usuario.edad;
        tr.append(tdEdad);

        const tdCorreo = document.createElement("td");
        tdCorreo.textContent = usuario.correo;
        tr.append(tdCorreo);
        
        const tdActivo = document.createElement("td");
        tdActivo.textContent = usuario.activo ? "Sí" : "No";
        tdActivo.classList.add(usuario.activo ? "activo" : "inactivo");
        tr.append(tdActivo);

        const tdHabilitar = document.createElement("td");
        const botonHabilitar = document.createElement("button");
        botonHabilitar.textContent = "Habilitar";
        botonHabilitar.addEventListener("click", () => {
            usuario.activo = true;
            tdActivo.textContent = "Sí";
            tdActivo.classList.remove("inactivo");
            tdActivo.classList.add("activo");
        });
        tdHabilitar.append(botonHabilitar);
        tr.append(tdHabilitar);

        const tdDeshabilitar = document.createElement("td");
        const botonDeshabilitar = document.createElement("button");
        botonDeshabilitar.textContent = "Deshabilitar";
        botonDeshabilitar.addEventListener("click", () => {
            usuario.activo = false;
            tdActivo.textContent = "No";
            tdActivo.classList.remove("activo");
            tdActivo.classList.add("inactivo");
        });
        tdDeshabilitar.append(botonDeshabilitar);
        tr.append(tdDeshabilitar);

        tbody.append(tr);  
        
    }
}  
taulaUsuarios(usuarios);

