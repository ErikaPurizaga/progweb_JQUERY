//Econder el mensaje
/*jQuery(".advertencia").hide();

//mostrar el mensaje lentamente usaos un atajo $$
$(".advertencia").show("slow");
//jQuery(".advertencia").hide().show("slow");*/

function enviarAdvertencia()
{
	jQuery(".advertencia").hide().show("slow");

}

$(document).ready(enviarAdvertencia);


//Planear




//ESCONDER SPOILER
$(".spoiler span").hide();

//2 AGREGAR BOTON
$(".spoiler").append("<button> Mostrar Spoiler!</button>");

//cuando se presiona el BOTON
//agregar un handler al evento clic
$(".spoiler button").click(function(){
//mostrar  spoiler
	$(".spoiler span").show();

	//deshacer del boton
	$(this).remove();
})


function enviarAdvertencia()
{
	jQuery(".spoiler").hide().show("slow");

}