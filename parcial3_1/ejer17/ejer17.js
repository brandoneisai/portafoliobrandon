
function grafica(){
    var inicio1=parseInt(document.forms[0].inicio.value);
    var fin1=parseInt(document.forms[0].fin.value);

const xValues = [];
   
const yValues = [];

let exp = "Math.sin(x)";
for (let x = inicio1; x <= fin1; x += 0.1) {

 xValues.push(x);

 yValues.push(eval(exp));

}
// Display using Plotly

const data = [{x:xValues, y:yValues, mode:"lines"}];

const layout = {title: "y = " + exp};

Plotly.newPlot("myPlot", data, layout);
return false;

}

