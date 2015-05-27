$( document ).ready(function() {
	var canvas = document.getElementById("canvas").fabric;


/*------- OBJECTS -----------*/

	function createRectangleInTheMiddle() {
	// create a rectangle object
		return new fabric.Rect({
			left : 500,
			top : 300,
			fill : 'white',
			strokeWidth: 2,
			stroke: 'black',
			width : 100,
			height : 100
		});
	}
	
	function createRectangle(x,y) {
		// create a rectangle object
			return new fabric.Rect({
				left : x-50,
				top : y-50,
				fill : 'white',
				strokeWidth: 2,
				stroke: 'black',
				width : 100,
				height : 100
			});
		
		}
	
	/* ---- dodanie obiektu po przycisku----*/
	var addRectangle = document.getElementById('add-rectangle');
		addRectangle.onclick = function()	{
			canvas.add(createRectangleInTheMiddle());
	}
	
	/* ---- dodanie obiektu Onclick----*/
	canvas.on('mouse:down', function(options) {
		    if (options.target)
		       return;

		    canvas.add(createRectangle(options.e.clientX, options.e.clientY));
		});

	
});