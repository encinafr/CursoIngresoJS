//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
//se ingresa hasta que el usuario quiera, el nombre de un animal, el peso del mismo, validar que sea mayor a cero
//y la temperatura del habitad de este animal,validar entre menos 40 y 40 informar:la cantidad de temperaturas pares
//la cantidad de temperaturas impares , el nombre del animal mas pesado, el nombre del animal menos pesado
//la cantidad de animales que viven en habitad menores a cero inclusive, el promedio del peso de todos los animales
//la temperatura maxima y la minima.
function Mostrar()
{
    var nombre;
    var peso;
    var temperatura;
    var contador=0;
    var temperaturapares=0;
    var temperaturaimpares=0;
    var nombrepesomaximo=0;
    var nombrepesominimo=0;
	var respuesta="si";
	while(respuesta == "si")
	{
		contador++;
		nombre = prompt("Ingrese el nombre del animal:");
		peso=prompt("ingres el peso del animal");
		peso=parseInt(peso);
		while(peso<0)
		{
			peso=prompt("ingres el peso del animal");
		    peso=parseInt(peso);
		}
		temperatura=prompt("ingrese la temperatura");
		temperatura=parseInt(temperatura);
		while(temperatura<-40 || temperatura >40)
		{
			temperatura=prompt("ingrese la temperatura");
		temperatura=parseInt(temperatura);
		}
		if(temperatura %2==0 && temperatura!=0)
		{
             temperaturapares++;
		}
		else
		{
             temperaturaimpares++;
		}
		if(contador==1)
		{
			peso=nombre;
			peso=nombre;
		}else
		{
			if(peso<nombrepesominimo)//asignale el peso y el nombre
			{
				nombrepesominimo=peso;
				nombrepesominimo=nombre;	
			}

			if(peso>nombrepesomaximo)
			{
				nombrepesomaximo=peso;
				nombrepesomaximo=nombre;
					
			}
			

			
		}
       respuesta=prompt("desea continuar, ingrese si");
	}

		
  document.write("<br> el nombre del animal con peso maximo es:" + nombre);
  document.write("<br> el nombre del animal con peso minimo es:" + nombre);
  document.write("<br> las temperaturapares son: "  + temperaturapares);
  document.write("<br> las temperaturaimpares son: "  + temperaturaimpares);


}

