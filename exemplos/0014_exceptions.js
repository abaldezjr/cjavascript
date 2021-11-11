//EXCEPTIONS

//exemplo 1
// const Rectangle = function (x, y) {
//     this.x = x;
//     this.y = y;
//     this.calculateArea = function () {
//         if (this.x > 0 && this.y > 0) {
//             return this.x * this.y;
//         } else {
//             throw 'Valores inválidos para x e/ou y';
//         }
//     }
// };

// try {
//     const rectangle = new Rectangle(2, -3);
//     console.log(rectangle.calculateArea());
// } catch (e) {
//     console.log(e);
// }