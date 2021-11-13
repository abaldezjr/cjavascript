//promises

// // exemplo 1
// function sum(a, b, callback) {
//     setTimeout(function () {
//         callback(a + b);
//     }, 1000);
// }
// sum(2, 1, function (result) {
//     console.log(result);
// });

// sum(2, 1, result => console.log(result));

// sum(2, 1, function (a) {
//     sum(2, 1, function (b) {
//         sum(a, b, function (result) {
//             console.log(result);
//         });
//     });
// });


// // exemplo 2
// function sum(a, b, callback) {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve(a + b);
//         }, 1000);
//     });
// }

// sum(2, 1).then(function (a) {
//     sum(2, 1).then(function (b) {
//         sum(a, b).then(function (result) {
//             console.log(result);
//         });
//     });    
// });

// sum(2, 1).then( a => {
//     sum(2, 1).then( b => {
//         sum(a, b).then( result => console.log(result));
//     });    
// });


// // exemplo 2
// function sum(a, b) {
//     return new Promise(function (resolve, reject) {
//         if (!a || !b) return reject('Invalid input');
//         setTimeout(function () {
//             resolve(a + b);
//         }, 1000);
//     });
// }

// sum(2, 1).then(function (a) {
//     sum(2, 1).then(function (b) {
//         sum(a, b).then(function (result) {
//             console.log(result);
//         }).catch(function(e){
//             console.log(e);
//         });
//     }).catch(function(e){
//         console.log(e);
//     });;    
// }).catch(function(e){
//     console.log(e);
// });

// // exemplo 3 com arrowfunction
// const sum = (a, b) => new Promise((resolve, reject) => {
//     if (!a || !b) return reject('Invalid input');
//     setTimeout(() => resolve(a + b), 1000);
// });

// sum(2, 1).then(function (a) {
//     return sum(2, 1).then(function (b) {
//         return sum(a, b).then(result => console.log(result));
//     });
// }).catch(e => console.log(e));


// // exemplo 4
// function sum(a, b) {
//     return new Promise(function (resolve, reject) {
//         if (!a || !b) return reject('Invalid input');
//         setTimeout(function () {
//             resolve(a + b);
//         }, 1000);
//     });
// }

// Promise.all([sum(2, 1),sum(2, 3)])
// .then(values => {
//     const [a,b] = values;
//     sum(a, b).then(r => console.log(r))
//     .catch(e => console.log(e));
// })
// .catch(e => console.log(e));

// // exemplo 5
// function sum(a, b) {
//     return new Promise(function (resolve, reject) {
//         if (!a || !b) return reject('Invalid input');
//         setTimeout(function () {
//             resolve(a + b);
//         }, Math.random() * 1000);
//     });
// }

// Promise.race([sum(2, 2),sum(4, 4)])
// .then(value => {
//     sum(value, value).then(r => console.log(r))
//     .catch(e => console.log(e));
// })
// .catch(e => console.log(e));


