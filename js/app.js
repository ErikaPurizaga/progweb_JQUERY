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