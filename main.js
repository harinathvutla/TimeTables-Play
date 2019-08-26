let circle1 = new Circle(300, 300, 500);
let point1 = new Points(300, 300, 300);
let line1 = new Multiplierline();

let multiple = 2;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvas");
}

function draw() {
  clear();
  // background("White");
  circle1.drawCircle();
  point1.drawPoints();
  colorMode(HSB);
  strokeWeight(1);
  let flag = 0;
  /* if(flag===0)
  {
    let hue = 0;
    hue+=10;
  } */

  if (frameCount % 120 === 0) hue = hue + 10;
  stroke(hue, 204, 100);
  line1.drawLines(multiple);
  if (frameCount % 12 === 0) {
    multiple += 0.1;
    console.log("multiple: " + multiple);
  }
}
