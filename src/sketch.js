let clownScale = 1.5;
let clownChan = 0;

let lemonPosX = 100;
let lemonChan = 0;

function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);
  drawBackground(0, 0, 1, color(255, 255, 255, 0));
  drawClown(300, 300, clownScale);
  drawMiles(100, 400, 0, 0.5);
  drawLemon(
    lemonPosX,
    300,
    0.5,
    color(246, 232, 52),
    color(226, 212, 30),
    color(65, 65, 65),
    color(249, 249, 249),
    color(18, 18, 18)
  );

  clownScale = clownScale - clownChan;

  lemonPosX = lemonPosX - lemonChan;

  if (clownScale <= 0.5) {
    clownChan = 0;
  }

  if (lemonPosX <= -100) {
    lemonChan = 0;
  }
}

function drawClown(x, y, s) {
  push();
  translate(x, y);
  scale(s);

  //hair
  fill(255, 150, 0);
  ellipse(-15, -20, 50, 35);
  ellipse(15, -20, 50, 35);

  //head
  fill(250);
  ellipse(0, 0, 60);

  //eyes
  fill(0, 255, 0);
  ellipse(-15, -5, 15, 20);
  ellipse(15, -5, 15, 20);
  fill(0);
  ellipse(-15, -5, 5);
  ellipse(15, -5, 5);

  //nose
  fill(255, 0, 0);
  ellipse(0, 0, 20);

  //legs
  fill(50);
  rect(-25, 115, 25, 85, 20);
  rect(0, 115, 25, 85, 20);
  fill(30);
  arc(-12.5, 200, 25, 25, PI, 0);
  arc(12.5, 200, 25, 25, PI, 0);

  //body
  fill(245);
  rect(-30, 30, 60, 90, 20);

  //jacket
  fill(50);
  rect(-30, 30, 20, 90, 10);
  rect(10, 30, 20, 90, 10);

  //bow
  fill(220, 0, 0);
  ellipse(0, 40, 10);
  triangle(-5, 40, -15, 33, -15, 47);
  triangle(5, 40, 15, 33, 15, 47);

  //arms
  fill(50);
  rect(-50, 33, 20, 70, 20);
  rect(30, 33, 20, 70, 20);
  fill(241, 213, 160);
  ellipse(-40, 105, 20);
  ellipse(40, 105, 20);

  pop();
}

function drawLemon(x, y, s, head, nose, body, whi, bl) {
  push();
  noStroke();
  translate(x, y);
  scale(s);

  //head
  fill(head);
  ellipse(0, 10, 205, 325);
  arc(0, -150, 50, 50, (5 * PI) / 6, PI / 6);

  //eyes
  fill(whi);
  ellipse(-35, -37.5, 50, 75);
  ellipse(50, -37.5, 50, 75);
  fill(bl);
  ellipse(-30, -37.5, 20, 45);
  ellipse(55, -37.5, 20, 45);

  //nose
  fill(nose);
  triangle(0, 0, 150, 50, 0, 25);

  //mouth
  fill(bl);
  rect(-25, 50, 75, 75, 15);

  fill(whi);

  //upper teeth
  arc(-2.5, 50, 15, 50, 0, PI);
  arc(12.5, 50, 15, 50, 0, PI);
  arc(27.5, 50, 15, 50, 0, PI);

  //lower teeth
  arc(-2.5, 125, 15, 50, PI, 0);
  arc(12.5, 125, 15, 50, PI, 0);
  arc(27.5, 125, 15, 50, PI, 0);

  //body
  fill(body);
  rect(-82.5, 140, 175, 40, 20);
  rect(-82.5, 160, 175, 40);
  pop();
}

function drawBackground(x, y, s, tr) {
  push();
  noStroke();
  translate(x, y);
  scale(s);

  //sky
  fill(122, 238, 240);
  rect(0, 0, 400, 400);

  //mountains
  fill(43, 140, 18);
  triangle(200, 400, 310, 200, 400, 400);
  fill(62, 189, 30);
  triangle(0, 400, 100, 100, 200, 400);

  //semi-transparent rectangle
  fill(tr);
  rect(0, 0, 400, 400);
  pop();
}

function drawMiles(x, y, r, s) {
  push();
  translate(x, y);
  scale(s);
  rotate(r);

  //draw head
  fill(0);
  noStroke();
  ellipse(0, -155, 60, 75);
  //eye ring
  fill(255, 0, 0);
  ellipse(-15, -160, 22, 17);
  ellipse(15, -160, 22, 17);
  //eyes
  fill(255);
  ellipse(-15, -160, 18, 13);
  ellipse(15, -160, 18, 13);

  //arms
  fill(0);
  ellipse(-40, -105, 50, 15);
  ellipse(40, -105, 50, 15);
  //hands
  ellipse(-60, -105, 15, 15);
  ellipse(60, -105, 15, 15);

  //body miles
  fill(0);
  ellipse(0, -80, 50, 75);
  //spider logo
  stroke(255, 0, 0);
  fill(255, 0, 0);
  ellipse(0, -95, 10, 15);
  //top
  line(-15, -105, 0, -100);
  line(15, -105, 0, -100);
  //top-middle
  line(-15, -100, 0, -100);
  line(15, -100, 0, -100);
  //bottom
  line(-15, -95, 0, -95);
  line(15, -95, 0, -95);
  //bottom-middle
  line(-15, -90, 0, -95);
  line(15, -90, 0, -95);

  noStroke();
  //feet
  fill(0);
  ellipse(-15, -5, 20, 10);
  ellipse(15, -5, 20, 10);
  //legs
  ellipse(-10, -30, 20, 50);
  ellipse(10, -30, 20, 50);

  // show origin
  fill(0, 255, 255);
  ellipse(0, 0, 10, 10);
  stroke(255, 255, 0);
  line(-100, 0, 100, 0);
  stroke(0, 0, 255);
  line(0, 100, 0, -100);
  pop();
}

function mouseClicked() {
  clownChan = 0.05;
  lemonChan = 9;
}
