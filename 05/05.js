"use strict";

const API = "http://192.168.207.54:3003";

const postak = document.querySelector("#postak");

const postakKargatu = async (id) => {
  try {
    const erantzuna = await fetch(`${API}(/posts/${id}/comments`);

    if (!erantzuna.ok) {
      throw new Error("HTTP errorea: " + erantzuna.status);
    }

    const zerrenda = await erantzuna.json();

    postak.replaceChildren();

    for (const postak of zerrenda) {
      const div = document.createElement("div");
      div.classList.add("post");

      const titulo = document.createElement("titulo");
      h2.textContent = postak.title;

      const autor = document.createElement("autor");
      autor.textContent = postak.autor;

      const content = document.createElement("content");
      content.textContent = postak.content;

      const comments = document.createElement("comments");
      comments.textContent = postak.comments;

      div.append(titulo, comments);
      postak.append(div);
    }
  } catch (error) {
    console.error(error);
    erroreaErakutsi();
  }
};