//ARRAY
// const languages = ['Python', 'C', 'Java'];
// console.log(typeof languages);
// console.log(languages instanceof Array);
// console.log(languages);

// const languages2 = new Array('Python', 'C', 'Java');
// console.log(typeof languages2);
// console.log(languages2 instanceof Array);
// console.log(languages2);

//exemplo 2
//pegadinha da linguagem
// o segundo array tem 3 posições e não o elemento 3
// const numbers = new Array(1, 2, 3);
// console.log(numbers);

// const numbers2 = new Array(3);
// console.log(numbers2);

//exemplo 3
// const languages = [];
// languages[0] = 'Python';
// languages[1] = 'C';
// languages[2] = 'Java';
// console.log(languages);
// console.log(languages.length);
// delete languages[1];
// console.log(languages);
// console.log(languages.length);

//exemplo 4
// const languages = [];
// languages[0] = 'Python';
// languages[10] = 'C';
// languages[20] = 'Java';
// console.log(languages);
// console.log(languages.length);
// delete languages[10];
// console.log(languages);
// console.log(languages.length);

//ARRAY MUTATOR API
// const languages = ['Python', 'C', 'Java'];
// console.log(languages);
// // push - adiciona um elemento ao final
// console.log(languages.push('Ruby'));
// console.log(languages);
// // pop - remove o elemento do final
// console.log(languages.pop());
// console.log(languages);
// // unshift = adiciona um elemento ao inicio
// console.log(languages.unshift('Go'));
// console.log(languages);
// // shift - remove o elemento do inicio
// console.log(languages.shift());
// console.log(languages);
// // splice - remove, substitui ou adiciona um ou mais elementos em uma determinada posição
// console.log(languages.splice(1, 2));
// console.log(languages);
// console.log(languages.splice(1, 0, 'C++', 'C#'));
// console.log(languages);
// console.log(languages.splice(1, 2, 'C','Java'));
// console.log(languages);
// // sort - ordena os elementos de acordo com a função de ordenação
// const languages = [
//     { name: 'Python', year: 1991 },
//     { name: 'C', year: 1972 },
//     { name: 'Java', year: 1995 }
// ];

// //POR NAME ASCENDENTE
// languages.sort(function (a, b) {
//     return (a.name <= b.name) ? -1 : 1;
// });
// console.log('name asc', languages);

// //POR NAME DESCENDENTE
// languages.sort(function (a, b) {
//     return (b.name <= a.name) ? -1 : 1;
// });
// console.log('name desc', languages);

// //POR NAME ASCENDENTE
// languages.sort(function (a, b) {
//     return a.name.localeCompare(b.name);
// });
// console.log('name asc', languages);

// //POR NAME DESCENDENTE
// languages.sort(function (a, b) {
//     return b.name.localeCompare(a.name);
// });
// console.log('name desc', languages);

// //POR YEAR ASCENDENTE
// languages.sort(function (a, b) {
//     return a.year - b.year;
// });
// console.log('year asc', languages);

// //POR YEAR DESCENDENTE
// languages.sort(function (a, b) {
//     return b.year - a.year;
// });
// console.log('year desc', languages);

// // reverse - inverte a ordem dos elementos
// const languages = ['Python', 'C', 'Java'];
// console.log(languages);
// languages.reverse();
// console.log(languages);

// // fill - preenche elementos de acordo com a posição de inicio e fim
// //exemplo 1
// const languages = ['Python', 'C', 'Java'];
// console.log(languages);
// languages.fill('javascript');
// console.log(languages);

// //exemplo 2
// const languages = ['Python', 'C', 'Java'];
// console.log(languages);
// languages.fill('javascript', 1);
// console.log(languages);

// //exemplo 3
// const languages = ['Python', 'C', 'Java'];
// console.log(languages);
// languages.fill('javascript', 0, 2);
// console.log(languages);


// //ARRAY ITERATION API

