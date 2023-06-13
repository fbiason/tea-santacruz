const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";

  const serviceID = "default_service";
  const templateID = "template_d44kb4v";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Enviando Email";
      alert("¡Mensaje Enviado!");
    },
    (err) => {
      btn.value = "Enviando Email";
      alert(JSON.stringify(err));
    }
  );
});
