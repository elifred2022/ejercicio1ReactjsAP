const costoSeguro = ["Basico", "Intermedio", "Premiun"];

function valorSeguro() {
  var valor = document.getElementById("inputSeguro").value;
  document.getElementById("valor").innerHTML =
    "Seguro seleccionado vale: $" + valor;
}
