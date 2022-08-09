import { NumeroALetras } from "./NumeroALetras.js";

function llenarNumeros(num) {
  document.getElementById("numeroY").textContent = num;
  speechSynthesis.cancel();
  var contarId = document.getElementById("contar");
  contarId.innerHTML = "";
  document.getElementById("loading").style.display = "flex";
  return new Promise((resolve) => {
    setTimeout(() => {
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
      }
      resolve(true);
    }, num / (num.toString().length/2*1000));
  });
}

async function llamarllenaNumero(num) {
  if(num>999999){
    alert('no se aceptan numeros mayores a 999999')
  }else{
    var x = await llenarNumeros(num);
    document.getElementById("loading").style.display = "none";
  }
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
  llamarllenaNumero(document.getElementById("numero").value).then;
});

function decir(texto) {
  speechSynthesis.cancel();
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

Abcedario();

export { decir };
