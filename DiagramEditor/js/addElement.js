/*
 * Dodawanie elementów do canvasa i definicje elementów
 */

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
			return new fabric.Rect({
				left : x-50,
				top : y-100,
				fill : 'white',
				strokeWidth: 2,
				stroke: 'black',
				width : 100,
				height : 100
			});
		
		}
	
	function createCircle(x,y) {
			return new fabric.Circle({
				left : x-20,
				top : y-70,
				fill : 'white',
				strokeWidth: 2,
				stroke: 'black',
				width : 100,
				height : 100,
				radius: 20
			});
		}
	
	function createLine(x,y) {
		var points=[x,y,x+300,y];
		return new fabric.Line(points,{
		    stroke: 'black',
		    strokeWidth: 3,                    
		    selectable: true
		     });
	}
	

	function makeLine(coords) {
	    return new fabric.Line(coords, {
	      fill: 'gray',
	      stroke: 'gray',
	      strokeWidth: 2,
	      selectable: false
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
		   var elem = document.getElementsByClassName("activePen");
		   for (var i = 0; i < elem.length; i++) {
		 	switch(elem[i].id) {
			    case "Hsquare":
			    	 canvas.add(createRectangle(options.e.clientX, options.e.clientY));
			        break;
			    case "Hcircle":
			        canvas.add(createCircle(options.e.clientX, options.e.clientY));
			        break;
//			    case "Hline":
//			        canvas.add(createLine(options.e.clientX, options.e.clientY));
//			        break;
			    default:
			    	;// do nothing
		 	} 
		   }
		
		});
	


	
});