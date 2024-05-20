function resultados() {

	var p_1=parseInt(document.forms[0].p1.value);
    var p_2=parseInt(document.forms[0].p2.value);
    var p_3=parseInt(document.forms[0].p3.value);
    var p_4=parseInt(document.forms[0].p4.value);
    var p_5=parseInt(document.forms[0].p5.value);
    var p_6=parseInt(document.forms[0].p6.value);
    var p_7=parseInt(document.forms[0].p7.value);
    var p_8=parseInt(document.forms[0].p8.value);
    var p_9=parseInt(document.forms[0].p9.value);
    var p_10=parseInt(document.forms[0].p10.value);
    var p_11=parseInt(document.forms[0].p11.value);
    var p_12=parseInt(document.forms[0].p12.value);
    var p_13=parseInt(document.forms[0].p13.value);
    var p_14=parseInt(document.forms[0].p14.value);
    var p_15=parseInt(document.forms[0].p15.value);
    var p_16=parseInt(document.forms[0].p16.value);
    var p_17=parseInt(document.forms[0].p17.value);
    var p_18=parseInt(document.forms[0].p18.value);
    var p_19=parseInt(document.forms[0].p19.value);
    var p_20=parseInt(document.forms[0].p20.value);
    var p_21=parseInt(document.forms[0].p21.value);
    var fase="";
    var puntos=p_1+p_2+p_3+p_4+p_5+p_6+p_7+p_8+p_9+p_10+p_11+p_12+p_13+p_14+p_15+p_16+p_17+p_18+p_19+p_20+p_21;
    var nombre=prompt("Ingresa tu Nombre: ");
   alert("Tu puntaje es: "+puntos);

if(puntos>=0 && puntos<=12){
  fase="apertura";
  alert("Estas en la fase de apertura");
}

if(puntos>=13 && puntos<=24){
  fase="dominio";
  alert("Estas en la fase de dominio");
}

if(puntos>=25 && puntos<=36){
  fase="demostración";
  alert("Estas en la fase de demostración");
}

if(puntos>=37 && puntos<=48){
  fase="reconocimiento";
  alert("Estas en la fase de reconocimiento");
}

if(puntos>=49 && puntos<=60){
  fase="inminente";
  alert("Estas en la fase de riesgo inminente");
}

if(puntos>60){
  fase="Consumación";
  alert("Estas en la fase de Consumación");
  
}

$(document).ready(function() {
  var doc = new jsPDF();
  
  doc.setFontSize(20);
  doc.text(40, 20, "Nombre: " +nombre);
  doc.text(40, 40, "tu puntaje es: "+puntos);
  doc.text(40, 60, "Te encuentras en el la fase de: "+fase);

  
  var string = doc.output('datauristring');
  
  $('iframe').attr('src', string);
});

        return false;
      } 

       