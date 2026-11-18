async function posts() {
  try {
    const erantzuna = await fetch(
      "http://192.168.207.54:3003/",
    );

    const posts = await erantzuna.json();

    let published = datuak[0].toLowerCase();

    while (published.length !== posts) {
      const content = await fetch(
        "http://192.168.207.54:3003/",
      );

      const content = await comments.json();

      published = content[0].toLowerCase();
    }
  };
}