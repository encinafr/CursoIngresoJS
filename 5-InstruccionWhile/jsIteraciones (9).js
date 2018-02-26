function Mostrar()
{
    var contador=0;
	var maximo=0;
	var minimo=0;

	var numero;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		
		if(contador==1)
			{
				maximo=numero;
				minimo=numero;
			}
		else
		{	

			if(numero<minimo)
			{
				mainimo=numero;
            }
			 if(numero>maximo)
			{
				maximo=numero;
			}


		}

		respuesta=prompt("para salir, ingresar no");
		
	}

	document.getElementById("maximo").value=maximo;

	document.getElementById("minimo").value=minimo;





}//FIN DE LA FUNCIÓN