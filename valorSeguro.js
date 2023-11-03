// VALIDACION DEL FORMULARIO

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const dni = document.getElementById("dni");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const form = document.getElementById("form");
const costoSeguro = ["Basico", "Intermedio", "Premiun"];

function valorSeguro() {
  var valor = document.getElementById("inputSeguro").value;
  document.getElementById("valor").innerHTML =
    "Seguro seleccionado vale: $" + valor;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nombre.value.length < 6) {
    alert("El nombre debe tener al menos 6 letras");
  }
  if (apellido.value.length < 6) {
    alert("El apellido debe tener al menos 6 letras");
  }
  if (dni.value.length < 8) {
    alert("numero dni debe contener 8 digitos");
  }
  if (email.value.length < 8) {
    alert("numero dni debe contener 8 digitos");
  }
});

// SOLO FALTA VALIDAR EMAIL Y TELEFONO, LUEGO LO HAGO
