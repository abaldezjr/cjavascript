// //FUNCTION 
// //exemplo 1
// //function declaration
// function sum(a, b) {
//    console.log(a);
//    console.log(b);
//    return a + b;
// }
// console.log(sum);
// console.log(sum());
// console.log(sum(2 ,3));

// //exemplo 2
// //function expression
// const sum = function(a, b) {
//    console.log(a);
//    console.log(b);
//    return a + b;
// }
// console.log(sum);
// console.log(sum());
// console.log(sum(2 ,3));

// //exemplo 3
// //function declaration
// //funciona antes da declaração
// console.log(sum);
// console.log(sum());
// console.log(sum(2 ,3));
// function sum(a, b) {
//    console.log(a);
//    console.log(b);
//    return a + b;
// }

// //exemplo 4
// //function expression
// //não funciona antes da declaração
// console.log(sum);
// console.log(sum());
// console.log(sum(2 ,3));
// const sum = function(a, b) {
//    console.log(a);
//    console.log(b);
//    return a + b;
// }

// //functions podem ser atribuidas a uma variavel, passadas por parametro, serem retorno de uma função.

// //exemplo 5
// //atribuidas a uma variavel
// const sum = function (a, b) {
//    return a + b;
// }

// const subtract = function (a, b) {
//    return a - b;
// }
// console.log(sum(2, 3));
// console.log(subtract(2,1));

// //exemplo 6
// //serem retorno de uma função
// const sum = function (a, b) {
//    return a + b;
// }

// const subtract = function (a, b) {
//    return a - b;
// }

// const calculator = function () {
//    return function () {
//        return 'calculator';
//    };
// }

// console.log(calculator()());

// //exemplo 7
// //passadas por parametro
// const sum = function (a, b) {
//    return a + b;
// }
// const subtract = function (a, b) {
//    return a - b;
// }
// const calculator = function (fn) {
//    return function (a, b) {
//        return fn(a, b);
//    };
// }
// console.log(calculator(sum)(2, 1));
// console.log(calculator(subtract)(2, 1));

// //exemplo 8 
// //diferentes numeros parametros
// const sum = function (a, b) {
//    return a + b;
// }
// console.log(sum(2));
// console.log(sum(2, 1));
// console.log(sum(2, 3, 1));

// //exemplo 9
// //inicialização nos parametros
// const sum = function (a = 0, b = 0) {
//    return a + b;
// }
// console.log(sum(1));
// console.log(sum(5, 2));
// console.log(sum());

// //exemplo 10
// //arguments
// const sum = function () {
//    let total = 0;
//    for(let argument in arguments){
//        total += arguments[argument];
//    }
//    return total;
// }
// console.log(sum(1,2,3,4,5,6,7,8,9));

// //exemplo 11
// //REST PARAMETER ...numbers
// const sum = function (...numbers) {
//    let total = 0;
//    for (let number of numbers) {
//        total += number;
//    }
//    return total;
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

// //exemplo 12
// //REST PARAMETER ...numbers
// const sum = function (a, b, c, ...numbers) {
//    let total = a + b + c;
//    for (let number of numbers) {
//        total += number;
//    }
//    return total;
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

// // THIS

// //exemplo 13 functions dentro de objetos
// const rectangle = {
//    x: '10',
//    y: '2',
//    calculateArea: function () {
//        return this.x * this.y;
//    },
//    calculateArea2() {
//        return this.x * this.y;
//    }
// };
// console.log(rectangle);
// console.log(rectangle.calculateArea2());

// //exemplo 13 referenciando function dentro do objeto
// function calculateArea() {
//    return this.x * this.y;
// }
// const rectangle = {
//    x: '10',
//    y: '2',
//    calculateArea
// };
// console.log(rectangle);
// console.log(rectangle.calculateArea());

// //GETTERS AND SETTERS
// //exemplo 14
// const rectangle = {
//    set x(x) {
//        if (x > 0) {
//            this._x = x;
//        } else {
//            console.log('Valor inválido para x');
//        }
//    },
//    set y(y) {
//        if (y > 0) {
//            this._y = y;
//        } else {
//            console.log('Valor inválido para y');
//        }
//    },
//    calculateArea() {
//        return this._x * this._y;
//    },
//    get area() {
//        return this._x * this._y;
//    }
// };
// rectangle.x = 10;
// rectangle.y = 2;
// console.log(rectangle);
// console.log(rectangle.calculateArea());
// console.log(rectangle.area);

// //GETTERS AND SETTERS
// //exemplo 15 defineProperty

// const rectangle = {};
// Object.defineProperty(rectangle, "x", {
//    set(x) {
//        if (x > 0) {
//            this._x = x;
//        } else {
//            console.log('Valor inválido para x');
//        }
//    }
// });

// Object.defineProperty(rectangle, "y", {
//    set(y) {
//        if (y > 0) {
//            this._y = y;
//        } else {
//            console.log('Valor inválido para y');
//        }
//    }
// });

