// //ARROW FUNCTION

// //exemplo 1
// const sum = (a, b) => {
//    return a + b;
// }

// const subtract = (a, b) => {
//    return a - b;
// }

// const calculator = (fn) => {
//    return ((a, b) => {
//        return fn(a, b);
//    }
//    );
// }

// console.log(calculator(sum)(3, 2));
// console.log(calculator(subtract)(3, 2));

// //exemplo 2
// const sum = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const calculator = (fn) => (a, b) => fn(a, b);

// console.log(calculator(sum)(3, 2));
// console.log(calculator(subtract)(3, 2));

// //exemplo 3
// const person = {
//    name: "James Gosling",
//    city: "Alberta",
//    year: 1955,
//    getAge: function () {
//        return (new Date()).getFullYear() - this.year;
//    },
//    getAge2: () => {
//        return (new Date()).getFullYear() - this.year;
//    }
// };

// console.log(person);
// console.log(person.getAge());
// console.log(person.getAge2());

// //exemplo 4
// const sum = function () {
//    let total = 0;
//    for(let argument in arguments){
//        total += arguments[argument];
//    }
//    return total;
// };

// const sumArrow = () => {
//    let total = 0;
//    for(let argument in arguments){
//        total += arguments[argument];
//    }
//    return total;
// };

// console.log(sum(1, 2, 3));

// //arguments e this não se constroem na arrow function recomendavel não usar arrow function quando se usar essas variaveis
// console.log(sumArrow(1, 2, 3));

// //exemplo 5
// const createPerson = function (name, city, year) {
//     return {
//         name: name,
//         city: city,
//         year: year
//     };
// };
// const person = createPerson('Alan Kay','Springfield', 1940);
// console.log(person);

// const createPerson2 = function (name, city, year) {
//     return { name, city, year };
// };
// const person2 = createPerson2('Alan Kay', 'Springfield', 1940);
// console.log(person2);

// //assim da erro é necessario parenteses
// const createPerson3 = (name, city, year) =>  { name, city, year }; ;
// const person3 = createPerson3('Alan Kay', 'Springfield', 1940);
// console.log(person3);

// const createPerson4 = (name, city, year) =>  ({ name, city, year });
// const person4 = createPerson4('Alan Kay', 'Springfield', 1940);
// console.log(person4);
