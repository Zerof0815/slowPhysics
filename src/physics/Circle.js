import { Body } from "./Body.js";

export class Circle extends Body {
  constructor(x, y, radius) {
    super(x, y);

    this.radius = radius;
  }

  draw(ctx) {
    ctx.beginPath();

    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);

    ctx.fillStyle = "#4CAF50";
    ctx.fill();
  }
}
