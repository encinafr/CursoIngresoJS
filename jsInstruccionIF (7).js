function Mostrar()
{
//tomo la edad 
   var edad;
   var estadocivil;

   estadocivil=document.getElementById('estadoCivil').value
   

   
    
    edad=document.getElementById('edad').value;

    edad= parseInt(edad);
    
   

    

    if (edad<18 && estadocivil !== "Soltero" )
    { 	
    		alert("Es muy pequeño para no ser soltero");

    }

	


}//FIN DE LA FUNCIÓN