import { Vector2 } from "./math/Vector2.js";

export class World {
  constructor() {
    this.bodies = [];
    this.gravity = new Vector2(0, 500);
  }

  addBody(body) {
    this.bodies.push(body);
  }

  step(deltaTime, bounds) {
    for (const body of this.bodies) {
      body.applyForce(this.gravity.clone().multiply(body.mass));

      body.integrate(deltaTime);

      if (body.position.y + body.radius > bounds.height) {
        body.position.y = bounds.height - body.radius;
        body.velocity.y *= -body.restitution;
      }

      if (body.position.x - body.radius < 0) {
        body.position.x = body.radius;
        body.velocity.x *= -body.restitution;
      }

      if (body.position.x + body.radius > bounds.width) {
        body.position.x = bounds.width - body.radius;
        body.velocity.x *= -body.restitution;
      }

      if (body.position.y - body.radius < 0) {
        body.position.y = body.radius;
        body.velocity.y *= -body.restitution;
      }

      body.clearForces();
    }
  }

  draw(ctx) {
    for (const body of this.bodies) {
      body.draw(ctx);
    }
  }
}
