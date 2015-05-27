$( document ).ready(function() {	

// create canvas and prepre reference
var canvas = new fabric.Canvas('canvas');
document.getElementById("canvas").fabric = canvas;

/*------- BACKGROUND -----------*/
var src = 'img/bg.png';
canvas.setBackgroundColor({source: src, repeat: 'repeat'}, function () {
  canvas.renderAll();
});

/*------- OBJECTS -----------*/

	// create a rectangle object
	var rect1 = new fabric.Rect({
		left : 100,
		top : 100,
		fill : 'white',
		strokeWidth: 2,
		stroke: 'black',
		width : 20,
		height : 20
	});
	
	var rect2 = new fabric.Rect({
		left : 60,
		top : 60,
		fill : 'white',
		strokeWidth: 2,
		stroke: 'black',
		width : 20,
		height : 20
	});
	
	
	function makeLine(coords) {
	    return new fabric.Line(coords, {
	      fill: 'gray',
	      stroke: 'gray',
	      strokeWidth: 2,
	      selectable: false
	    });
	  }
	
	var line  = makeLine([ 100, 100, 60, 60 ]);
	rect2.line = line;
	rect1.line = line;
	
	canvas.add(line)

	canvas.add(rect1, rect2);
	
});