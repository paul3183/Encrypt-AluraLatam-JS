function encriptar() {
  var text = document.getElementById("data")?.value.toLowerCase();
  //i para que afecte mayus y minus: e 
  //g para toda la linea u oracion
  //m es para que afecte o multiples lineas o parrafos
  var txtCifrado = text?.replace(/e/igm, "enter");
  var txtCifrado = txtCifrado?.replace(/o/igm, "ober");
  var txtCifrado = txtCifrado?.replace(/i/igm, "imes");
  var txtCifrado = txtCifrado?.replace(/a/igm, "ai");
  var txtCifrado = txtCifrado?.replace(/u/igm, "ufat");

  document.getElementById("imgder").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("texto2").innerHTML = txtCifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
  var text = document.getElementById("data")?.value.toLowerCase();
  //i para que afecte mayus y minus: e 
  //g para toda la linea u oracion
  //m es para que afecte o multiples lineas o parrafos
  var txtCifrado = text?.replace(/enter/igm, "e");
  var txtCifrado = txtCifrado?.replace(/ober/igm, "o");
  var txtCifrado = txtCifrado?.replace(/imes/igm, "i");
  var txtCifrado = txtCifrado?.replace(/ai/igm, "a");
  var txtCifrado = txtCifrado?.replace(/ufat/igm, "u");

  document.getElementById("imgder").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("texto2").innerHTML = txtCifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function copiar() {
  var contenido = document.querySelector("#texto2");
  contenido.select();
  document.execCommand("copy");
  alert("!se copio!");
}