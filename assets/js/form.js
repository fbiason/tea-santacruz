const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";

  const serviceID = "default_service";
  const templateID = "template_cd9vxmf";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Enviando Email";
      alert("¡Su mensaje fue enviado con éxito!");
      document.getElementById("form").reset(); // Resetear el formulario
    },
    (err) => {
      btn.value = "Enviando Email";
      alert(JSON.stringify(err));
    }
  );
});