// // foreach - executa a função passada por parametro para cada elemento
// const frameworks = ['Angular.js', 'Ember.js', 'Vue.js'];
// frameworks.forEach(function (framework) {
//     console.log(framework);
// });
// const frameworks = ['Angular.js', 'Ember.js', 'Vue.js'];
// frameworks.forEach(f => console.log(f));

// // filter - retorna um novo array contendo somente os elementos que retornaram true na função passar por parametro
// const frameworks = [
//     { name: 'Angular.js', contributors: 1548 },
//     { name: 'Ember.js', contributors: 746 },
//     { name: 'Vue.js', contributors: 240 }
// ];
// const frameworksFilter = frameworks.filter(function () {
//     return true;   
// });
// console.log(frameworksFilter);

// const frameworksFilter2 = frameworks.filter(function (f) {
//     return f.contributors < 1000;   
// });
// console.log(frameworksFilter2);


// // find - Retorna o primeiro elemento que retorno true na função passada por parametro
// const frameworks = [
//     { name: 'Angular.js', contributors: 1548 },
//     { name: 'Ember.js', contributors: 746 },
//     { name: 'Vue.js', contributors: 240 }
// ];
// const frameworksFilter = frameworks.find(function () {
//     return true;   
// });
// console.log(frameworksFilter);

// const frameworksFilter2 = frameworks.find(function (f) {
//     return f.name === 'Angular.js';   
// });
// console.log(frameworksFilter2);

// // some - retorna true se um ou mais elementos retornaram true na função passada por parametro
// const frameworks = [
//     { name: 'Angular.js', contributors: 1548 },
//     { name: 'Ember.js', contributors: 746 },
//     { name: 'Vue.js', contributors: 240 }
// ];
// const frameworksFilter = frameworks.some(function (f) {
//     return f.name.includes('js');   
// });
// console.log(frameworksFilter);

// // every - retorna true se todos os elementos retornaram true na função passada por parametro
// const frameworks = [
//     { name: 'Angular.js', contributors: 1548 },
//     { name: 'Ember.js', contributors: 746 },
//     { name: 'Vue.j', contributors: 240 }
// ];
// const frameworksFilter = frameworks.every(function (f) {
//     return f.name.includes('js');   
// });
// console.log(frameworksFilter);

//// map - retorna um novo array com base no retorno da função passada por parâmetro
// const frameworks = [
//     { name: 'Angular.js', contributors: 1548 },
//     { name: 'Ember.js', contributors: 746 },
//     { name: 'Vue.j', contributors: 240 }
// ];

// const novoArray = frameworks.map(function (f) {
//     return f.name;   
// });
// console.log(novoArray);
//console.log(frameworks.map(f => f.name));

// // reduce - retorna um valor com base no retorna da função passada por parametro
// const frameworks = [
//     { name: 'Angular.js', contributors: 1548 },
//     { name: 'Ember.js', contributors: 746 },
//     { name: 'Vue.j', contributors: 240 }
// ];

// const result = frameworks.reduce(function (total, framework) {
//     return total + framework.contributors;
// }, 0);
// console.log(result);
// console.log(frameworks.reduce((total, framework) => total + framework.contributors, 0));

// //ARRAY ACCESSOR API - não modifica o array
// const languages = ['Python', 'C', 'Java','Python'];
// // indexOf - retorna a posição do primeiro elemento encontrado
// console.log(languages.indexOf('Python'));
// console.log(languages.indexOf('C++'));

// // lastIndexOf - retorna a posição do ultimo elemento encontrado
// console.log(languages.lastIndexOf('Python'));

// // includes - retorna true se o elemento existir
// console.log(languages.includes('Python'));

// // concat - retorna um novo array resultante da concatenação de um ou mais arrays
// const languages2 = ['SmallTalk', 'C++', 'Simula','TypeScript'];
// console.log(languages.concat(languages2));
// const novoArray = [].concat(languages, languages2);

// // slice - retorna partes de um determinado array de acordo com a posição de início e fim
// //n-1
// console.log(novoArray.slice(0, 2));
// console.log(novoArray.slice(1));

// // join - converte o array para uma string juntando os elementos com base em um separador 
// console.log(novoArray.join(';'));
