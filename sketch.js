var dir1;
var dir2;
var velo1;
var velo2;
var di;
var colorC;
var rotacion ;
let cambio=0;
w=255;
e=200;
q=300;




function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
  strokeWeight(20);
  frameRate(60);
	
	
	rotacion= new Rotar(5, 5, 60, 70, color('#D3576A'));
  di=0;
  colorC = color('#BF5E6D');
	noCursor();
  

}

function draw() {
	 for (let i = 0; i < width; i++) {
   var r = random(w);
   var g = random(e);
   var b = random(q);
    stroke(r, g, b, 5);
		 
        
    line(i, 0, i, height);
	 }	 
	if(cambio>5){
		
	w=w-20;
		
		if(w<=0){
			w=255-random(20);
		}
		q=q-10;
		if(q<=0){
			q=300-random(10);
		}
		cambio=0;
	}
	
		 cambio=cambio+0.08;
	0
		rotacion.display(); 

  if (di==0) {

    rotacion.move1();
		
		
  }
  if (mouseY<height/2) {
    if (mouseIsPressed==true) {
      di=1;
    }
  }

  if (mouseY>height/2) {
    if (mouseIsPressed==true) {
      di=2;
    }
  }

  if (mouseX>width/2+200) {
    if (mouseIsPressed==true) {
      di=3;
    }
  }
  if (mouseX<width/2-200) {
    if (mouseIsPressed==true) {

      di=4;
    }
  }

  if (di==1) {
    rotacion.move2();
  }
  if (di==2) {
    rotacion.move1();
  }
  if (di==3) {
    rotacion.move3();
  }
  if (di==4) {
    rotacion.move4();
  }
		
  
}      
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
