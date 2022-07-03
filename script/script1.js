import { NumeroALetras } from "./NumeroALetras.js";

function addTable(num) {
    document.getElementById('numeroX').textContent = num;
    speechSynthesis.cancel();
    var table = document.getElementById("myDynamicTable");
    var elmtTable = table;
    var tableRows = elmtTable.getElementsByTagName('tr');
    var rowCount = tableRows.length;
    
    for (var x=rowCount-1; x>0; x--) {
       elmtTable.removeChild(tableRows[x]);
    }

    for (var i = 1; i <= num; i++) {
      var tr = document.createElement('TR');
      table.appendChild(tr);
      
      var td = document.createElement('TD');
      td.width = '75';
      td.appendChild(document.createTextNode(i));
      tr.appendChild(td);

      var td = document.createElement('TD');
      td.width = 'auto';
      td.appendChild(document.createTextNode(NumeroALetras(i)));
      tr.appendChild(td);
      decir(NumeroALetras(i));
           
    }
  }
  
document.getElementById('hablar').addEventListener("click",()=>{
    decir(document.getElementById("texto").value);
});
document.getElementById('ingresoNumero').addEventListener("click",()=>{
  addTable(document.getElementById("numero").value);
});

function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}