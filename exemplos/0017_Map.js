// MAP

// //exemplo 1
// const timeUnits = new Map();
// console.log(typeof timeUnits);
// console.log(timeUnits instanceof Object);
// console.log(timeUnits instanceof Map);
// console.log(timeUnits instanceof Array);

// //exemplo 2
// const timeUnits = new Map([
//     ['second', 1],
//     ['minute', 60],
//     ['hour', 3600],
// ]);

// console.log(timeUnits);
// console.log(Array.from(timeUnits));

// size - retorna a quantidade de elementos
//console.log(timeUnits.size);

// // set - adiciona um par de chave e valor
// const timeUnits = new Map();
// console.log(timeUnits.size);
// timeUnits.set('second', 1);
// timeUnits.set('minute', 60);
// timeUnits.set('hour', 3600);
// console.log(timeUnits.size);
// console.log(timeUnits);

// // forEach - itera sobre o mapa
// timeUnits.forEach(function (value, key) {
//     console.log(key, value);
// });
// timeUnits.forEach( (value, key) => console.log(key, value));

// // has - retorna true se a chave existir
// console.log(timeUnits.has('hour'));

// // get - retorna o valor de uma determinada chave
// console.log(timeUnits.get('second'));
// console.log(timeUnits.get('minute'));
// console.log(timeUnits.get('hour'));

// // delete - remove um par de chave e valor
// console.log(timeUnits.size);
// console.log(timeUnits.delete('hour'));
// console.log(timeUnits.delete('chave que não existe'));
// console.log(timeUnits.size);

// // clear - remove todos os elementos
// console.log(timeUnits.size);
// console.log(timeUnits.clear());
// console.log(timeUnits.size);

// const obj = {};

// obj[10] = "Number";
// console.log(obj[10]);
// console.log(obj);

// obj["10"] = "String";
// console.log(obj["10"]);
// console.log(obj);

// obj[true] = "Boolean";
// console.log(obj[true]);
// console.log(obj);

// obj["true"] = "String";
// console.log(obj["true"]);
// console.log(obj);

// const map = new Map();
// map.set(10, "Number");
// map.set("10", "String");
// map.set(true, "Boolean");
// map.set("true", "String");
// console.log(map);

// console.log("toString" in obj);
// console.log("valueOf" in obj);

// //WEAK MAP

// const wm1 = new WeakMap();
// console.log(wm1);
// const obj1 = {};
// const obj2 = {};
// // set - Adiciona um par de chave e valor
// wm1.set(obj1, "obj1");
// wm1.set(obj2, "obj2");
// console.log(wm1);
// // has - Retorna true se a chave existir
// console.log(wm1.has(obj1));
// console.log(wm1.has(obj2));
// // get - retorna o valor de uma determinada chave
// console.log(wm1.get(obj1));
// console.log(wm1.get(obj2));
// // delete - remove um par de chave e valor
// wm1.delete(obj1);
// console.log(wm1.has(obj1));

//exemplo de como usar weakmap para cash

// const areas = new WeakMap();
// const rectangle = { x: 10, y: 2 }
// const rectangle2 = { x: 5, y: 3 }

// function calculateArea(rectangle) {
//     if (areas.has(rectangle)) {
//         return areas.get(rectangle);
//     }
//     const area = rectangle.x * rectangle.y;
//     areas.set(rectangle, area);
//     return area;
// }

// console.log(calculateArea(rectangle));
// console.log(calculateArea(rectangle));
// console.log(calculateArea(rectangle2));
