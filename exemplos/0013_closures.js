// //CLOSURES

// //exemplo 1
// const v1 = 10;
// function fn1() {
//     function fn2() {
//         console.log(v1);
//     }    
//     fn2();
// }
// fn1();

// //exemplo 2
// //closure manter o scope chain de forma estatica
// //vai sair 10 ou 100 no console
// //ambiguidade de variavel
// //escopo estatico no momento da criação
// function fn1(){
//     const v1 = 10;
//     return function () {
//         console.log(v1);
//     }
// }
// const fn2 = fn1();
// const v1 = 100;
// fn2();

// //exemplo 3
// const v1 = 10;
// function fn1() {
//     console.log(v1);
// }
// function fn2(fn1) {
//     const v1 = 100;
//     fn1();
// }
// fn2(fn1);

// //exemplo 4
// const v1 = 10;
// function fn1() {
//     let v1 = 10;
//     return({
//         m1(){
//             console.log(++v1);
//         },
//         m2(){
//             console.log(--v1);
//         }
//     });
// }

// const obj1 = fn1();
// obj1.m1();
// obj1.m2();

// //exemplo 5
// //mesmo escopo para os 3
// const obj1 = {};

// for (var v1 = 0; v1 < 3; v1++) {
//     obj1[v1] = function () {
//         console.log(v1);
//     }
// }

// console.log(obj1);
// console.log(obj1[0].call());
// console.log(obj1[1].call());
// console.log(obj1[2].call());

// //exemplo 6
// //3 escopos diferentes
// const obj1 = {};

// for (var v1 = 0; v1 < 3; v1++) {
//     obj1[v1] = (function (v2) {
//         return function () {
//             console.log(v2);
//         }
//     })(v1);
// }

// console.log(obj1);
// console.log(obj1[0].call());
// console.log(obj1[1].call());
// console.log(obj1[2].call());

// //exemplo 7
// const obj1 = {};

// for (var v1 = 0; v1 < 3; v1++) {
//     obj1[v1] = (function () {
//         console.log(this.v2);
//     }).bind({ v2: v1 });
// }

// console.log(obj1);
// console.log(obj1[0].call());
// console.log(obj1[1].call());
// console.log(obj1[2].call());
