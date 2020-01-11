var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "green"
var cx = innerWidth/2;
var cy = innerHeight/2;
ctx.fillStyle = "red"
ctx.fillRect(cx-100,cy-100,200,200);
ctx.beginPath();
ctx.moveTo(innerWidth/2,innerHeight/2);
ctx.lineTo(500,455);



ctx.stroke();
ctx.closePath();



