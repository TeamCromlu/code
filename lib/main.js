// Variables DOM

var $btn__action = $('#btn__action');
var $txt__box = $('#txt__box');
var $respuesta = $('#res');

$btn__action.on("click", Saluda);

function Saluda() {
	var numero = $txt__box.val();
	var respuesta = document.getElementById("res");

	var i = 1;
	var f = 1;
	var datos = i;
	var linea = "";
	for (i = 1; i <= numero; i++) {
		f = f*i ;
		linea += i + "*";	
	}
	linea += numero;	
	respuesta.innerHTML = "El factorial de :" + numero +"! =" + linea +"<br>"+ "es " + f;
	$txt__box = $txt__box.val('');
}



var geo = navigator.geolocation;
var options={};

function geo_ok(position){
	console.log(position)
}

function geo_error(){
	console.log("lo sentios su posicion no ha sido encontrada");
}

geo.getCurrentPosition(geo_ok,geo_error,options);