// Object.defineProperty(rectangle, "area", {
//    get() {
//        return this._x * this._y;
//    }
// });

// rectangle.x = 10;
// rectangle.y = 2;
// console.log(rectangle);
// console.log(rectangle.area);

// //CALL, APPLY BIND
// //exemplo 16
// const calculateArea = function (fn) {
//    return fn(Math.PI * Math.pow(this.radius, 2));
// };

// const circle = {
//    radius: 10,
//    calculateArea
// };
// console.log(circle);
// console.log(circle.calculateArea(Math.round));
// console.log(calculateArea.call(circle, Math.round));
// console.log(calculateArea.apply(circle, [Math.ceil]));

// const calculateAreaForCircle = calculateArea.bind(circle);
// console.log(calculateArea.bind(circle)(Math.round));
// console.log(calculateAreaForCircle(Math.round));
// console.log(calculateAreaForCircle(Math.ceil));

// //new
// //exemplo 17
// const person = {
//    name: "Linus Torvalds",
//    city: "Helsinki",
//    year: 1969,
//    getAge(){
//        return new Date().getFullYear() - this.year;
//    }
// };

// const person2 = {
//    name: "Bill Gates",
//    city: "Seattle",
//    year: 1955,
//    getAge(){
//        return new Date().getFullYear() - this.year;
//    }
// };

// console.log(person);
// console.log(person.getAge());

// console.log(person2);
// console.log(person2.getAge());

// //exemplo 18
// const createPerson = function (name, city, year) {
//     return {
//         name,
//         city,
//         year,
//         getAge() {
//             return new Date().getFullYear() - this.year;
//         }
//     };
// };

// const person1 = createPerson("Linus Torvalds", "Helsinki", 1969);
// const person2 = createPerson("Bill Gates", "Seattle", 1955);

// console.log(person1);
// console.log(person1.getAge());

// console.log(person2);
// console.log(person2.getAge());

// //exemplo 19
// const createPerson = function (name, city, year) {

//    const personPrototype = {
//        getAge() {
//            return new Date().getFullYear() - this.year;
//        }
//    };

//    const person =  {
//        name,
//        city,
//        year
//    };

//    Object.setPrototypeOf(person, personPrototype);

//    return person;
// };

// const person1 = createPerson("Linus Torvalds", "Helsinki", 1969);
// const person2 = createPerson("Bill Gates", "Seattle", 1955);

// console.log(person1);
// console.log(person1.__proto__);
// console.log(person1.getAge());

// console.log(person2);
// console.log(person2.__proto__);
// console.log(person2.getAge());

// //exemplo 21
// const Person = function (name, city, year) {
//    this.name = name;
//    this.city = city;
//    this.year = year;
//    this.getAge = function () {
//        return new Date().getFullYear() - this.year;
//    }
// };

// const person1 = new Person("Linus Torvalds", "Helsinki", 1969);
// const person2 = new Person("Bill Gates", "Seattle", 1955);

// console.log(person1);
// console.log(person1.getAge());

// console.log(person2);
// console.log(person2.getAge());

// //exemplo 21
// const Person = function (name, city, year) {
//    this.name = name;
//    this.city = city;
//    this.year = year;
// };

// Person.prototype.getAge = function () {
//    return new Date().getFullYear() - this.year;
// };

// const person1 = new Person("Linus Torvalds", "Helsinki", 1969);
// const person2 = new Person("Bill Gates", "Seattle", 1955);

// console.log(person1);
// console.log(person1.__proto__);
// console.log(person1.getAge());

// console.log(person2);
// console.log(person2.__proto__);
// console.log(person2.getAge());

// //exemplo 22
// const _new = function (fn, ...params) {
//    const obj = {};
//    Object.setPrototypeOf(obj, fn.prototype);
//    fn.apply(obj, params);
//    return obj;
// };

// const Person = function (name, city, year) {
//    this.name = name;
//    this.city = city;
//    this.year = year;
// };

// Person.prototype.getAge = function () {
//    return new Date().getFullYear() - this.year;
// };

// const person1 = _new(Person, "Linus Torvalds", "Helsinki", 1969);
// const person2 = _new(Person, "Bill Gates", "Seattle", 1955);

// console.log(person1);
// console.log(person1.__proto__);
// console.log(person1.getAge());

// console.log(person2);
// console.log(person2.__proto__);
// console.log(person2.getAge());

// //INSTANCEOF
// //exemplo 23
// const _instanceof = function (obj, fn) {
//    if (obj === fn.prototype) {
//        return true;
//    }
//    if (obj === null) {
//        return false;
//    }
//    return _instanceof(obj.__proto__, fn);
// };

// const date = new Date();
// console.log(date instanceof Date);
// console.log(date instanceof Object);
// console.log(date instanceof Array);
// console.log(typeof date);

// console.log(_instanceof(date, Date));
// console.log(_instanceof(date, Object));
// console.log(_instanceof(date, Array));
