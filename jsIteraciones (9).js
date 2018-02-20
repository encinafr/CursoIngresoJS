function Mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		numero=prompt("");
		numero=parseInt(numero);
		if(contador==1)
		{
			maximo=numero;
		}
		if(numero<minimo)
		{
			minimo=numero;
		}
	
	}




}//FIN DE LA FUNCIÓN