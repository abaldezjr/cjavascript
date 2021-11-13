// ITERABLES E ITERATORS

// const languages = ['Fortran', 'Lisp', 'Cobol'];

// for (let i = 0; i < languages.length; i++) {
//     console.log(languages[i]);
// }

// //for in serve para percorrer as chaves de um objeto
// for (let keys in languages) {
//     console.log(languages[keys]);
// }

// //for of
// for (let language of languages) {
//     console.log(language);
// }

// //foreach com function
// languages.forEach(function (element) {
//     console.log(element);
// });

// //foreach com arrow function
// languages.forEach((element) => {
//     console.log(element);
// });

// //foreach com arrow function simplificada
// languages.forEach(e => console.log(e));

//exemplo 1
// const classicLanguages = ['Fortran', 'Lisp', 'COBOL'];
// const modernLanguages = ['Python', 'Ruby', 'Java'];
// const languages = [].concat(classicLanguages,modernLanguages);
// console.log(languages);

// //exemplo 2
// const classicLanguages = ['Fortran', 'Lisp', 'COBOL'];
// const modernLanguages = ['Python', 'Ruby', 'Java'];
// //spread
// const languages = [...classicLanguages, ...modernLanguages];
// console.log(languages);

// //exemplo 3
// const languages = new Map([['Fortran', 1957], ['Lisp', 1958], ['COBOL', 1959]]);
// for (let language of languages) {
//     console.log(language);
// }
// //usando destructuring
// for (let [language, year] of languages) {
//     console.log(language, year);
// }

// //exemplo 4
// const languages = new Map([['Fortran', 1957], ['Lisp', 1958], ['COBOL', 1959]]);
// console.log(Array.from(languages));
// //spread operator
// console.log([...languages]);

// //exemplo 5
// const languages = new Set([['Fortran', 1957], ['Lisp', 1958], ['COBOL', 1959]]);
// for (let language of languages) {
//     console.log(language);
// }
// //usando destructuring
// for (let [language, year] of languages) {
//     console.log(language, year);
// }

// //exemplo 6
// const languages = new Set([['Fortran', 1957], ['Lisp', 1958], ['COBOL', 1959]]);
// console.log(Array.from(languages));
// //spread operator
// console.log([...languages]);

// //exemplo 7
// const language = "Java";
// for (let char of language) {
//     console.log(char);
// }
// console.log([...language]);

//ITERABLE
// //Array
// const languages = ['Python','Javascript','Java'];
// const iterator = languages[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// //Map
// //exemplo 1
// const languages = new Map([['Python',1900],['Javascript',1901],['Java',1902]]);
// const iterator = languages[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// //exemplo 2
// const languages = new Map([['Python',1900],['Javascript',1901],['Java',1902]]);
// const iterator = languages.keys();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// //exemplo 3
// const languages = new Map([['Python',1900],['Javascript',1901],['Java',1902]]);
// const iterator = languages.values();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// //exemplo 4
// keys e values são o mesmo valor
// const languages = new Set(['Python','Javascript','Java']);
// const iterator = languages[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// //exemplo 5
// const languages = new Set(['Python','Javascript','Java']);
// const iterator = languages.keys();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// //exemplo 6
// const languages = new Set(['Python','Javascript','Java']);
// const iterator = languages.values();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// //exemplo 7
// const language = "Java";
// const iterator = language[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// //CRIANDO UM ITERABLE

// function createIterable(...array) {
//     return {
//         [Symbol.iterator]() {
//             let i = 0;
//             return ({
//                 next() {
//                     if (i < array.length) {
//                         return ({
//                             value: array[i++],
//                             done: false
//                         });
//                     } else {
//                         return ({
//                             value: undefined,
//                             done: true
//                         });
//                     }

//                 }
//             });
//         }
//     };
// }

// const iterable = createIterable('C', 'C++', 'Java');
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// for (let i of iterable) {
//     console.log(i);
// }

