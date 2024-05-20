function temperaturas(){
var c=parseInt(document.forms[0].grados.value);
var opcion1=parseInt(document.forms[0].opcion.value);
var temp=0;
if(opcion1==1){
temp=c*1.8+32;
document.write("<p>",temp,"°F</p>");
document.write("<a href='temperatura.html'>calcula otra temperatura</a>");
}
if(opcion1==2){
    temp=c+273.15;
    document.write("<p>",temp,"k</p>");
    document.write("<a href='temperatura.html'>calcula otra temperatura</a>");
    }
    return true;
}