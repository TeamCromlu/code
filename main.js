// Variables DOM
'use strict';

var $btn__action = $('#btn__action');
var $txt__box = $('#txt__box');
var $respuesta = $('#res');

$btn__action.on("click", Saluda);

function Saluda() {
	var name = $txt__box.val();
	var respuesta = document.getElementById("res");
	// alert(name)
	respuesta.innerHTML = name;

	$txt__box = $txt__box.val('');
}