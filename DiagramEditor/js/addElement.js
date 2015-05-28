/*
 * Dodawanie elementów do canvasa i definicje elementów
 */

$( document ).ready(function() {
	var canvas = document.getElementById("canvas").fabric;
	
	fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';


/*------- OBJECTS -----------*/

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
				  top: y-50,
				  hasControls: false,
				  hasBorders:false,
				     selectable: true
				});
			
		canvas.add(text);
		canvas.add(makeRectangle(text));
		canvas.bringToFront(text);
		}
	
	
	function newCircle(x,y) {
		function makeCircle(text){
			var circle = new fabric.Circle({
				left : x,
				top : y-50,
				fill : 'white',
				strokeWidth: 2,
				stroke: 'black',
				width : 100,
				height : 100,
				radius: 50
			});
			circle.text=text;
			return circle;
		 }
		
		var text = new fabric.IText('Tap and Type', { 
			  fontFamily: 'arial',
			  fontSize: 13,
			  left: x, 
			  top: y-50,
			  hasControls: false,
			  hasBorders:false,
			     selectable: true
			});
		
			canvas.add(text);
			canvas.add(makeCircle(text));
			canvas.bringToFront(text);
		}
	
	function newEllipse(x,y) {
		function makeEllipse(text){
			var ellipse = new fabric.Ellipse({
				left : x,
				top : y-50,
				 rx: 115,
				 ry: 70,
				strokeWidth: 2,
				stroke: 'black',
				fill : 'white'
			});
			ellipse.text=text;
			return ellipse;
		}
			
		var text = new fabric.IText('Tap and Type', { 
			  fontFamily: 'arial',
			  fontSize: 13,
			  left: x, 
			  top: y-50,
			  hasControls: false,
			  hasBorders:false,
		     selectable: true
		});
		
		canvas.add(text);
		canvas.add(makeEllipse(text));
		canvas.bringToFront(text);
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
		    c.type = 'dot';
		    c.hasControls = c.hasBorders = false;
		    return c;
		  }

		  function makeLine(coords) {
		    return new fabric.Line(coords, {
		      stroke: 'black',
		      strokeWidth: 3,
		      selectable: true,
		      hasControls: false,
		      hasBorders: false
		    });
		  }

		  var line = makeLine([ x-150, y-50, x+150, y-50 ]);

		  canvas.add(line);

		  canvas.add(
		    makeCircle(line.get('x1'), line.get('y1'), null, line),
		    makeCircle(line.get('x2'), line.get('y2'), line)
		  );
	}


	function newArrow(x,y){
			
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
		    c.type = 'dot';
		    c.hasControls = c.hasBorders = false;
		    return c;
		  }
		  
		  function makeTriangle(left, top, line1, line2) {
		  var t = new fabric.Triangle({
		      left: left,
		      top: top,
		      opacity: 1,
		      width: 20,
		      height: 20,
		      angle: 90,
		      fill: '#000'
		  });
		  	t.line1 = line1;
		    t.line2 = line2;
		    t.type = 'triangle';
		    t.hasControls = t.hasBorders = false;
		    return t;
		  }

		  function makeLine(coords) {
		    return new fabric.Line(coords, {
		      stroke: 'black',
		      strokeWidth: 3,
		      selectable: true,
		      hasControls: false,
		      hasBorders: false
		    });
		  }

		  var line = makeLine([ x-150, y-50, x+150, y-50 ]);

		  canvas.add(line);

		  canvas.add(
		    makeCircle(line.get('x1'), line.get('y1'), null, line),
		    makeTriangle(line.get('x2'), line.get('y2'), line)
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
			    case "Hellipse":
			    	newEllipse(options.e.clientX, options.e.clientY);
			    	break;
			    case "Hline":
			       newLine(options.e.clientX, options.e.clientY);
			        break;
			    case "Harrow":
			    	newArrow(options.e.clientX, options.e.clientY);
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
	    if(p.type=='triangle'){
	    	      var x = p.line1.get('x2') - p.line1.get('x1');
	    	      var y = p.line1.get('y2') - p.line1.get('y1');
	    	var angle;
	    	if (x == 0) {
	    	  if (y == 0) {
	    	    angle = 0;
	    	  }
	    	  else if (y > 0) {
	    	    angle = Math.PI / 2;
	    	  }
	    	  else {
	    	    angle = Mathi.PI * 3 / 2;
	    	  }
	    	}
	    	else if (y == 0) {
	    	  if (x > 0) {
	    	    angle = 0;
	    	  }
	    	  else {
	    	    angle = Math.PI;
	    	  }
	    	}
	    	else {
	    	  if (x < 0) {
	    	    angle = Math.atan(y / x) + Math.PI;
	    	  }
	    	  else if ( y < 0) {
	    	    angle = Math.atan(y / x) + (2 * Math.PI);
	    	  }
	    	  else {
	    	    angle = Math.atan(y / x);
	    	  }
	    	}
	    	angle = angle * 180 / Math.PI;
	    	               // var angle = -Math.atan((y)/(x))*180/Math.PI

	    	      p.set('angle',angle-270);
	    }
	    canvas.renderAll();
	  });	
	
	canvas.on('object:moving', function(e) {
	    var p = e.target;
	    p.text && p.text.set({ 'left': p.left, 'top': p.top });
	    canvas.renderAll();
	  });	
	
	//handle moving object
	canvas.on('object:moving', function(event) {
	            var obj = event.target;
	            intersectingCheck(obj);
	});

	function intersectingCheck(activeObject) {
	    activeObject.setCoords();
	    if(typeof activeObject.refreshLast != 'boolean') {
	        activeObject.refreshLast = true
	    };

	    //loop canvas objects
	    activeObject.canvas.forEachObject(function (targ) {
	        if (targ === activeObject) return; //bypass self

	        //check intersections with every object in canvas
	        if (activeObject.intersectsWithObject(targ) 
	            || activeObject.isContainedWithinObject(targ) 
	            || targ.isContainedWithinObject(activeObject)) {
	                //objects are intersecting - deny saving last non-intersection position and break loop
	                if(typeof activeObject.lastLeft == 'number') {
	                    activeObject.left = activeObject.lastLeft;
	                    activeObject.top = activeObject.lastTop;
	                    activeObject.text && activeObject.text.set({ 'left': activeObject.lastLeft, 'top': activeObject.lastTop });
	                    activeObject.refreshLast = false;
	                    return;
	                }
	           }
	           else {
	               activeObject.refreshLast = true;
	           }
	   });

	   if(activeObject.refreshLast) {
	       //save last non-intersecting position if possible
	       activeObject.lastLeft = activeObject.left
	       activeObject.lastTop = activeObject.top;
	   }
	}
	
});