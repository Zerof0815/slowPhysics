import { Vector2 } from "./math/Vector2.js";

export class World {
  constructor() {
    this.bodies = [];
    this.gravity = new Vector2(0, 500);
  }

  addBody(body) {
    this.bodies.push(body);
  }

  update(deltaTime) {
    for (const body of this.bodies) {
      body.applyForce(this.gravity.clone().multiply(body.mass));

      body.update(deltaTime);
    }
  }

  draw(ctx) {
    for (const body of this.bodies) {
      body.draw(ctx);
    }
  }
}
