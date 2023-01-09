//#region exo 2 UML to TS

class Timer {
  private _periode: number;
  private _etat: boolean;

  constructor(periode: number, etat: boolean) {
    this._periode = periode;
    this._etat = etat;
  }

  get periode(): number {
    return this._periode;
  }

  set periode(periode: number) {
    let num = Number(periode);

    if (!Number.isFinite(num)) {
      this._periode = 0;
      return;
    }

    this._periode = num;
  }

  start(): void {
    return;
  }

  stop(): void {
    return;
  }

  use(): void {
    return;
  }

  toString(): string {
    return "";
  }
}
