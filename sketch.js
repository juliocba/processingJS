function setup() {
  createCanvas(x, y);
}

function draw() {
  background(0);
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 50, 50);
}