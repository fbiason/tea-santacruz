document.addEventListener("DOMContentLoaded", function () {
  const email = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  // Seleccionar los elementos
  const inputName = document.querySelector("#name");
  const inputEmail = document.querySelector("#email");
  const inputSubject = document.querySelector("#subject");
  const inputMessage = document.querySelector("#message");
  const formulario = document.querySelector("#form");
  const btnSubmit = document.querySelector('#formulario button[type="submit"]');

  // Asignando Eventos
  inputName.addEventListener("input", validar);
  inputEmail.addEventListener("input", validar);
  inputSubject.addEventListener("input", validar);
  inputMessage.addEventListener("input", validar);

  // Creando funcion Validar

  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `El Campo ${e.target.id} es Obligatorio`,
        e.target.parentElement
      );
      email[e.target.id] = "";
      comprobarEmail();
      return;
    }

    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta("El Email no es Válido", e.target.parentElement);
      email[e.target.id] = "";
      comprobarEmail();
      return;
    }

    limpiarAlerta(e.target.parentElement);

    // Asignar los valores
    email[e.target.id] = e.target.value.trim().toLowerCase();
    console.log(email);

    // Comprobar el objeto de email
    comprobarEmail();
  }

  function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);

    // Alerta en HTML.
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("bg-light");
    // Agregar Error al Formulario
    referencia.appendChild(error);
  }

  function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector(".bg-light");
    if (alerta) {
      alerta.remove();
    }
  }

  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }

  function comprobarEmail() {
    if (Object.values(email).includes("")) {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
      return;
    }
    btnSubmit.classList.remove("opacity-50");
    btnSubmit.disabled = false;
  }
});
