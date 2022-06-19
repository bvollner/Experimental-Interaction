//fireflies from Firefly Maker by Draw Make & Code//
//https://youtu.be/pgfCl1b_ToY//

let flies = [];
let flies2 = []
let popu = 25;
var c1, c2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  /*c1 = color(0,5,15,255);
  c2 = color(0,51,0,102);
  setGradient(c1, c2);*/
  for (let i = 0; i < popu; i++){
    flies.push(new firefly());
    flies2.push(new firefly2());
  }
}

function draw() {  
  background(0,5,15,255);
  //translate(width/4, height/4);
  for (let i = 0; i < flies.length; i++){
    flies[i].update();
    flies2[i].update();
    }
}
/*function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}*/

//chasing fireflies//
function firefly(){
  this.x = mouseX;
  this.y = mouseY;
  //this.x = 0;
  //this.y = 0;
//double check this later if it effects the mouse pressed// 
  //random increased from 10 to 15 with xoff,yoff//
  //this.xoff = random(100);//
  this.xoff = mouseX+(random(15));
  //this.yoff = random(100);//
  this.yoff = mouseY+(random(15))
  
  this.wave = random(5);
  this.rate = random(0.05, 0.01);

//bug body movement rollingOff and turningOff//
  this.roff = random(12);
  this.toff = random(25);
  
//movement from bottom to field back to bottom//
  this.rise = 15;
  
//function within a function//
  this.update = function() {
    this.xoff += 0.0025;
    this.yoff += 0.0025;
    
    let w = width * 0.25;
    let h = height * 0.25;
    
    this.rise += 0.001;
    
    this.x = map(noise(this.xoff),0,1,-w, mouseX+w);
    this.y = map(noise(this.yoff),0,1,-h, mouseY+h);
    this.wave += this.rate;
    
    let flash = abs(sin(this.wave)*255);    
    let falpha = random(flash,0,255,50,155);
    
    //so he explained how these represented red and green and blue isn't present, but i'll have to watch that part again... starting at 17:05//
    //i made my fireflies a little greener because that's how i remember them//
    stroke(flash * 0.3, flash * 0.5- 30, 0, falpha );
    
// this encapsulation keeps the transfomations where they need to be instead of constantly creating new, global ones//    
    push();
    translate(this.x, this.y);
    this.toff += 0.1; 
    let twing = random(noise(this.toff),0,1, -PI*0.5, PI*0.5);
    rotate(twing);
    
    this.roff += 1;
    let r = map(sin(this.roff),-1,1,-PI*0.25,PI*0.25);
    strokeWeight(2);
    //this variable is for the wing length and the push pop are to isolate transformations//
    let winglen = 12;

    //wing 1//
    push();
    stroke(255,200,0,125);
    rotate(r);
    line(0,0,-winglen, 0);
    pop();
    //wing 2//
    push();
    rotate(-r);
    line(0,0,winglen, 0);
    pop();
    
    //firefly flashing//
    let size = map(flash,0,255,10,25);
    strokeWeight(size);
    point(0,0);
    //halo above, light below//
    strokeWeight(size*0.25);
    stroke(255,255,0,255);
    point(0,0);
    
    pop();
    
  }
}
  function firefly2(){
  //this.x = 0;
  //this.y = 0;
//double check this later if it effects the mouse pressed// 
  //random increased from 10 to 15 with xoff,yoff//
  this.xoff = random(100);
  this.yoff = random(100);
  
  this.wave = random(5);
  this.rate = random(0.05, 0.01);

//bug body movement rollingOff and turningOff//
  this.roff = random(12);
  this.toff = random(25);
  
//movement from bottom to field back to bottom//
  this.rise = 0;
  
//function within a function//
  this.update = function() {
    this.xoff += 0.0025;
    this.yoff += 0.0025;
    
    let w = width * 0.25;
    let h = height * 0.25;
    
    this.rise += 0.001;
    
    this.x = map(noise(this.xoff),0,1,-w, width+w);
    this.y = map(noise(this.yoff),0,1,-h, height+h);
    this.wave += this.rate;
    
    let flash = abs(sin(this.wave)*255);    
    let falpha = random(flash,0,255,50,155);
    
    //so he explained how these represented red and green and blue isn't present, but i'll have to watch that part again... starting at 17:05//
    //i made my fireflies a little greener because that's how i remember them//
    stroke(flash * 0.3, flash * 0.5- 30, 0, falpha );
    
// this encapsulation keeps the transfomations where they need to be instead of constantly creating new, global ones//    
    push();
    translate(this.x, this.y);
    this.toff += 0.1; 
    let twing = random(noise(this.toff),0,1, -PI*0.5, PI*0.5);
    rotate(twing);
    
    this.roff += 1;
    let r = map(sin(this.roff),-1,1,-PI*0.25,PI*0.25);
    strokeWeight(2);
    //this variable is for the wing length and the push pop are to isolate transformations//
    let winglen = 12;

    //wing 1//
    push();
    stroke(255,200,0,125);
    rotate(r);
    line(0,0,-winglen, 0);
    pop();
    //wing 2//
    push();
    rotate(-r);
    line(0,0,winglen, 0);
    pop();
    
    //firefly flashing//
    let size = map(flash,0,255,10,25);
    strokeWeight(size);
    point(0,0);
    //halo above, light below//
    strokeWeight(size*0.25);
    stroke(255,255,0,255);
    point(0,0);
    
    pop();
    
  }
}

