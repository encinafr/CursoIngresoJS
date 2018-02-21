function Mostrar()
{
	var contador=0;
	var iteraciones=-10;
	var contadordepar=0;
	var contadordeimpar=0;
	var contadordecero=0;
	var contadordepositivo=0;
	var contadordenegativos=0;



	for(;;)
	{
		document.write("<br>" + contador);
		 if (contador==0);
        {
        	contadordeceros++;
        }
        else
        {
        	if(contador>0)
        {
        	contadordenegativos++;
        }else
        {
        	contadordenegativos++
        }
		
        if(contador %2==0)
        {
        	contadordepar++;
        	 
        }
        else
        {
        	contadordeimpar++;
        }

       
        //terminalo en casa
        


		contador ++;
		if(contador==10)
		{
			break;
		}
	} 
	    //document.write("<br>"+contador);
	     document.write("<br> ceros:"+contadordeceros);
	    document.write("<br> negativos:"+contadordenegativos);
	    document.write("<br> positivos:"+contadordepositivo);
	    document.write("<br> pares:"+contadordepar);
	    document.write("<br> impar:"+contadordeimpar);
	   
}