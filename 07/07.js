// 5. ariketa - SOLUZIOA
const API = "http://192.168.207.54:3003/";

const erabiltzaileak = document.querySelector("#users");
const argitalpenak = document.querySelector("#posts");
const mezua = document.querySelector("#comments");


// ---------- Erabiltzaileak ----------
async function kargatuDatuak() {
  try {
    const erantzuna = await fetch(`${API}/users`);
    if (!erantzuna.ok) {
      throw new Error(`Errorea erabiltzaileak eskatzean (${erantzuna.status})`);
    }
    const datuak = await erantzuna.json();

    for (const erabiltzailea of datuak) {
      const txartela = document.createElement("div");
      txartela.textContent = childElementCount(erabiltzaileak);
      erabiltzaileak.append(txartela);
    }
  } catch (err) {
    mezua.textContent = err.message;
  }
}



kargatuDatuak();