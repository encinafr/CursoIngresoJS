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
    var varonesdesaprobados=0;
    var nombremejornota=1;
    var edad;







	while(seguir !='no')
	{
		nombre = prompt("ingrese el nombre:");
		cantidad ++;
		edad = prompt("ingrese su edad");
		edad = parseInt(edad);
		if(edad<0 && edad>100)
		{
			edad = prompt("ingrese su edad");
		    edad = parseInt(edad);
		}
		sexo = prompt("ingrese su sexo");
		while(sexo !="f" && sexo !="m")
		{
			sexo = prompt("ingrese su sexo");
			

		}
			if(sexo=="f")
			{
				sexof ++;
			}
			else
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
		if(nota <4 && sexo =="m")
		{
           varonesdesaprobados++;

		}
		if(nota >1)
		{
              nombremejornota=nota;
              nota=nombre;
              if(!=(nombremejornota<nota))
              {
              	nota=nombre;
              }
		}
		seguir = prompt("NO para salir");
			
	}
	promedio= sumadenotas/cantidad;
	document.write("<br>"+"son" + cantidad + " de alumno");
	document.write("<br>"+"el promedio es: " + promedio + " de notas");
	document.write("<br>"+"sexom:" + sexom +" sexof:" + sexof);
	document.write("<br>"+"los varones desaprobados son:" + varonesdesaprobados);
	document.write("<br>"+"el nombre de la mejor nota es:" + nota);

	



}
