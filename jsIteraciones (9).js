function Mostrar()
{
var contador=0;
	var maximo;
	var minimo;

	var numero;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		respuesta=prompt("para salir, ingresar no");

		if(contador==1)
			{
				maximo=numero;
				minimo=numero;
			}
		else
		{	

			if(numero>maximo)
			{
				maximo=numero;


			}
			if(numero<minimo)
			{
				minimo=numero;


		}

		respuesta=prompt("para salir, ingresar no");
		}
	}

	document.getElementById("maximo").value=maximo;

	document.getElementById("minimo").value=minimo;







	/*var contador=0;
	var numero;
	var respuesta='si';
	var acumulador=0;
	var maximo;
	var minimo;

	while(respuesta!='no')
	{
		contador++;
		numero= prompt("ingrese numero: " + contador);
		numero=parseInt(numero);
		respuesta= prompt("ingrese si para continuar")
		if(acumulador<contador)
		{
            maximo=numero;
		}
        
	
	}
    document.getElementById('maximo').value = maximo;
    document.getElementById('minimo').value = minimo;
*/

}//FIN DE LA FUNCIÓN