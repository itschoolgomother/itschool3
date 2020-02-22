function setup(){
    createCanvas(innerWidth, innerHeight,WEBGL);
    
}
function draw(){
	background(100,60,200);
	rotateX(mouseY / 200);
	rotateY(mouseX / 200);
	normalMaterial()
	cone(100,200,4,10)
	

}