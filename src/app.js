import * as PIXI from "pixi.js";

export class App {
  constructor(canvas) {
    this.app = new PIXI.Application({
      view: canvas,
      width: 1000,
      height: 1000,
      backgroundColor: 0x2c3e50,
    });
  }
}
