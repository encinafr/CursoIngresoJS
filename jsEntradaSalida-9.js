/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
   var sueldo;
   var resultado;
   var importe10;

   sueldo=document.getElementById('sueldo').value;
   sueldo=parseInt(sueldo);

   resultado=parseInt(resultado);


   importe10= sueldo*10/100;
   resultado=sueldo+importe10;

   document.getElementById('resultado').value=resultado;
  

	
}
