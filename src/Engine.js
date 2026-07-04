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

    const circle = new Circle(200, 100, 30);
    circle.velocity.x = 100;

    this.world.addBody(circle);
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
    this.world.update(deltaTime);
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.world.draw(this.ctx);
  }
}
