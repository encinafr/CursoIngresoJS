function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	while(respuesta =="si")
	{
	
		contador++;
		numero= prompt("ingrese numero: " + contador);
		numero=parseInt(numero);
		respuesta= prompt("ingrese si para continuar")

		acumulador=acumulador+numero;
		if(numero>0)
		{
           positivo=numero+numero;
		}
		else
		{
           negativo=numero*numero;
		}
	
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN