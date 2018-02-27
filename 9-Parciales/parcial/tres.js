function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var alambre;

	ancho=document.getElementById('alrgo').value;
    largo=document.getElementById('ancho').value;
    perimetro= largo*2 + ancho*2;

    alambre= perimetro*3;

    alert("se necesitan:" + alambre + "metros de alambre");



}
