var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight
canvas.style.backgroundColor = "black"


var HalfW = window.innerWidth/2
var HalfH = window.innerHeight/2

for(var i=0;i<500;i+=25){
ctx.strokeStyle = "rgb("+i/5+","+i+","+i*1.2+")"
var w = 300+i 
var h = 300+i 
ctx.strokeRect(HalfW-w/2,HalfH-h/2,w,h)

}
ctx.beginPath()
ctx.fillStyle = "rgb(100,100,100)"
ctx.arc(100,100,50,0,Math.PI*2)
ctx.fill()
ctx.closePath()




