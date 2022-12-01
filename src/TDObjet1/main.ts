// class Point {
//   x: number;
//   y: number;
// }

class Rectangle {
  coin: Point = new Point();
  largeur: number;
  longueur: number;
}

let rect = new Rectangle();
rect.largeur = 20;
rect.longueur = 30;
rect.coin.x = 0;
rect.coin.y = 0;

function calculCentre(rect: Rectangle): Point {
  let p = new Point();

  p.x = rect.coin.x + rect.longueur / 2;
  p.y = rect.coin.y + rect.largeur / 2;

  return p;
}

let centre = calculCentre(rect);

// exo 1

class Cercle {
  centre: Point = new Point();
  rayon: number;
}

let circle = new Cercle();
circle.centre.x = 150;
circle.centre.y = 100;
circle.rayon = 75;

// exo 2

function pointDansCercle(cercle: Cercle, point: Point): boolean {
  let x = point.x - cercle.centre.x;
  let y = point.y - cercle.centre.y;
  let r = cercle.rayon;

  if (x ** 2 + y ** 2 <= r ** 2) {
    return true;
  } else {
    return false;
  }
}

let pt = new Point();
pt.x = 230;
pt.y = 30;
// console.log(pointDansCercle(circle, pt));

// exo 3

function isRectangleDansCercle(cercle: Cercle, rectangle: Rectangle): boolean {
  let x0y0 = new Point();
  x0y0.x = rectangle.coin.x;
  x0y0.y = rectangle.coin.y;
  let x1y1 = new Point();
  x1y1.x = x0y0.x + rectangle.longueur;
  x1y1.y = x0y0.y;
  let x2y2 = new Point();
  x2y2.x = x1y1.x;
  x2y2.y = x0y0.y + rectangle.largeur;
  let x3y3 = new Point();
  x3y3.x = x0y0.x;
  x3y3.y = x2y2.y;
  let arrayCoordinates = [x0y0, x1y1, x2y2, x3y3];
  let check = true;
  for (let i = 0; i < arrayCoordinates.length; i++) {
    if (check) {
      check = pointDansCercle(cercle, arrayCoordinates[i]);
    }
  }
  return check;
}

let circle2 = new Cercle();
circle2.centre.x = 50;
circle2.centre.y = 100;
circle2.rayon = 75;

let rect2 = new Rectangle();
rect2.coin.x = 153;
rect2.coin.y = 100;
rect2.largeur = 200;
rect2.longueur = 500;

// console.log(isRectangleDansCercle(circle2, rect2));

// exo 4

function chevauchement(cercle: Cercle, rectangle: Rectangle): boolean {
  let x0y0 = new Point();
  x0y0.x = rectangle.coin.x;
  x0y0.y = rectangle.coin.y;
  let x1y1 = new Point();
  x1y1.x = x0y0.x + rectangle.longueur;
  x1y1.y = x0y0.y;
  let x2y2 = new Point();
  x2y2.x = x1y1.x;
  x2y2.y = x0y0.y + rectangle.largeur;
  let x3y3 = new Point();
  x3y3.x = x0y0.x;
  x3y3.y = x2y2.y;
  let arrayCoordinates = [x0y0, x1y1, x2y2, x3y3];
  for (let i = 0; i < arrayCoordinates.length; i++) {
    if (pointDansCercle(cercle, arrayCoordinates[i])) {
      return true;
    } else {
      continue;
    }
  }
  return false;
}

// console.log(circle2, rect2, chevauchement(circle2, rect2));

// exo 5

// 1

class Temps {
  heure: number;
  minute: number;
  second: number;
}

function temps2Number(temps: Temps): number {
  let seconds = temps.second;
  let minutesInSeconds = temps.minute * 60;
  let hoursInSeconds = temps.heure * 3600;

  return seconds + minutesInSeconds + hoursInSeconds;
}

let time1 = new Temps();
time1.heure = 2;
t;
// console.log(temps2Number(time1));

// 2

function number2Temps(seconds: number): Temps {
  let time = new Temps();
  time.heure = Math.floor(seconds / 3600);
  time.minute = Math.floor((seconds % 3600) / 60);
  time.second = seconds % 60;

  return time;
}

console.log(number2Temps(10465));

// 3

function multiplieTemps(time: Temps, factor: number): Temps {
  let factorizedTimeInSeconds = factor * temps2Number(time);
  let convertToRealTime = number2Temps(factorizedTimeInSeconds);

  return convertToRealTime;
}

console.log(multiplieTemps(time1, 2));

// 4

function vitesseMoyenneCourse(tempsCourse: Temps, distanceCourse: number): number {
  let tempsEnSecondes = temps2Number(tempsCourse);
  let vitesseMoyenne = distanceCourse / (tempsEnSecondes / 3600);

  return vitesseMoyenne;
}

console.log(vitesseMoyenneCourse(time1, 50));
