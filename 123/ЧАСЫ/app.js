setInterval(function(){
	alert("пРИВет")
},1000)


var line = document.getElementById("line-m");
var time = new Date();
var min = time.getMinutes()*6;
line.style.transform = "rotate("+min+"deg)";	