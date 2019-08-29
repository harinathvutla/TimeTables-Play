let circle1 = new Circle(300, 300, 500);
//let point1 = new Points(200, 300, 300);
let point1 = new Points(100, 300, 300);
let line1 = new Multiplierline();
//let level = 0;

let multiple = 2;
let flag = 0;
var hues = 0;
function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvas");
}
let generateButton = document.querySelector(".generate");
generateButton.onclick = generatePattern;

function generatePattern() {
  console.log("clicked");
  let numPoint = document.querySelector(".numpoints").value;
  let mul = document.querySelector(".multiplier").value;
  multiple = mul;
  point1 = new Points(numPoint, 300, 300);
  console.log(numPoint, mul);
}

function draw() {
  /*  if (level === 0) {
    
    
    if (keyCode === 32) level += 1;
  
  } else */ {
    clear();
    background("Black");
    circle1.drawCircle();
    point1.drawPoints();
    colorMode(HSB);
    strokeWeight(1);
    stroke(hues, 100, 100);
    if (frameCount % 120 === 0) hues = hues + 30;
    if (hues === 360) {
      hues = 0;
    }

    console.log("hue: " + hues);
    // line1.drawLines(multiple);
    line1.drawLines(multiple);
    /*   if (frameCount % 120 === 0) {
      multiple += 1;
      console.log("multiple: " + multiple);
    } */
  }
}
