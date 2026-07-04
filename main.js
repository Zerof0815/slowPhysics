import { Engine } from "./src/Engine.js";
import { Vector2 } from "./src/math/Vector2.js";

const canvas = document.getElementById("canvas");

const position = new Vector2(10, 20);
const velocity = new Vector2(5, 0);

position.add(velocity);

const engine = new Engine(canvas);

engine.start();
