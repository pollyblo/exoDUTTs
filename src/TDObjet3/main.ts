class Rectangle {
  private _largeur: number;
  private _longueur: number;

  constructor(largeur: number, longueur: number) {
    this._largeur = largeur;
    this._longueur = longueur;
  }

  surface(): number {
    return this._largeur * this._longueur;
  }

  get longueur(): number {
    return this._longueur;
  }

  get largeur(): number {
    return this._largeur;
  }

  set largeur(largeur: number) {
    this.largeur = largeur;
  }

  set longueur(longueur: number) {
    this._longueur = longueur;
  }
}
class Circle {
  // abscisse du centre
  private _x: number;
  // ordonnée du centre
  private _y: number;
  private _rayon: number;

  constructor(x: number, y: number, rayon: number) {
    this._x = x;
    this._y = y;
    this._rayon = rayon;
  }

  affiche(): void {
    console.log("centre = (" + this._x + ", " + this._y + ")");
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  get rayon(): number {
    return this._rayon;
  }

  set rayon(rayon: number) {
    this._rayon = rayon;
  }

  fixeCentre(x: number, y: number): void {
    this._x = x;
    this._y = y;
  }

  surface(): number {
    return Math.PI * this._rayon * this._rayon;
  }

  estIntérieur(x: number, y: number): boolean {
    return (
      (x - this._x) * (x - this._x) + (y - this._y) * (y - this._y) <= this._rayon * this._rayon
    );
  }
}

class RectangleColore extends Rectangle {
  private couleur: number;

  constructor(largeur);
}
