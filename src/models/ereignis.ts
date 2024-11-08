export class Ereignis {

    datum: string;
    ueberschrift: string;
    bulletpoints: string[];
  
    constructor(datum: string, ueberschrift: string, bulletpoints: string[]) {
      this.datum = datum;
      this.ueberschrift = ueberschrift;
      this.bulletpoints = bulletpoints;
    }
}