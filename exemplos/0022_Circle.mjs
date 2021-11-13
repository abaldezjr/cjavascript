//import {PI as pi, pow} from './0022_Math.mjs';
import * as math from './0022_Math.mjs';

export default class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get area() {
        return math.PI * math.pow(this.radius, 2);
    }
}
