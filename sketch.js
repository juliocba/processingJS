function setup() {
  var cnv = createCanvas(900, 600, WEBGL);
  var x = (windowWidth - width) / 1.10;
  var y = (windowWidth - width) / 6;
  cnv.position(x, y);
  noStroke();
}

function draw() {
  background(150);

  // Orange point light on the right
  pointLight(150, 100, 0, 500, 0, 200);

  // Blue directional light from the left
  directionalLight(0, 102, 255, -1, 0, 0);

  // Yellow spotlight from the front
  pointLight(255, 255, 109, 0, 0, 300);

  push();
  translate(translacaoX, translacaoY, translacaoZ);
  rotateY(rotacaoY);
  rotateX(rotacaoX);
  rotateZ(rotacaoZ);
  scale(escalarX, escalarY, escalarZ);
  cone(60,-150,4);
  pop();
}