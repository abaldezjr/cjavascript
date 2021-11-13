//CLASSES

// //exemplo 1
// class Square { }
// console.log(Square);
// console.log(typeof Square);
// console.log(Square instanceof Object);

// //exemplo 2
// const Square2 = class { }
// console.log(Square2);
// console.log(typeof Square2);
// console.log(Square2 instanceof Object);

// //exemplo 3
// class Square { }
// const square = new Square();
// console.log(square);
// console.log(typeof square);
// console.log(square instanceof Object);

// //exemplo 4 não sofrem hoisting
// const square = new Square();
// class Square { }

// const square2 = new Square2();
// const Square2 = class{ }

//exemplo 5
//prototype methods
// class Square {

//     constructor(side) {
//         this.side = side;
//     }

//     calculateArea(){
//         return Math.pow(this.side, 2);
//     }

//     toString() {
//         return `side: ${this.side} area: ${this.calculateArea()}`;
//     }
// }
// const square = new Square(10);
// console.log(square);
// console.log(square.toString());
// console.log(square.calculateArea());

// //exemplo 6
// //static methods
// class Square {

//     constructor(side) {
//         this.side = side;
//     }

//     calculateArea(){
//         return Math.pow(this.side, 2);
//     }

//     static fromArea(area){
//         return new Square(Math.sqrt(area));
//     }

//     toString() {
//         return `side: ${this.side} area: ${this.calculateArea()}`;
//     }
// }
// const square = new Square(10);
// console.log(square);
// console.log(square.toString());
// console.log(Square.fromArea(16));

// //exemplo 7
// function Square(side) {
//     this.side = side;
// }

// Square.prototype.calculateArea = function () {
//     return Math.pow(this.side, 2);
// }

// Square.prototype.toString = function () {
//     return `side: ${this.side} area: ${this.calculateArea()}`;
// }

// Square.fromArea = function (area) {
//     return new Square(Math.sqrt(area));
// }

// const square = new Square(10);
// console.log(square);
// console.log(square.toString());
// console.log(Square.fromArea(16));

//exemplo 8
class Shape {
    constructor(){

    }

    toString(){
        return `area: ${this.calculateArea()}`;
    }
}

class Square extends Shape {

    constructor(side) {
        super();
        this.side = side;
    }

    calculateArea(){
        return Math.pow(this.side, 2);
    }

    static fromArea(area){
        return new Square(Math.sqrt(area));
    }

    toString() {
        return `side: ${this.side} area: ${super.toString()}`;
    }
}
const square = new Square(10);
console.log(square);
console.log(square.toString());
console.log(Square.fromArea(16));

class Circle extends Shape {
    constructor(radius){
        super();
        this.radius = radius;
    }
    calculateArea(){
        return Math.PI * Math.pow(this.radius, 2);
    }

    toString(){
        return `radius: ${this.radius} ${super.toString()}`;
    }

    static fromArea(area){
        return new Circle(Math.sqrt(area / Math.PI));
    }
}

const circle = new Circle(10);
console.log(circle);
console.log(circle.calculateArea());
console.log(circle.toString());
console.log(Circle.fromArea(314.1592653589793));