export class Vector2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;

    return this;
  }

  subtract(vector) {
    this.x -= vector.x;
    this.y -= vector.y;

    return this;
  }

  multiply(scalar) {
    this.x *= scalar;
    this.y *= scalar;

    return this;
  }

  clone() {
    return new Vector2(this.x, this.y);
  }
}
