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
      console.log("Vous ??tes en manque de mana");
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

  d??place(dabs: number, dord: number): void {
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
// console.log(point1, point2, point3);

// exo 5
class Segment {
  private point1_: Point;
  private point2_: Point;

  constructor(x1 = 0, y1 = 0, x2 = 0, y2 = 0) {
    this.point1_ = new Point(x1, y1);
    this.point2_ = new Point(x2, y2);
  }

  get x1(): number {
    return this.point1_.abs;
  }

  get y1(): number {
    return this.point1_.ord;
  }

  get x2(): number {
    return this.point2_.abs;
  }

  get y2(): number {
    return this.point2_.ord;
  }

  get ext1(): Point {
    return this.point1_;
  }

  get ext2(): Point {
    return this.point2_;
  }

  inverseEdges(): void {
    let storedPoint = this.point1_;
    this.point1_ = this.point2_;
    this.point2_ = storedPoint;
  }

  lengthSegment(): number {
    return Math.sqrt((this.x2 - this.x1) ** 2 + (this.y2 - this.y1) ** 2);
  }

  cloneDeep(): Segment {
    return new Segment(this.x1, this.y1, this.x2, this.y2);
  }

  isEqual(s: Segment): boolean {
    return s.x1 === this.x1 && s.y1 === this.y1 && s.x2 === this.x2 && s.y2 === this.y2;
  }
}

// exo 6

class ??l??ve {
  private nom_: string;
  private pr??nom_: string;
  private ??ge_: number;

  public constructor(nom: string, pr??nom: string, ??ge: number) {
    this.nom_ = nom;
    this.pr??nom_ = pr??nom;
    this.??ge_ = ??ge;
  }
  // D??finir ici les m??thodes d'acc??s et d'alt??ration
  get nom(): string {
    return this.nom_;
  }

  get pr??nom(): string {
    return this.pr??nom_;
  }

  get ??ge(): number {
    return this.??ge_;
  }

  set nom(chaine) {
    this.nom_ = chaine;
  }

  set pr??nom(chaine) {
    this.pr??nom_ = chaine;
  }

  set ??ge(valeur) {
    this.??ge_ = valeur;
  }

  // D??finir une m??thode d'affichage
  // La m??thode doit afficher :
  // Nom : le nom Pr??nom : le pr??nom Age : l'age

  displayEleve(): void {
    console.log("Nom :", this.nom, "Pr??nom :", this.pr??nom, "??ge :", this.??ge);
  }

  existe(nom: string, pr??nom: string): boolean {
    return this.nom === nom && this.pr??nom === pr??nom;
  }
}

class Classe {
  private nombreMaximum??l??ves_: number;
  private ??l??ves_: ??l??ve[];

  // Constructeur : On suppose qu'au d??part la classe est vide
  constructor(nombreMaximum??l??ves: number) {
    this.nombreMaximum??l??ves_ = nombreMaximum??l??ves;
    this.??l??ves_ = [];
  }

  // M??thodes pour acc??der aux informations sur la classe
  get tailleMaximum(): number {
    return this.nombreMaximum??l??ves_;
  } // retourne le nombre maximum d'??l??ves

  get tailleCourante(): number {
    return this.??l??ves_.length;
  } // retourne le nombre d'??l??ves actuellement

  get pleine(): boolean {
    return this.tailleCourante === this.tailleMaximum;
  } // indique si la classe est pleine ou non

  // m??thodes pour ajouter un ??l??ve
  // Si la classe est pleine, la m??thode ne doit rien faire et renvoyer false
  // sinon l'??l??ve est ajouter et on retourne true
  ajout(nom: string, pr??nom: string, ??ge: number): boolean {
    if (this.pleine || this.dansClasse(nom, pr??nom)) {
      return false;
    } else {
      this.??l??ves_.push(new ??l??ve(nom, pr??nom, ??ge));
      return true;
    }
  }

  // M??thodes sur les ??l??ves
  dansClasse(nom: string, pr??nom: string): number {
    for (let i = 0; i < this.tailleCourante; i++) {
      if (this.??l??ves_[i].existe(nom, pr??nom)) {
        return i;
      }
    }
    return -1;
  }

  ??l??ve(nom: string, pr??nom: string): ??l??ve | undefined {
    let eleveExiste = this.dansClasse(nom, pr??nom);
    if (eleveExiste != -1) {
      return this.??l??ves_[eleveExiste];
    } else {
      return undefined;
    }
  }

  affiche(): void {
    for (const key of this.??l??ves_) {
      key.displayEleve();
    }
  }
}

let eleve1 = new ??l??ve("Collet", "Ugo", 22);
let classe1 = new Classe(20);
classe1.ajout(eleve1.nom, eleve1.pr??nom, eleve1.??ge);
console.log(classe1, classe1.dansClasse("Collet", "Ugo"));

let array = [1, 2];
