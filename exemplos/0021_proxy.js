//PROXY

// apply
// construct
// defineProperty
// deleteProperty
// get
// getOwnPropertyDescriptor
// getPrototypeOf
// has
// isExtensible
// ownKeys
// preventExtensions
// set
// setPrototypeOf

// function createArray() {
//     return new Proxy({}, {
//         set(target, key, value) {
//             target.length = target.length || 0;
//             target.length++;
//             target[key] = value;
//         },
//         get(target, key) {
//             if (typeof key === 'string' && key.match(/\d+/)) {
//                 if(!(key in target)){
//                     throw `Property ${key} not found!`;
//                 }
//             }
//             return target[key];
//         },
//         deleteProperty(target, key) {
//             if (key in target) {
//                 delete target[key];
//                 target.length--;
//             }
//         }
//     });
// }

// const languages = createArray();
// languages[0] = 'Python';
// languages[1] = 'Java';
// languages[2] = 'JavaScript';
// console.log(languages);
// console.log(languages.length);
// delete languages[1];
// delete languages[2];
// delete languages[34];
// console.log(languages);
// console.log(languages.length);
// console.log(languages[34]);

//API REFLECT
// function createArray() {
//     return new Proxy({}, {
//         set(target, key, value) {
//             target.length = target.length || 0;
//             target.length++;
//             Reflect.set(target, key, value);
//         },
//         get(target, key) {
//             if (typeof key === 'string' && key.match(/\d+/)) {
//                 if(!(Reflect.has(target, key))){
//                     throw `Property ${key} not found!`;
//                 }
//             }
//             return Reflect.get(target, key);
//         },
//         deleteProperty(target, key) {
//             if (Reflect.has(target, key)) {
//                 Reflect.deleteProperty(target, key);
//                 target.length--;
//             }
//         }
//     });
// }

// const languages = createArray();
// languages[0] = 'Python';
// languages[1] = 'Java';
// languages[2] = 'JavaScript';
// console.log(languages);
// console.log(languages.length);
// delete languages[1];
// delete languages[2];
// delete languages[34];
// console.log(languages);
// console.log(languages.length);
// console.log(languages[34]);













