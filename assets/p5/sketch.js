let atractor;
let particles = [];
let atractorR;
let hit;

function setup(){
  createCanvas(700, 700);
  atractor = createVector(width/2, height/2);
  atractorR = (atractor.x + atractor.y)/4;
  for (let i = 0; i < 50; i++){

    particles.push(new Particle(random(width/4),random(height/4)));

  }



}




function draw(){
  background(50);
  stroke(255);
  strokeWeight(5);
  ellipseMode(CENTER);
  ellipse(mouseX, mouseY, atractorR);

  for (let i = 0; i < particles.length; i++){
    particles[i].attraction(atractor);
    particles[i].update();
    particles[i].show();

    hit = collidePointCircle(particles[i].pos.x, particles[i].pos.y, mouseX, mouseY, atractorR);

    if(hit === true){
      atractorR += 0.3;
      particles.splice(0 , 1);
      particles.push(new Particle(random(width/4),random(height/4)));

    }

  }



}
