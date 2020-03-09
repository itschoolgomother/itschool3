
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas.style.backgroundColor = "lime"
var halfW = window.innerWidth/2
var halfH = window.innerHeight/2

// for(var i=0;i<500; i+=25){
	
// ctx.strokeStyle = "rgb("+i/4+","+i+","+i*1.2+")"
// var w = 300+i
// var h = 500-i
// ctx.strokeRect(halfW-w/2, halfH-h/2,w,h)
// }

ctx.beginPath()
ctx.fillStyle="yellow"
ctx.moveTo(600,600)
ctx.lineTo(1000,600)
ctx.lineTo(800,200)
ctx.lineTo(600,600)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.fillStyle="crimson"
ctx.arc(850,400,15,0,Math.PI*2)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.fillStyle="crimson"
ctx.arc(750,400,15,0,Math.PI*2)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.fillStyle="black"
ctx.moveTo(1100,400)
ctx.lineTo(875,350)
ctx.lineTo(1100,400)
ctx.lineTo(950,500)
ctx.lineTo(875,350)
ctx.fill()
ctx.closePath()

// var time = new Date();
// alert(time.getMinutes())



setInterval(function(){
var time = new Date()
for(var i=0; i<time.getMinutes(); i++){


var randW=Math.random() * innerWidth;
var randH=Math.random() * innerHeight;
ctx.beginPath()
ctx.fillStyle="purple"
ctx.arc(randW, randH, 15,0,Math.PI*2)
ctx.fill()
ctx.closePath()
}
},1000)