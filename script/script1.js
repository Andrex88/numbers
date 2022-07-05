import { NumeroALetras } from "./NumeroALetras.js";

function addTable(num) {
  document.getElementById('numeroX').textContent = num;
  speechSynthesis.cancel();
  var table = document.getElementById("contar");
  var elmtTable = table;
  var tableRows = elmtTable.getElementsByTagName('tr');
  var rowCount = tableRows.length;

  for (var x = rowCount - 1; x > 0; x--) {
    elmtTable.removeChild(tableRows[x]);
  }
  document.getElementById("contar").innerHTML = "";

  for (var i = 1; i <= num; i++) {
    // var tr = document.createElement('TR');
    // table.appendChild(tr);

    const td = document.createElement('p');
    td.className = "caja";
    const str = i.toString().concat(" - ").concat(NumeroALetras(i));
    td.appendChild(document.createTextNode(str));
    const number = i;
    table.appendChild(td);
    td.addEventListener("click", () => {
      decir(NumeroALetras(number));
    });
    // var td = document.createElement('p');
    // td.className="caja";
    // td.appendChild();
    // table.appendChild(td);
    // decir(NumeroALetras(i));

  }
}

document.getElementById('hablar').addEventListener("click", () => {
  decir(document.getElementById("texto").value);
});
document.getElementById('ingresoNumero').addEventListener("click", () => {
  addTable(document.getElementById("numero").value);
});

function decir(texto) {
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}