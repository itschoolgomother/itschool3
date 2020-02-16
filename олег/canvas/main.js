var canvas = document.getElementById("canvas");
var color = prompt("color","blue");
var ctx = canvas.getContext('2d')
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "red";

canvas.onmousemove = function(event){
var x = event.offsetX;
var y = event.offsetY; 
ctx.fillStyle = color;
ctx.beginPath();
ctx.arc(x,y,100,0,70);
ctx.fill();
ctx.closePath ();
}





