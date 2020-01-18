var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "red";




for (var i = 0; i<100;i++){ 
var randomX = Math.random() * innerWidth;
var randomY = Math.random() * innerHeight;	
var random = Math.random() * 255;
ctx.strokeStyle='rgb('+random+','+random+','+random+')';
ctx.strokeRect(randomX , randomY,random,random)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 




}

