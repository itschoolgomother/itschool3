var box = document.getElementById("box");
var rand = Math.random() * 500;

var randr = Math.random() * 255
var randg = Math.random() * 255
var randb = Math.random() * 255


box.style.width = rand +"px"
box.style.height =rand + "px"
box.style.backgroundColor ="rgb("+randr+","+randg+","+randb+")"

for(var i =0;i<25;i++){
	box.innerHTML += '<div class="box"></div>'
}





// var x = prompt("usd", "9")
// var usd = 8428.20
// alert(x*usd+"btc" )

// var v = prompt("eur", "0")
// var eur = 68.44
// var eurugrn = 26.93
// alert(v*eur+"rub | " + v/eur + "eur | "+ v*eurugrn+"grn" )