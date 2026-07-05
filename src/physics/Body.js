import { Vector2 } from "../math/Vector2.js";

export class Body {
  constructor(x, y) {
    this.position = new Vector2(x, y);
    this.velocity = new Vector2();
    this.acceleration = new Vector2();
    this.force = new Vector2();
    this.mass = 1;
    this.restitution = 0.7;
  }

  applyForce(force) {
    this.force.add(force);
  }

  integrate(deltaTime) {
    this.acceleration.add(this.force.clone().multiply(1 / this.mass));

    this.velocity.add(this.acceleration.clone().multiply(deltaTime));

    this.position.add(this.velocity.clone().multiply(deltaTime));
  }

  clearForces() {
    this.force.x = 0;
    this.force.y = 0;

    this.acceleration.x = 0;
    this.acceleration.y = 0;
  }
}
