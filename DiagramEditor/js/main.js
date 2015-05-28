/*
 * główny plik z definicją canvasa
 */ 

$( document ).ready(function() {	

	var canvas = new fabric.Canvas('canvas');
	document.getElementById("canvas").fabric = canvas;
	/*------- BACKGROUND -----------*/
	var src = 'img/bg.png';
	canvas.setBackgroundColor({source: src, repeat: 'repeat'}, function () {
	  canvas.renderAll();
	});
	
	/*------- WELCOME TITLE -----------*/
	
	canvas.on('mouse:down', function(options) {
		$("#welcome-screen").fadeOut("slow");
	});
	
});

