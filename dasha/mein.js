var say = prompt("Ваш пароль","passworld");
var time = new Date();
var mypas = ""+time.getMinutes()


if(say == mypas){
	alert("Привет, Dasha")
code()
}else{
	alert("Пока")
}




function code(){
var usd = 24.5
var x = prompt("Ваше число?","10")

var resutGrn = usd*x
var resutUsd = x/usd

alert(resutGrn.toFixed(2) + "грн") 
alert(resutUsd.toFixed(2) + "$")
}
