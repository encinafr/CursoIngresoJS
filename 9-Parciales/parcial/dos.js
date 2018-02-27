function Mostrar()
{
	var importe;
	var importefinal;
	var iva=0.21;

	importe=prompt("ingrese un importe");
	importe=parseInt(importe);
    iva=importe*0.21;
	importefinal=importe+iva;

	document.getElementById('importeFinal').value=importefinal;

  
}
