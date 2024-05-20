function dibujar(){
//var palabra1=document.getElementById("palabra").value;
var palabra2="hola";
const canvas=document.getElementById("myCanvas");
const ctx= canvas.getContext("2d");
var   nintento=6;

   
       
       
            for(let i=0;i<6;i++){
            let palabra1= prompt("Ingresa una palabra");
           if (palabra1!==palabra2){
             switch(i){

                case 0:
                 //cabeza (intento uno)
                ctx.beginPath();
                ctx.arc(200,70,50,0,2*Math.PI);
                ctx.stroke();   
                //alert("Te quedan " + nintento + " intentos");
                break;

                case 1:
                     //cuerpo(intento dos)
                    ctx.beginPath();
                    ctx.moveTo(200, 120);
                    ctx.lineTo(200, 220);
                    ctx.stroke();
                    //alert("Te quedan " + nintento + " intentos");
                    break;

                case 2:
                    //Brazo izq (intento tres)
                    ctx.beginPath();
                    ctx.moveTo(200, 120);
                    ctx.lineTo(120, 150);
                    ctx.stroke();
                    //alert("Te quedan " + nintento + " intentos");
                    break;

                case 3:
                    //pierna izq (intento cuatro)
                    ctx.beginPath();
                    ctx.moveTo(200, 220); 
                    ctx.lineTo(160,300); 
                    ctx.stroke(); 
                    alert("Te quedan " + nintento + " intentos");
                    break;

                case 4:
                    //Brazo der (intento cinco)
                    ctx.beginPath();
                    ctx.moveTo(200, 120);
                    ctx.lineTo(250, 150);
                    ctx.stroke();  
                    alert("Te quedan " + nintento + " intentos");
                    break;

                case 5:
                    //pierna der (intento seis)
                    ctx.beginPath();
                    ctx.moveTo(200, 220); 
                    ctx.lineTo(250,300); 
                    ctx.stroke();
                    //alert("Te quedan " + nintento + " intentos");
                    alert("Perdiste");
                    break;
            } 
                nintento--;
                alert("Te quedan " + nintento + " intentos");
           }else {alert("¡GANASTE!");
                return true;
             }

           
    
        }
        

  

   return false;
}





function limpiar(){
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.rect(0, 0, 400, 400);
    ctx.fillStyle = "white";
    ctx.fill();        
}