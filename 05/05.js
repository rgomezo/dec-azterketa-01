const API = "http://192.168.207.54:3003/";

const contenido = document.querySelector("#content");
const mezua = document.querySelector("#mezua");
const comentarios = document.querySelector("#comments");


async function kargatuPostak() {
  try {
    const erantzuna = await fetch(`${API}/posts`);
    if (!erantzuna.ok) {
      throw new Error(`Errorea erabiltzaileak eskatzean (${erantzuna.status})`);
    }
    const datuak = await erantzuna.json();

    for (const postak of datuak) {
      const txartela = document.createElement("div");
      txartela.classList.add("txartela");
      txartela.textContent = `${postak}`;
      txartela.addEventListener("click", () => kargatuArgitalpenak(postak.id));
      contenido.append(txartela);
    }
  } catch (err) {
    mezua.textContent = err.message;
  }
}


// ---------- Argitalpenak ----------
async function kargatuArgitalpenak(id) {
  try {
    const erantzuna = await fetch(`${API}/posts/:id/comments${id}`);
    if (!erantzuna.ok) {
      throw new Error(`Errorea argitalpenak eskatzean (${erantzuna.status})`);
    }
    const posts = await erantzuna.json();

    argitalpenak.textContent = ""; // aurrekoa ezabatu
    mezua.textContent = "";
    for (const post of posts.slice(0, 3)) {
      const p = document.createElement("p");
      p.textContent = post.title;
      argitalpenak.append(p);
    }
  } catch (err) {
    mezua.textContent = err.message;
  }
}

kargatuPostak();
