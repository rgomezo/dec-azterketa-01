const usuarios = [
    { id: 1, nombre: 'Alice', edad: 25, correo: 'alice@example.com', activo: true },
    { id: 2, nombre: 'Bob',   edad: 30, correo: 'bob@example.com', activo: false },
    { id: 3, nombre: 'Carol', edad: 28, correo: 'carol@example.com', activo: true },
    { id: 4, nombre: 'David', edad: 22, correo: 'david@example.com', activo: false },
    { id: 5, nombre: 'Eve',   edad: 32, correo: 'eve@example.com', activo: false},
    { id: 6, nombre: 'Frank', edad:35,  correo: 'frank@example.com', activo: true}
];

localStorage.setItem("usuario", JSON.stringify(usuarios));