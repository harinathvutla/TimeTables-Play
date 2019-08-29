class Circle {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
  }
  drawCircle() {
    stroke("black");
    circle(this.x, this.y, this.d);
  }
}

class Points {
  constructor(numPnts, centerX, centerY) {
    this.numPnts = numPnts;
    this.centerX = centerX;
    this.centerY = centerY;
  }
  drawPoints() {
    this.pointsAry = [];
    let x = 0,
      y = 0,
      step = (Math.PI * 2) / this.numPnts,
      angle = 0;
    //  console.log(step);

    this.radius = circle1.d / 2;

    for (let i = 0; i < this.numPnts; i++) {
      x = this.centerX - Math.cos(angle) * this.radius;
      y = this.centerY - Math.sin(angle) * this.radius;

      //stroke("red");
      fill("red");
      point(x, y);
      circle(x, y, 5);
      noFill();
      // this.pointsAry.push({ pointXY: [x, y], pointNumber: i });
      this.pointsAry.push([x, y]);
      angle += step;
    }
    // console.log(pointsAry);
  }
}

class Multiplierline {
  /*   constructor(multiple) {
    this.multiple = multiple;
  } */
  drawLines(multiple) {
    for (let i = 0; i < point1.numPnts; i++) {
      let mulPoint = i * multiple;
      mulPoint = Math.round(mulPoint);

      if (mulPoint >= point1.numPnts) {
        mulPoint = mulPoint % point1.numPnts;
      }

      //  console.log(i, mulPoint);

      line(
        point1.pointsAry[i][0],
        point1.pointsAry[i][1],
        point1.pointsAry[mulPoint][0],
        point1.pointsAry[mulPoint][1]
      );
    }
  }
}
