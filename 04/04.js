
formulario.addEventListener("submit", (e) => {

  // Evita el envío normal del formulario, que recargaría la página.
  e.preventDefault();

  // Borra los errores de intentos anteriores. Si no, se acumularían.
  erroreak.textContent = "";

  // Lee lo que hay escrito en los campos. Siempre llega como texto.
  const titulo = izenaInput.value;

  // Number() convierte el texto en número.
  // Si el texto no es numérico (p. ej. "hola"), da NaN ("Not a Number").
  const adina = Number(adinaInput.value);

  // Array vacío donde guardamos todos los mensajes de error.
  // Así se pueden mostrar todos a la vez, no solo el primero.
  const erroreZerrenda = [];

  // ---- Validación 1: el nombre tiene al menos 3 caracteres ----
  // length cuenta los caracteres del texto.
  if (izena.length < 3) {
    // push añade un elemento al final del array.
    erroreZerrenda.push("Izenak gutxienez 3 karaktere izan behar ditu.");
  }

  if (!(adina >= 1 && adina <= 120 && adina % 1 === 0)) {
    erroreZerrenda.push("Adinak 1 eta 120 arteko zenbaki osoa izan behar du.");
  }

  // ---- Mostrar errores o guardar ----
  if (erroreZerrenda.length > 0) {
    // Recorremos los mensajes con un for (length = número de elementos).
    for (let i = 0; i < erroreZerrenda.length; i++) {
      // Crea un <p> en memoria. Todavía no aparece en la página.
      const p = document.createElement("p");

      // Le pone la clase "errorea" (para darle estilo en el CSS).
      p.className = "errorea";

      // Le pone el texto del error.
      p.textContent = erroreZerrenda[i];

      // Lo añade dentro de #erroreak. Solo ahora aparece en pantalla.
      erroreak.append(p);
    }

    // Salimos sin guardar nada, porque hay errores.
    return;
  }

  // Si llegamos aquí, todo es correcto.

  // Creamos el objeto con los datos. Como las claves se llaman igual
  // que las variables, { izena, adina } sería equivalente.
  const erabiltzailea = { izena: izena, adina: adina };

  // localStorage solo guarda texto: JSON.stringify convierte el objeto
  // en texto JSON. Sin esto se guardaría "[object Object]".
  localStorage.setItem("erabiltzailea", JSON.stringify(erabiltzailea));

  // Actualiza el saludo de #agurra con los datos recién guardados.
  agurraEguneratu();
});
