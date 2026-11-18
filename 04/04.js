const webgunea = document.querySelector('#lista');


const liburuakErakutsi = () => {
const testua = localStorage.getItem("#lista");   
  
    const liburu = JSON.parse("lista");                
    webgunea.textContent = `${liburu.titulo} (${liburu.autor} ${liburu.year}, ${liburu.leido})`;
};

liburuakErakutsi();

const formularioa = document.querySelector("#formulario");
const erroreak = document.querySelector("#errores");

const mezuak = [];

if (titulo.length > 0) {
    mezuak.push("Izena ezin da huts bidali)");
}
if (autor.length > 0) {
    mezuak.push("Izena ezin da huts bidali)");
}
if (year.length > 0) {
    mezuak.push("Izena ezin da huts bidali)");
}

erroreak.replaceChildren();
    if (mezuak.length > 0) {
        for (const mezua of mezuak) {
            const p = document.createElement("p");
            p.textContent = mezua;
            p.classList.add("lista_errores");
            erroreak.append(p);
        }
        return;
    }

  
