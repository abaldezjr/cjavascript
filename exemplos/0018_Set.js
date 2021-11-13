// //SET NÃO PERMITE ELEMENTOS DUPLICADOS

// const charset = new Set();
// console.log(charset);
// console.log(Array.from(charset));

// // size - retorna a quantidade de elementos
// console.log(charset.size);

// // add - adiciona um elemento
// charset.add('ASCII');
// charset.add('ISO-8859-1');
// charset.add('UTF-8');
// console.log(charset.size);
// // forEach - itera sobre um set
// charset.forEach(function (c) {
//     console.log(c);
// });
// charset.forEach(c => console.log(c));
// // has - retorna true se o elemento existir
// console.log(charset.has('ASCII'));
// console.log(charset.has('ISO-8859-1'));
// console.log(charset.has('UTF-8'));
// console.log(charset.has('UM QUE NÃO EXISTE'));
// // delete - remove um elemento
// console.log(charset.delete('ASCII'));
// console.log(charset.delete('UM QUE NÃO EXISTE'));
// console.log(charset.has('ASCII'));
// // clear - remove todos os elementos
// charset.clear();
// console.log(charset);
// console.log(charset.size);

// //diferença de set e array

// const array = [];
// array.push(10);
// array.push(10);
// array.push(10);
// console.log(array);
// console.log(array.length);

// const set = new Set();
// set.add(10);
// set.add(10);
// console.log(set);
// console.log(set.size);

// //uma boa ideia
// let array = [1,1,1];
// console.log(array);
// const set = new Set(array);
// console.log(set);
// array = Array.from(set);
// console.log(array);

// // WEAKSET

// const wk1 = new WeakSet();
// console.log(wk1);

// const obj1 = {};
// const obj2 = {};
// // add - adiciona um elemento
// wk1.add(obj1);
// wk1.add(obj2);
// // has - retorna true se o elemento existir
// console.log(wk1.has(obj1));
// console.log(wk1.has(obj2));

// // delete - remove um elemento
// wk1.delete(obj1);
// wk1.delete(obj2);

// const circles = new WeakSet();

// function Circle(radius){
//     circles.add(this);
//     this.radius = radius;
// }

// Circle.prototype.calculateArea = function () {
//     if (!circles.has(this)) throw 'Invalid object';
//     return Math.PI * Math.pow(this.radius, 2);
// }

// const circle1 = new Circle(10);
// const circle2 = {
//     radius: 5
// };
// console.log(circle1.calculateArea());
//console.log(circle1.calculateArea.call(circle2));








