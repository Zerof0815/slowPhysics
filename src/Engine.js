import { Time } from "./Time.js";
import { World } from "./World.js";
import { Circle } from "./physics/Circle.js";

export class Engine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.resize();
    window.addEventListener("resize", () => this.resize());

    this.time = new Time();

    this.world = new World();

    const circleA = new Circle(200, 100, 30);
    circleA.velocity.x = 100;

    const circleB = new Circle(350, 50, 20);
    circleB.velocity.x = -50;

    const circleC = new Circle(500, 150, 40);
    circleC.velocity.x = 25;

    this.world.addBody(circleA);
    this.world.addBody(circleB);
    this.world.addBody(circleC);
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  start() {
    requestAnimationFrame(this.loop.bind(this));
  }

  loop(currentTime) {
    const timeData = this.time.update(currentTime);

    if (timeData.shouldUpdatePhysics) {
      this.update(this.time.fixedDeltaTime);
      this.time.consumeFixedStep();
    }

    this.render();

    requestAnimationFrame(this.loop.bind(this));
  }

  update(deltaTime) {
    this.world.step(deltaTime, {
      width: this.canvas.width,
      height: this.canvas.height,
    });
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.world.draw(this.ctx);
  }
}
