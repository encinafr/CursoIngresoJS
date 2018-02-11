function Mostrar()
{
//tomo la edad 
   var edad;
   var estadocivil;
   var divorciado;

   
    
    edad=document.getElementById('edad').value;

    edad= parseInt(edad);
    estadocivil=document.getElementById('estadoCivil').value;
    estadocivil= parseInt(estadocivil);
    


    

    if (edad<18)
    { 
    	
    	
    		
    		alert("es muy pequeño para no ser soltero");

    	
   
     
    	


    }

	


}//FIN DE LA FUNCIÓN