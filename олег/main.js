

// var test = prompt("курс","8800")
// var usd = 24;
// var cfh = 24.69;
// var huf = 0.08;
// var eur = 26.67;
// alert(Math.round(test/usd)+ "usd");
// alert(Math.round(test/cfh)+ "cfh");
// alert(Math.round(test/huf)+ "huf");
// alert(Math.round(test/eur)+ "eur");
var box  = document.getElementById("box")
var size  = prompt("size","100")
var color= prompt("blue");
box.style.width = size+"px";
box.style.height = size+"px";
box.style.backgroundColor = color;