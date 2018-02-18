/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var alambre;
	var cantalambre;
	

	largo=parseInt(document.getElementById('Largo').value);
	ancho=parseInt(document.getElementById('Ancho').value);

	alambre= largo + largo + ancho + ancho  ;
	cantalambre= alambre*3;
	alert(cantalambre);
	


//preguntar si esta bien interpretada la consigna;

	

}
function Circulo () 
{
	//preguntar si tenes que multiplicAR EL RADIO POR TRES Y NADA MAS;
	
}
function Materiales () 
{
	var largo;
	var ancho;
	var perimetro;
	var cal;
	var semento;
	

	largo=parseInt(document.getElementById('Largo').value);
	ancho=parseInt(document.getElementById('Ancho').value);

	perimetro= largo+largo+ancho+ancho;
	cal=perimetro*3;
	semento=perimetro*2;

	alert("se necesitan" + cal + "bolsas de cal");
	alert("se necesitan" + semento + "bolsas de semento");


}