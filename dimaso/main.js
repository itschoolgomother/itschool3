var box = document.getElementById("box");


box.style.backgroundColor = "red"

window.addEventListener("scroll",function(e){
	box.style.top = pageYOffset+"px";
	box.style.width = pageYOffset/2+"px";
	box.style.height = pageYOffset/2+"px";
	if(1000>pageYOffset){
		box.style.backgroundColor = "green"
	}else if (1500>pageYOffset){
		box.style.backgroundColor = "red"
    }else if (2000>pageYOffset){
		box.style.backgroundColor = "blue"
	}else if (2500>pageYOffset){
		box.style.backgroundColor = "yellow"
	}

		
	

	console.log(pageYOffset)
});
    


