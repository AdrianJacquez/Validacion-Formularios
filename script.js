const formulario = document.getElementById("formulario");

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userGener = document.getElementById("userGener");

const alertSuccess = document.getElementById("alertSuccess");
const alertName = document.getElementById("alertName");
const alertEmail = document.getElementById("alertEmail");
const alertGener = document.getElementById("alertGener");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]{4,}(\.[_a-z0-9]+)*@[tuvanosa]+(\.[com]+)$/;
const regUserGener = /^(?!Selecciona tu genero$).+/;

function cambio() {
  var checkBox = document.getElementById("checkBox");
  var btnEnviar = document.getElementById("btnEnviar");

  // Obtener el estado del checkbox
  var isChecked = checkBox.checked;

  // Deshabilitar o habilitar el botón según el estado del checkbox
  btnEnviar.disabled = !isChecked;
}

const pintarMensajeExito = () => {
  alertSuccess.classList.remove("d-none");
  alertSuccess.textContent = "Mensaje enviado con éxito";
};

const pintarMensajeError = (errores) => {
  errores.forEach((item) => {
    item.tipo.classList.remove("d-none");
    item.tipo.textContent = item.msg;
  });
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  alertSuccess.classList.add("d-none");
  const errores = [];

  // validar nombre
  if (!regUserName.test(userName.value) || !userName.value.trim()) {
    userName.classList.add("is-invalid");

    errores.push({
      tipo: alertName,
      msg: "Formato no válido campo nombre, solo letras",
    });
  } else {
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
    alertName.classList.add("d-none");
  }

  // validar email
  if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
    userEmail.classList.add("is-invalid");

    errores.push({
      tipo: alertEmail,
      msg: "Escriba un correo válido",
    });
  } else {
    userEmail.classList.remove("is-invalid");
    userEmail.classList.add("is-valid");
    alertEmail.classList.add("d-none");
  }

  //validar genero
  if (!regUserGener.test(userGener.value)) {
    userGener.classList.add("is-invalid");

    errores.push({
      tipo: alertGener,
      msg: "Seleccione un genero",
    });
  } else {
    userGener.classList.remove("is-invalid");
    userGener.classList.add("is-valid");
    alertGener.classList.add("d-none");
  }

  if (errores.length !== 0) {
    pintarMensajeError(errores);
    return;
  }

  console.log("Formulario enviado con éxito");
  console.log(userName.value);
  console.log(userEmail.value);
  console.log(userGener.value);
  console.log(checkBox.checked);
  pintarMensajeExito();
});
