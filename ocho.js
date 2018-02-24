/*
ingreso de alumnos , no sabemos cuantos alumnos hay, pedir nombre;
cuantos alumnos ingrese
*/
function Mostrar()
{
	var nombre;
	var cantidad=0;
    var seguir="";
    var promedio;
    var nota;
    var sumadenotas=0;
    var sexo;
    var sexof=0;
    var sexom=0;






	while(seguir !='no')
	{
		nombre = prompt("ingrese el nombre:");
		cantidad ++;
		sexo = prompt("ingrese su sexo");
		while(sexo !="f" && sexo !="m")
		{
			sexo = prompt("ingrese su sexo");
			

		}
			if(sexo=="f")
			{
				sexof ++;
			}
			if(sexo=="m")
			{
				sexom ++;
			}
		
		nota=prompt("ingrese nota");
		nota=parseInt(nota);
		sumadenotas=sumadenotas+nota;
		while(nota <0 || nota > 10)
		{
			nota=prompt("ingrese nota");
			nota=parseInt(nota);

		}
		seguir = prompt("NO para salir");
			
	}
	promedio= sumadenotas/cantidad;
	document.write("son" + cantidad + " de alumno");
	document.write("el promedioes " + promedio + " de notas");
	document.write("sexom:" + sexom +" sexof:" + sexof);

	



}
