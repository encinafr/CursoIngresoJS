function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	while(respuesta =='si')
	{
	
		contador++;
		respuesta= prompt("ingrese"+contador+"numero");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		

		
	}
	 promedio=acumulador/contador


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN