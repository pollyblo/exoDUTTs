// exo 1

import { cp } from "fs";

class Caractere {
  carac: string;

  constructor(inputCarac = " ") {
    this.carac = inputCarac;
  }

  estVoyelle(): boolean {
    if (
      this.carac === "a" ||
      this.carac === "e" ||
      this.carac === "i" ||
      this.carac === "o" ||
      this.carac === "u" ||
      this.carac === "y"
    ) {
      return true;
    } else {
      return false;
    }
  }
}

function howManyVowels(chaine: string): number {
  let newChaine = "";
  let vowelsCounter = 0;
  for (let i = 0; i < chaine.length; i++) {
    newChaine += chaine[i];
    let indexedCaracter = new Caractere(chaine[i]);
    if (indexedCaracter.estVoyelle()) {
      vowelsCounter++;
    } else {
      continue;
    }
  }
  console.log(newChaine);
  return vowelsCounter;
}

let string = "Bonjour, hier j'ai...";
// console.log(howManyVowels(string));

// exo 2

class Rectangles {
  longueur: number;
  largeur: number;

  constructor(longueur = 1, largeur = 1) {
    this.longueur = longueur;
    this.largeur = largeur;
  }

  perimetre(): number {
    return (this.longueur + this.largeur) * 2;
  }

  surface(): number {
    return this.longueur * this.largeur;
  }

  agrandir(factor: number): Rectangles {
    this.longueur *= factor;
    this.largeur *= factor;
    return this;
  }
}

let rect3 = new Rectangles(8, 10);
// console.log(rect3.agrandir(2).surface());

// exo 3

class Reservoir {
  capacite: number;
  quantite: 0;

  constructor(capacite = 0) {
    this.capacite = capacite;
    this.quantite = 0;
  }

  verse(addedQuantite: number): number {
    let leftQuantite = 0;
    this.quantite += addedQuantite;
    if (this.quantite > this.capacite) {
      leftQuantite = this.quantite - this.capacite;
      this.quantite -= leftQuantite;
    }
    return leftQuantite;
  }

  puise(subQuantite: number): number {
    let pastQuantite = this.quantite;
    this.quantite -= subQuantite;
    if (this.quantite < 0) {
      this.quantite = 0;
      return pastQuantite;
    } else {
      return subQuantite;
    }
  }

  jauge(): number {
    return this.quantite;
  }
}

function actionKillsMana(distanceWalked: number): number {
  let barreMana = new Reservoir(10);
  barreMana.verse(10);
  for (let i = 0; i < distanceWalked; i++) {
    barreMana.verse(1);
    barreMana.puise(3);
    if (barreMana.jauge() === 3) {
      console.log("Vous êtes en manque de mana");
    } else if (barreMana.jauge() === 0) {
      console.log("Plus de mana...");
    }
  }
  return barreMana.quantite;
}

// exo 4

class Point {
  private abs_ = 0;
  private ord_ = 0;

  constructor(abs = 0, ord = 0) {
    this.abs_ = abs;
    this.ord_ = ord;
  }

  get abs(): number {
    return this.abs_;
  }

  set abs(valeur) {
    this.abs_ = valeur;
  }

  get ord(): number {
    return this.ord_;
  }

  set ord(valeur) {
    this.ord_ = valeur;
  }

  toString(): string {
    return "(" + this.abs_ + ", " + this.ord_ + ")";
  }

  déplace(dabs: number, dord: number): void {
    this.abs_ += dabs;
    this.ord_ += dord;
  }

  static sontMemeCoordonnees(point1: Point, point2: Point): boolean {
    if (point1.abs_ === point2.abs_ && point1.ord_ === point2.ord_) {
      return true;
    } else {
      return false;
    }
  }

  static sommeDesPoints(point1: Point, point2: Point): Point {
    let sommeDesPointsX = point1.abs_ + point2.abs_;
    let sommeDesPointsY = point1.ord_ + point2.ord_;
    let nouveauPoint = new Point(sommeDesPointsX, sommeDesPointsY);
    return nouveauPoint;
  }

  // static sommd;
}

let point1 = new Point(2, 5);
let point2 = new Point(1, 2);
let point3 = Point.sommeDesPoints(point1, point2);
console.log(point1, point2, point3);

// exo 5
class Segment {
  private point1_: Point;
  private point2_: Point;

  constructor(x1 = 0, y1 = 0, x2 = 0, y2 = 0) {
    this.point1_ = new Point(x1, y1);
    this.point2_ = new Point(x2, y2);
  }

  inverseEdges(): void {
    let storePoint = this.point1_;
    this.point1_ = this.point2_;
    this.point2_ = storePoint;
  }

  get getX1(): number {
    return this.point1_.abs;
  }

  get getY1(): number {
    return this.point1_.ord;
  }

  get getX2(): number {
    return this.point2_.abs;
  }

  get getY2(): number {
    return this.point2_.ord;
  }

  get getExt1(): Point {
    return this.point1_;
  }

  get getExt2(): Point {
    return this.point2_;
  }

  static lengthSeg(seg: Segment): number {
    seg.
  }
}

let seg1 = new Segment(1, 2, 3, 4);
let x1Seg1 = seg1.getX1;

console.log(x1Seg1);
