function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota=Math.floor(Math.random() * 10)+1  ;
	console.log(nota);

	if(nota>8)
	{
		alert("EXELENTE");
	}
	else
		if (nota>4)
		{
			alert("APROBÓ");
		}
		else
		{
			alert("Vamos, la proxima se puede");
		}
	
	


	

}//FIN DE LA FUNCIÓN