
// var test = prompt("Вопрос ?Гони бабло!","132"); 
// var usd = 24;
//  alert(Math.round(test/usd)+"usd");
// var cfh = 24.69;
//  alert(Math.round(test/cfh)+"cfh");
//  var bitcoin = 193 310.15;
//  alert(Math.round(test/usd)+"bitcoin")
setInterval(function(){ 
var red = Math.random() * 255
var green = Math.random() * 255
var blue = Math.random() * 255
document.body.style.backgroundColor = "rgb("+red+","+green+","+blue+")"
var rand = Math.random() * 50
box.style.borderRadius = rand+"%"
},1000);

var box = document.getElementById('box')
box.style.width = "100px"
box.style.height = "100px"
box.style.backgroundColor = "red"