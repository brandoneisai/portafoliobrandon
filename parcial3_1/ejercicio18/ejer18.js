
function grafica(){
    var inicio1=parseInt(document.forms[0].inicio.value);
    var fin1=parseInt(document.forms[0].fin.value);
    var identidad1=parseInt(document.forms[0].identidad.value);

const xValues = [];
   
const yValues = [];

if(identidad1==1){

exp = "Math.sin(x)";
for ( x = inicio1; x <= fin1; x += 0.1) {

 xValues.push(x);

 yValues.push(eval(exp));

}


}

else if(identidad1==2){

     exp = "Math.cos(x)";
    for ( x = inicio1; x <= fin1; x += 0.1) {
    
     xValues.push(x);
    
     yValues.push(eval(exp));
    
    }
   
    
    }


    else if(identidad1==3){


         exp = "Math.tan(x)";
        for ( x = inicio1; x <= fin1; x += 0.1) {
        
         xValues.push(x);
        
         yValues.push(eval(exp));
        
        }
        
        
        }


        else if(identidad1==4){

             exp = "Math.tanh(x)";
            for ( x = inicio1; x <= fin1; x += 0.1) {
            
             xValues.push(x);
            
             yValues.push(eval(exp));
            
            }
           
           
            
            }
            
        // Display using Plotly
                    
        const data = [{x:xValues, y:yValues, mode:"lines"}];

        const layout = {title: "y = " + exp};

        Plotly.newPlot("myPlot", data, layout);

    return false;
}
