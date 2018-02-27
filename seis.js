function Mostrar()
//ingresar numeros hasta que el cliente quiera numeros entre -50 y 50 incluido, informar cuantos pares e impares hay 
// y el promedio de los positivo ademas del maximo y el minimo
{

	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta="si"
	var contadordepares = 0;
	var contadordeimpares = 0;
	var contadordepositivos=0;
	var acumuladordepositivos=0;
	var promediodepositivos;
	var maximo;
	var minimo;

   
   while(respuesta =="si")
  
    {
		numero= prompt("ingrese numero: " );
		numero=parseInt(numero);

		 while(!(numero<-50 || numero >50))
		{
             numero= prompt("error, ingrese numero: " );
             numero=parseInt(numero);
		}
		
		respuesta= prompt("¿quiere ingresar otro numero?")

		contador++;
		acumulador= acumulador+ numero;

		
	}
	
	if(numero %2==0 && numero!=0 )
		{
              contadordepares++;
              
		}
     
       else
       	{
       		contadordeimpares++;
       	
       	}
        
        if(contador>0)
        {
              contadordepositivos++;
              acumuladordepositivos=acumuladordepositivos+numero;
              
        }
        promediodepositivos= acumuladordepositivos/contadordepositivos;


        document.write("<br> la cantidad de pares es" + contadordepares);
        document.write("<br> la cantidad de impares es:" + contadordeimpares);
        document.write("<br> el promdeio de positivos es" + promediodepositivos);
}
