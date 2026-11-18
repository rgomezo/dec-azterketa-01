"use strict";

// API URL
const API = "https://192.168.207.54:3003/";

// HTML elementuak
const egoera = document.querySelector("#egoera");
const erabiltzaileak = document.querySelector("#erabiltzaileak");
const xehetasunak = document.querySelector("#xehetasunak");
const postak = document.querySelector("#postak");

// Errore mezua erakutsi
const erroreaErakutsi = () => {
  egoera.textContent = "Errorea datuak kargatzean";
  egoera.classList.add("errorea");
};

// Erabiltzaile baten postak kargatu
const postakKargatu = async (id) => {
  try {
    const erantzuna = await fetch(`${API}/posts?userId=${id}`);

    if (!erantzuna.ok) {
      throw new Error("HTTP errorea: " + erantzuna.status);
    }

    const zerrenda = await erantzuna.json();

    postak.replaceChildren();

    for (const posta of zerrenda) {
      const div = document.createElement("div");
      div.classList.add("post");

      const h3 = document.createElement("h3");
      h3.textContent = posta.title;

      const p = document.createElement("p");
      p.textContent = posta.body;

      div.append(h3, p);
      postak.append(div);
    }
  } catch (error) {
    console.error(error);
    erroreaErakutsi();
  }
};

// Erabiltzailearen xehetasunak erakutsi
const xehetasunakErakutsi = (erabiltzailea) => {
  xehetasunak.replaceChildren();

  const izena = document.createElement("p");
  izena.textContent = "Izena: " + erabiltzailea.name;

  const erabiltzaileIzena = document.createElement("p");
  erabiltzaileIzena.textContent =
    "Erabiltzaile izena: " + erabiltzailea.username;

  const emaila = document.createElement("p");
  emaila.textContent = "Emaila: " + erabiltzailea.email;

  xehetasunak.append(izena, erabiltzaileIzena, emaila);
};

// Erabiltzaile guztiak kargatu
const erabiltzaileakKargatu = async () => {
  egoera.textContent = "Kargatzen...";
  egoera.classList.remove("errorea");

  try {
    const erantzuna = await fetch(`${API}/users`);

    if (!erantzuna.ok) {
      throw new Error("HTTP errorea: " + erantzuna.status);
    }

    const erabiltzaileZerrenda = await erantzuna.json();

    erabiltzaileak.replaceChildren();

    for (const erabiltzailea of erabiltzaileZerrenda) {
      const tr = document.createElement("tr");

      const tdId = document.createElement("td");
      tdId.textContent = erabiltzailea.id;

      const tdIzena = document.createElement("td");
      tdIzena.textContent = erabiltzailea.name;

      const tdEmaila = document.createElement("td");
      tdEmaila.textContent = erabiltzailea.email;

      tr.append(tdId, tdIzena, tdEmaila);

      // Erabiltzailea aukeratzean
      tr.addEventListener("click", () => {
        // Aurreko hautaketa kendu
        for (const errenkada of erabiltzaileak.children) {
          errenkada.classList.remove("hautatua");
        }

        // Hautatutako errenkada markatu
        tr.classList.add("hautatua");

        // Erabiltzailearen datuak erakutsi
        xehetasunakErakutsi(erabiltzailea);

        // Erabiltzailearen postak kargatu
        postakKargatu(erabiltzailea.id);
      });

      erabiltzaileak.append(tr);
    }

    egoera.textContent = `${erabiltzaileZerrenda.length} erabiltzaile kargatuta`;

    setTimeout(() => {
      egoera.textContent = "";
    }, 3000);

  } catch (error) {
    console.error(error);
    erroreaErakutsi();
  }
};

// Programa martxan jarri
erabiltzaileakKargatu();
