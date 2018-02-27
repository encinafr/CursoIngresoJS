function Mostrar()
{
	var numero=0;
	var numero2=0;
	var suma;
	var resta;
	numero=prompt("ingrese numero");
	numero=parseInt(numero);

	numero2=prompt("ingrese otro numero");
	numero2=parseInt(numero2);
	suma= numero + numero2;
	resta= numero - numero2;
	if(numero==numero2)
	{
	
	    document.write("el resultado es:" + numero*numero2 );
	}
	else
	{
		
	 if(numero>numero2)
		{
			 document.write("el resultado es: " + resta );	
        
		}
		 else
		{
			document.write("el resultado es: " + suma);	
		}
	}

}
