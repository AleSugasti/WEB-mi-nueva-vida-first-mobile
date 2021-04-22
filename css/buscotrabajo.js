var quierotrabajar = "si";
var experiencia = "nada"
var contratado = "no"



 while (quierotrabajar == "si" & experiencia == "nada" & contratado == "no") {
    
       contratado = prompt("tiene trabajo para mi? si/no");

       if (contratado == "no") {
             experiencia = prompt("tienes experiencia? Mucha/nada ");
           
             if(experiencia == "nada"){
                 document.write("entonces trabaja");  
                              
            } else {
                document.write("estas contratado");
                contratado = "si";
                
                break;
            }
       
       }
     
      if( contratado == "no") {
        alert("#para eso vine a la entrevista");
        alert("!!experiencia Comprobableeeee!!");
        alert("#!!como voy a obtener experiencia sino puedo trabajar!!");
        alert("entonces trabaja");

      }

       

 }