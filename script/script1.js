import { NumeroALetras } from "./NumeroALetras.js";

function llenarNumeros(num) {
  document.getElementById('numeroY').textContent = num;
  speechSynthesis.cancel();
  var contarId = document.getElementById("contar");
  contarId.innerHTML = "";

  for (var i = 1; i <= num; i++) {

    const elementCaja = document.createElement('p');
    elementCaja.className = "caja";
    let str = i.toString();
    if(window.matchMedia("(min-width: 627px)").matches){
      str = str.concat(" - ").concat(NumeroALetras(i))
    }
    elementCaja.appendChild(document.createTextNode(str));
    const number = i;
    contarId.appendChild(elementCaja);
    elementCaja.addEventListener("click", () => {
      decir(NumeroALetras(number));
    });
  }
}

function Abcedario() {
  speechSynthesis.cancel();
  var abcId = document.getElementById("abc");
  abcId.innerHTML = "";

  for (var i = 0; i <= 25; i++) {

    const elementCaja = document.createElement('div');
    elementCaja.className = "caja";
    const code = 'A'.charCodeAt(0);
    let str = String.fromCharCode(code + i);
    elementCaja.appendChild(document.createTextNode(str));
    abcId.appendChild(elementCaja);
    elementCaja.addEventListener("click", () => {
    decir(str);
    });
  }
}

document.getElementById('hablar').addEventListener("click", () => {
  decir(document.getElementById("texto").value);
});

document.getElementById('ingresoNumero').addEventListener("click", () => {
  llenarNumeros(document.getElementById("numero").value);
});

function decir(texto) {
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

Abcedario();