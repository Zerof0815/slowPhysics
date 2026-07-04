export class Time {
  constructor() {
    this.fixedDeltaTime = 1 / 60;

    this.accumulator = 0;

    this.lastTime = 0;
  }

  update(currentTime) {
    const deltaTime = (currentTime - this.lastTime) / 1000;
    this.lastTime = currentTime;

    this.accumulator += deltaTime;

    return {
      deltaTime,
      shouldUpdatePhysics: this.accumulator >= this.fixedDeltaTime,
    };
  }

  consumeFixedStep() {
    this.accumulator -= this.fixedDeltaTime;
  }
}
