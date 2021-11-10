//#################
//JSON - JAVASCRIPT OBJECT NOTATION ECMA-404
//Tipos de dados
//Number, String, Boolean, Object, Array, null
// não temos NaN, undefined, functions como valor
// metodos : JSON.stringfy(), JSON.parse()

//exemplo 21
//Number
//console.log(JSON.stringify(10));
//String
//console.log(JSON.stringify("Javascript"));
//Boolean
//console.log(JSON.stringify(true));
//console.log(JSON.stringify(false));
//Object
//console.log(JSON.stringify({ name: "Javascript", paradigm: "Functional" }));
//Array
//console.log(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
//null
//console.log(JSON.stringify(null));

//exemplo 22
//Number
//console.log(JSON.parse('10'));
//String
//console.log(JSON.parse('"Javascript"'));
//Boolean
//console.log(JSON.parse('true'));
//console.log(JSON.parse('false'));
//Object
//console.log(JSON.parse('{ "name": "Javascript", "paradigm": "Functional" }'));
//Array
//console.log(JSON.parse('[1, 2, 3, 4, 5, 6, 7, 8, 9]'));
//null
//console.log(JSON.parse('null'));

//exemplo 23
//const book1 = {
//    name: "Refactoring",
//    author: "Martin Fowler"
//};

//const book2 = {
//    name: "Refactoring",
//    author: "Martin Fowler"
//};

//console.log(book1 === book2);
//console.log(JSON.stringify(book1) === JSON.stringify(book2));

//const book3 = JSON.parse(JSON.stringify(book2));
//console.log(book3 === book2);