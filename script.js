let colornames1 = ["black", "gray", "maroon", "red", "orange", "yellow", "green", "deepskyblue", "purple"]
let colornames2 = ["white", "lightgray", "peru", "pink", "gold", "khaki", "greenyellow", "lightblue", "orchid"]

let colorrow1 = [];
let colorrow2 = [];

let penColor = "black";

function preload() {
  heading = loadFont('Roboto-Medium.ttf');
  font = loadFont('Roboto-Regular.ttf');
}

function setup() {
  strokeWeight(1);
  stroke("black");
  createCanvas(windowWidth, windowHeight);
  textFont(heading);
  background(171, 205, 212);
  slider = createSlider(0, 100, 1);
  slider.position(100, 120);
  slider.size(200);
  slider.addClass("mySliders");
  getColors1(9);
  getColors2(9);
  fill(255, 255, 255);
  rect(30, 200, windowWidth - 100, windowHeight - 330);
}

function draw() {
  cursor('pen.png', 15, 15);
  strokeWeight(1);
  stroke("black");
  drawColors1(colornames1.length);
  drawColors2(colornames1.length);
  fill("black");
  textAlign(CENTER);
  textSize(30);
  text("P5 PAINT", width/2, 50); 
  let button = createButton('clear canvas');
  button.position(width/2, height - 100);
  
  // Call repaint() when the button is pressed.
  button.mousePressed(repaint);
  
  let w = slider.value();
  strokeWeight(w);
  stroke(penColor);
  if ((mouseIsPressed === true) && (mouseX > 50) && (mouseX < windowWidth - 100) && (mouseY > 200) && (mouseY < windowHeight - 150)) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  let x = Math.floor((mouseX - (width/2)) / 30);
  let y = mouseY;
  if (mouseIsPressed && ((x >= 0) && (x < 9)) &&
      ((y >= 100) && (y < 150))) {
    if (y < 130) {
      penColor = (colorrow1[x].name);
    } else {
      penColor = (colorrow2[x].name);
    }
  }
}

function repaint() {
  clear();
  setup();
}

function getColors1(n) {
  for (let i = 0; i < n; i++) {
    let c = new Color(colornames1[i], (width / 2) + 30 * i, 100)
    colorrow1.push(c);
  }
}

function getColors2(n) {
  for (let i = 0; i < n; i++) {
    let c = new Color(colornames2[i], (width / 2) + 30 * i, 130)
    colorrow2.push(c);
  }
}

function drawColors1(n) {
  for (let i = 0; i < n; i++) {
    c = colorrow1[i];
    fill(c.name);
    rect(c.x, c.y, 20, 20);
  }
}

function drawColors2(n) {
  for (let i = 0; i < n; i++) {
    c = colorrow2[i];
    fill(c.name);
    rect(c.x, c.y, 20, 20);
  }
}

class Color {
  constructor(name, xpos, ypos) {
    this.x = xpos;
    this.y = ypos;
    this.name = name;
  }
}