var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "blue"

setInterval(function(){

var randx = Math.random()* innerWidth
var randy = Math.random()* innerHeight
var blue = Math.random()*255
var green = Math.random()*255
var red = Math.random()*255

ctx.fillStyle = "rgb("+blue+","+green+","+red+")"
ctx.fillRect(randx,randy,50,50);
},100)