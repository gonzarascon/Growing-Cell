function Particle(x,y,atractor){

  this.pos = createVector(x,y);
  this.vel = createVector(random(0.5),random(0.5));
  this.acc = createVector();

  this.update = function(){

    this.pos.add(this.vel);
    this.vel.add(this.acc);

  }

  this.show = function(){

    stroke(255,0,255);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);



  }

  this.attraction = function(target){
    let force = p5.Vector.sub(target, this.pos);
    let dSq = force.magSq();
    dSq = constrain(dSq,25,400)
    let grav = 60;
    let strength = grav / dSq;
    force.setMag(strength);
    this.acc = force;


  }



}
