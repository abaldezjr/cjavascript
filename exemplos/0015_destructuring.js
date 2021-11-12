// //DESTRUCTURING

// //exemplo 1
//  const language = 'C;Dennis Ritchie;1972'.split(';');
//  console.log(language);
//  const name = language[0];
//  const author = language[1];
//  const year = language[2];
//  console.log(name);
//  console.log(author);
//  console.log(year);

// //exemplo 2
// const [name, author, year] = 'C;Dennis Ritchie;1972'.split(';');
// console.log(name, author, year);

// //exemplo 3
// //ignorando um campo
// const [, author, year] = 'C;Dennis Ritchie;1972'.split(';');
// console.log(author, year);

// //exemplo 4
// //da para inicializar mas é meio ruim se usa burramente
// const language = 'C;1972'.split(';');
// const [name = '-', author = '-', year = 'y-'] = language;
// console.log(name, author, year);

// //exemplo 5
// const language = {
//     name: 'C',
//     author: 'Dennis Ritchie',
//     year: 1972
// };
// const name = language.name;
// const author = language.author;
// const year = language.year;
// console.log(name, author, year);

// //exemplo 6
// //usar chaves para objetos
// //podemos nomear as variaveis diferente dos atributos do objeto
// const language = {
//     name: 'C',
//     author: 'Dennis Ritchie',
//     year: 1972,
//     company: {
//         name: 'Bell Labs'
//     }
// };
// const { name, author, year, company } = language;
// console.log(name, author, year, company.name);

// const { name, author, year, company:{name: companyName} } = language;
// console.log(name, author, year, companyName);

// const { name: n, author: a, year: y, company: {name: c} } = language;
// console.log(n, a, y, c);

// const { name: n, author: a, year: y, company: c } = language;
// console.log(n, a, y, c.name);

// //exemplo 7
// const sum = function ([a, b]) {
//     return a + b;
// }

// console.log(sum([1, 2]));

// const sum2 = function ({ a, b }) {
//     return a + b;
// }

// console.log(sum2({ a: 1, b: 2 }));