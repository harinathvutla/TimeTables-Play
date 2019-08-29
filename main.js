let circle1 = new Circle(300, 300, 500);
//let point1 = new Points(200, 300, 300);
let point1 = new Points(200, 300, 300);
let line1 = new Multiplierline();
//let level = 0;

let multiple = 0;
let flagLoop = 0;
var hues = 0;
function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvas");
}

let numPoint = document.querySelector(".numpoints");
let mul = document.querySelector(".multiplier");

numPoint.onchange = generatePattern;
mul.onchange = generatePattern;

let generateButton = document.querySelector(".generate");
generateButton.onclick = generatePattern;

function generatePattern() {
  console.log("clicked");

  multiple = Number(mul.value);
  point1 = new Points(numPoint.value, 300, 300);
  console.log(numPoint.value, mul.value);
}

let minMul = document.querySelector(".Min-multiplier");
let maxMul = document.querySelector(".Max-multiplier");
let stepSize = document.querySelector(".step-size");
let speed = document.querySelector(".speed");
let speedAry = [, 120, 60, 30, 20, 10];
let flagstopResume = false;

let StrtPtrnPlay = document.querySelector(".strtPtrnPlay");
StrtPtrnPlay.onclick = function StartPatternPlay() {
  multiple = Number(minMul.value);
  flagLoop = 1;
};

let stopResume = document.querySelector(".stop-resume");
stopResume.onclick = function StopResumePlay() {
  flagstopResume = !flagstopResume;
};

function draw() {
  /*  if (level === 0) {
    
    
    if (keyCode === 32) level += 1;
  
  } else */ {
    clear();
    background("Black");
    textSize(40);
    text(Number(multiple.toFixed(1)), 490, 50);
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

    line1.drawLines(multiple);

    if (
      frameCount % speedAry[speed.value] === 0 &&
      flagLoop === 1 &&
      flagstopResume === false
    ) {
      multiple += Number(stepSize.value);
      if (multiple >= Number(maxMul.value)) {
        flagLoop = 0;
      }
      console.log("multiple: " + multiple);
    }
  }
}
