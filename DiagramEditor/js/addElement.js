/*
 * Dodawanie elementów do canvasa i definicje elementów
 */

$( document ).ready(function() {
	var canvas = document.getElementById("canvas").fabric;
	
	fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';


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
	
	function newRectangle(x,y) {
		
		 function makeRectangle(text){
			var rect = new fabric.Rect({
				left : x,
				top : y-50,
				fill : 'white',
				strokeWidth: 2,
				stroke: 'black',
				width : 100,
				height : 100
			});
			rect.text=text;
			return rect;
		 }
			var text = new fabric.IText('Tap and Type', { 
				  fontFamily: 'arial',
				  fontSize: 13,
				  left: x, 
				  top: y-50 ,
				});
			
		canvas.add(text);
		canvas.add(makeRectangle(text));
		canvas.bringToFront(text);
		}
	
	
	function newCircle(x,y) {
		var circle = new fabric.Circle({
				left : x,
				top : y-50,
				fill : 'white',
				strokeWidth: 2,
				stroke: 'black',
				width : 100,
				height : 100,
				radius: 20
			});
			canvas.add(circle);
		}
	
	function newLine(x,y){
			
		  function makeCircle(left, top, line1, line2) {
		    var c = new fabric.Circle({
		    	left : left,
				top : top,
				fill : 'white',
				strokeWidth: 2,
				stroke: 'black',
				radius: 3,
		    });
		    c.line1 = line1;
		    c.line2 = line2;
		    c.hasControls = c.hasBorders = false;
		    return c;
		  }

		  function makeLine(coords) {
		    return new fabric.Line(coords, {
		      stroke: 'black',
		      strokeWidth: 3,
		      selectable: true
		    });
		  }

		  var line = makeLine([ x-150, y-50, x+150, y-50 ]);

		  canvas.add(line);

		  canvas.add(
		    makeCircle(line.get('x1'), line.get('y1'), null, line),
		    makeCircle(line.get('x2'), line.get('y2'), line)
		  );
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
			    	newRectangle(options.e.clientX, options.e.clientY);
			        break;
			    case "Hcircle":
			       newCircle(options.e.clientX, options.e.clientY);
			        break;
			    case "Hline":
			       newLine(options.e.clientX, options.e.clientY);
			        break;
			    default:
			    	;// do nothing
		 	} 
		   }
		
		});
	
	canvas.on('object:moving', function(e) {
	    var p = e.target;
	    p.line1 && p.line1.set({ 'x2': p.left, 'y2': p.top });
	    p.line2 && p.line2.set({ 'x1': p.left, 'y1': p.top });
	    canvas.renderAll();
	  });	
	
	canvas.on('object:moving', function(e) {
	    var p = e.target;
	    p.text && p.text.set({ 'left': p.left, 'top': p.top });
	    canvas.renderAll();
	  });	
	
});