//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*
function Mostrar()
{
	var numero;
	var contador=0;
	var respuesta=""
	var contadorPares=0;
	var suma=0;
	var promedio;
	var minimo;
	var maximo;

	while(respuesta !="no")
	{
		contador++;
		numero = prompt("Ingrese un número:");
		numero = parseInt(numero);

		while(numero < 0 || isNaN(numero))
		{
			numero = prompt("Ingrese un número:");
			numero = parseInt(numero);
		}

		suma = suma + numero;

		if(numero%2==0 && numero!=0)
		{
			contadorPares++;
		}

		if(contador==1)
		{
			minimo = numero;
			maximo = numero;
		}
		else
		{
			if(numero < minimo)
			{
				minimo = numero;
			}
			if(numero > maximo)
			{
				maximo = numero
			}
		}



		respuesta = prompt("Ingrese no para salir");
	}	


	promedio = suma/contador;

	document.write("La cantidad de números pares es " + contadorPares);
	document.write("<br> El promedio de los números es " + promedio);
	document.write("<br> La suma de todos los números ingresados es " + suma);
	document.write("<br> El número mínimo es " + minimo);
	document.write("<br> El número máximo es " + maximo);
}
*/
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
    var maximo;
    var minimo;
    var nombrepesomaximo;
    var nombrepesominimo;
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
		if(contador==1)
		{
	    	 maximo=peso;
	    	 nombrepesomaximo=nombre;
		   	 minimo=peso;
		   	 nombrepesominimo=nombre;
		}else
		{
			if(peso<minimo)//asignale el peso y el nombre
			{
				minimo=peso;
				nombrepesominimo=nombre;
					
			}

			if(peso>maximo)
			{
				maximo=peso;
				nombrepesomaximo=nombre;
					
			}
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
       respuesta=prompt("desea continuar, ingrese si");
	}

		
  document.write("<br> el nombre del animal con peso maximo es:" + nombrepesomaximo);
  document.write("<br> el nombre del animal con peso minimo es:" + nombrepesominimo);
  document.write("<br> las temperaturapares son: "  + temperaturapares);
  document.write("<br> las temperaturaimpares son: "  + temperaturaimpares);


}


