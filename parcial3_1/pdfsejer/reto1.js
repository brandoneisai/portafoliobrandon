$(document).ready(function() {
    var carac = prompt(' ingrese el caracter deseado:');
    var altura = prompt('de cuantos escalones la piramide:');

    var doc = new jsPDF();
    doc.setFontSize(30);
    for(var i = 1; i <= altura; i ++) {
        var fila= carac.repeat(i);
        doc.text(20, 30 + (i * 10), fila);
    }
  
    
    var string = doc.output('datauristring');
    
    $('iframe').attr('src', string);
  });