import { NumeroALetras } from "./NumeroALetras.js";

async function llenarNumeros(num) {

  document.getElementById("numeroY").textContent = num;
    speechSynthesis.cancel();
    var contarId = document.getElementById("contar");
    contarId.innerHTML = "";
    let finalizo = false;

    setTimeout(() => {
      document.getElementById("loading").style.display = "flex";

    for (let i = 1; i <= num; i++) {
      const elementCaja = document.createElement("p");
      elementCaja.className = "caja";
      let str = i.toString();

      if (window.matchMedia("(min-width: 627px)").matches) {
        str = str.concat(" - ").concat(NumeroALetras(i));
      }

      elementCaja.appendChild(document.createTextNode(str));
      const number = i;
      contarId.appendChild(elementCaja);

      elementCaja.addEventListener("click", () => {
        decir(NumeroALetras(number));
      });
      if (i == num) {
        finalizo = true;
      }
    }
  document.getElementById("loading").style.display = "none";

  }, num/10);


  await myPromise.then(
    () => {
      document.getElementById("loading").style.display = "none";
    },
    () => {
      document.getElementById("loading").style.display = "none";
    }
  );
}

function Abcedario() {
  speechSynthesis.cancel();
  var abcId = document.getElementById("abc");
  abcId.innerHTML = "";

  for (var i = 0; i <= 25; i++) {
    const elementCaja = document.createElement("div");
    elementCaja.className = "caja";
    const code = "A".charCodeAt(0);
    let str = String.fromCharCode(code + i);
    elementCaja.appendChild(document.createTextNode(str));
    abcId.appendChild(elementCaja);
    elementCaja.addEventListener("click", () => {
      decir(str);
    });
  }
}

document.getElementById("hablar").addEventListener("click", () => {
  decir(document.getElementById("texto").value);
});

document.getElementById("ingresoNumero").addEventListener("click", () => {
  llenarNumeros(document.getElementById("numero").value).then;
});

function decir(texto) {
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

Abcedario();

export { decir };
