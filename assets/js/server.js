document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar los elementos
  const inputName = document.querySelector("#name");
  const inputEmail = document.querySelector("#email");
  const inputSubject = document.querySelector("#subject");
  const inputMessage = document.querySelector("#message");
  const formulario = document.querySelector("#form");
  console.log(inputSubject);
  // Asignando Eventos
  inputName.addEventListener("blur", validar);
  inputEmail.addEventListener("blur", validar);
  inputSubject.addEventListener("blur", validar);
  inputMessage.addEventListener("blur", validar);
  // Creando funcion Validar
  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `El Campo ${e.target.placeholder} es Obligatorio `,
        e.target.parentElement
      );
      return;
    }
    console.log("despues del if");
  }
  function mostrarAlerta(mensaje, referencia) {
    // No repetir Alerta
    const alerta = referencia.querySelector("text-uppercase");
    if (alerta) {
      alerta.remove();
    }
    // Alerta en Pantalla
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("bg-light", "text-uppercase");
    // Agregar Error al Formulario
    referencia.appendChild(error);
  }
});
