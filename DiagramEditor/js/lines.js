$( document ).ready(function() {
	var canvas = document.getElementById("canvas").fabric;
	
	 var points=[100,100,300,100], points1=[300,200,400,200],line,line1;
	 
	 line=new fabric.Line(points,{
	                     stroke: 'black',
	                     strokeWidth: 3,                    
	                     selectable: true
	                 });
	     canvas.add(line);


	     
	 function changePosition()
	 {
	    //canvas.setActiveObject(canvas.item(0));
	     line.set(line1);
	     canvas.renderAll();
	     canvas.calcOffset();
	     line.setCoords();
	 }
	
});