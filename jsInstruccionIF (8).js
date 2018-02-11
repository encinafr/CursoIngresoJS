function Mostrar()
{
//tomo la edad 
     var edad;
   var estadocivil;

   estadocivil=document.getElementById('estadoCivil').value
   

   
    
    edad=document.getElementById('edad').value;

    edad= parseInt(edad);
    
   

    

    if (edad>17&&estadocivil=="Soltero")
    { 	
    		alert("Es soltero y no es menor");

    } 

	//Pregunta si tiene que hacer algo cuando es menor y seleccionamos soltero


}//FIN DE LA FUNCIÓN