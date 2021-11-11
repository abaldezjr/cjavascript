//EXECUTION CONTEXT
//scope chain
//como não existe a variavel v1 dentro da função ele procura no prototipo dessa função
//no caso escopo global

//exemplo 1
// const v1 = 10;
// const fn1 = function(){
//     console.log(v1);    
// }
// fn1();

//exemplo 2
//ele procura a variavel dentro da fn2 não encontra
//ele procura a variavel dentro da fn1 não encontra
//ele procura a variavel dentro do escopo global
//const v1 = 10;
//const fn1 = function(){
//    const fn2 = function(){
//        console.log(v1);    
//    }    
//    fn2();
//}
//fn1();

//exemplo 3
//ele procura a variavel dentro da fn2 não encontra
//ele procura a variavel dentro da fn1 encontra e para de procurar
// const v1 = 10;
// const fn1 = function(){
//     const v1 = 100;
//     const fn2 = function(){
//         console.log(v1);    
//     }    
//     fn2();
// }
// fn1();


//exemplo 4
//ele procura a variavel dentro da fn2 encontra e para de procurar
// const v1 = 10;
// const fn1 = function(){
//     const v1 = 100;
//     const fn2 = function(){
//         const v1 = 1000;
//         console.log(v1);    
//     }    
//     fn2();
// }
// fn1();

//exemplo 5
//não é possível acessar uma variável criada na função fora da função
// const v1 = 10;
// const fn1 = function(){
//     const v1 = 100;
//     const fn2 = function(){
//         const v1 = 1000;
//         console.log(v1);
//         const v2 = 1000;
//         console.log(v2);    
//     }    
//     console.log(v2);
//     fn2();
// }
// fn1();

//exemplo 6
//const obj1 = {
//    p1: 10,
//    getP1: function () {
//        return this.p1;
//    }
//};

//console.log(obj1);
//console.log(obj1.getP1());

//exemplo 7
// const obj1 = {
//     p1: 10,
//     getP1: function () {
//         const fn1 =  function () {
//             return this.p1;
//         };
//         return fn1();
//     }
// };

// console.log(obj1);
// console.log(obj1.getP1());

//exemplo 8
//function redefine o this
//criando o that hahahaha
// const obj1 = {
//     p1: 10,
//     getP1: function () {
//         const that = this;
//         const fn1 =  function () {
//             return that.p1;
//         };
//         return fn1();
//     }
// };

// console.log(obj1);
// console.log(obj1.getP1());

//exemplo 9
//arrow function não redefine o this
//exemplo 36 com arrow function
// const obj1 = {
//     p1: 10,
//     getP1: function () {
//         const fn1 = () => {
//             return this.p1;
//         };
//         return fn1();
//     }
// };

// console.log(obj1);
// console.log(obj1.getP1());
