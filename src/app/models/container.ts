import { Ereignis } from "./ereignis";

export class Container {
    title: string;
    ereignisse : Ereignis[];

    constructor(title: string, ereignisse: Ereignis[]) {
        this.title = title;
        this.ereignisse = ereignisse;
      }
}