//GENERATORS

// function* forever() {
//     let value = 1;
//     while (true) {
//         try {
//             const reset = yield value++;
//             if (reset) value = 1;
//         } catch (e) {
//             console.log(e);
//         }
//     }
// }

// function today() {
//     const date = new Date();
//     console.log(date);
// }

// // console.log(forever);
// // console.log(typeof forever);
// // const f = forever();
// // console.log(f);
// // console.log(typeof f);
// // console.log(Object.getOwnPropertyNames(f.__proto__.__proto__));
// // today();

// const f = forever();
// console.log(f.next());
// today();
// console.log(f.next());
// console.log(f.next(true));
// console.log(f.throw('error'));
// console.log(f.return("end"));

// console.log(f.next());

// function createIterable(...array) {
//     return {
//         [Symbol.iterator]() {
//             let i = 0;
//             return {
//                 next() {
//                     if (i < array.length) {
//                         return {
//                             value: array[i++],
//                             done: false
//                         };
//                     } else {
//                         return {
//                             value: undefined,
//                             done: true
//                         };
//                     }
//                 }
//             }
//         }
//     };
// }

// function createIterable2(...array) {
//     return {
//         *[Symbol.iterator]() {
//             let i = 0;
//             while (i < array.length) {
//                 yield array[i++];
//             }
//         }
//     };
// }

// const languages = createIterable('C', 'C++', 'Java');
// for (let language of languages) {
//     console.log(language);
// }

// const languages2 = createIterable2('C', 'C++', 'Java');
// for (let language of languages2) {
//     console.log(language);
// }

function sum(a, b) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(a + b);
        }, 1000);
    });
}

sum(2, 1).then(function (a) {
    sum(2, 3).then(function (b) {
        sum(a, b).then(function (result) {
            console.log(result);
        });
    });
});

function async(fn) {
    const gen = fn();
    asyncR(gen);
}

function asyncR(gen, result) {
    const obj = gen.next(result);
    if (obj.done) return;
    obj.value.then(function(result){
        asyncR(gen, result);
    });
}

async(function* () {
    const a = yield sum(2, 1);
    const b = yield sum(2, 3);
    const result = yield sum(a, b);
    console.log(result);
});







