let dim = 80.0;

function setup() {
  createCanvas(710, 400, WEBGL);
}

function draw() {
  background(100);

  noFill();
  stroke(255);
  push();
  translate(0, 0);
  rotateY(rotacaoY);
  rotateX(rotacaoX);
  box(200);
  pop();

}