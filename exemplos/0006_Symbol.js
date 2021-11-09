//console.log(Symbol('a'));
//console.log(Symbol('b'));
// 'a' é a descrição do symbol
//console.log(Symbol('a') == Symbol('a'));
//console.log(Symbol('a') === Symbol('a'));

//operações com symbols
//console.log(Symbol.hasInstance);
//console.log(Symbol.isConcatSpreadable);
//console.log(Symbol.iterator);
//console.log(Symbol.match);
//console.log(Symbol.replace);
//console.log(Symbol.search);
//console.log(Symbol.species);
//console.log(Symbol.split);
//console.log(Symbol.toPrimitive);
//console.log(Symbol.toStringTag);
//console.log(Symbol.unscopables);

//Symbol com regexp
//caso 1
//let regexp = /JavaScript/;
//console.log("/JavaScript/".startsWith(regexp));
//console.log(regexp);

//caso 2
let regexp = /JavaScript/;

//reconhecer uma expressão regular como uma string
regexp[Symbol.match] = false;
console.log("/JavaScript/".startsWith(regexp));
console.log(regexp);




