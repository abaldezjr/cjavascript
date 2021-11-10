
//OBJECT
//console.log(typeof {});
//console.log(typeof new Object());
//console.log(typeof Object.create(null));

//################

//exemplo 1
//const book = {
//    title: "Clean Code",
//    author: "Robert C. Martin",
//    pages: 464,
//    language: "English",
//    available: true
//};

//console.log(book);

//###########################

//exemplo 2
//const title = "Clean Code";
//const author = "Robert C. Martin";
//const pages = 464;
//const language = "English";
//const available = true;

//const book = {
//    title: title,
//    author: author,
//    pages: pages,
//    language: language,
//    available: available
//};

//console.log(book);

//#################################

//exemplo 3
//const title = "Clean Code";
//const author = "Robert C. Martin";
//const pages = 464;
//const language = "English";
//const available = true;

//quando eu tenho uma variavel no codigo igual ao nome da minha chave posso usar short notation dessa forma ai.
//const book = {title, author, pages, language, available};
//console.log(book);

//#################

//exemplo 4
//cuidado com os nomes dos atributos, se tiverem caracteres diferentes precisa de aspas
//const book = {
//   title: "Clean Code",
//   author: "Robert C. Martin",
//number-of-pages: 464,
//  "number-of-pages": 464,
//  language: "English",
//   available: true
//};

//console.log(book);

//#############################

//exemplo 5
//atributos dinamicos COISA DE MALUCO
//const array = ['title', 'author', 'number-of-pages', 'language', 'available'];
//const value = ["Clean Code", "Robert C. Martin", 464, "English", true];
//const book = {
//    [array[0]]: value[0],
//    [array[1]]: value[1],
//    [array[2]]: value[2],
//    [array[3]]: value[3],
//    [array[4]]: value[4]
//};
//
//console.log(book);

//######################

//exemplo 6
//let book = {};
//let book = new Object();
//let book = Object.create(null);
//book.title = "Clean Code";
//book.author = "Robert C. Martin";
//book.pages = 464;
//book.language = "English"; 
//book.available = true;

//console.log(book);

//#################

//exemplo 7
//const array = ['title', 'author', 'number-of-pages', 'language', 'available'];
//const value = ["Clean Code", "Robert C. Martin", 464, "English", true];
//const book = {};
//for (let i = 0; i < array.length; i++) {
//    book[array[i]] = value[i];
//}

//for(let key in array){
//    book[array[key]] = value[key];
//}

//console.log(book);

//####################

//exemplo 8
//const book = {
//    title: "Clean Code",
//    author: "Robert C. Martin",
//    pages: 464,
//    language: "English",
//    available: true
//};

//console.log(book.title);
//console.log(book.author);
//console.log(book.pages);
//console.log(book.language);
//console.log(book.available);

//##########################

//exemplo 9
//const book = {
//    title: "Clean Code",
//    author: "Robert C. Martin",
//    pages: 464,
//    language: "English",
//    available: true
//};

//for(let key in book){
//    console.log(key);
//}

//for(let key in book){
//    console.log(book[key]);
//}

//########################

//exemplo 10
//let book = {};
//book.title = "Clean Code";
//book.author = "Robert C. Martin";
//book.pages = 464;
//book.language = "English"; 
//book.available = true;

//let book2 = {};
//for(let key in book){
//    book2[key] = book[key];    
//}

//console.log(book2);

//########################

//UNDEFINED NULL
//exemplo 11
//let book = {};
//book.title = "Clean Code";
//book.author = "Robert C. Martin";
//book.pages = 464;
//book.language = "English"; 
//book.available = true;

//undefined = propriedade não existe
//null = ausencia de valor
//console.log(book.publisher);
//console.log('title' in book);
//console.log('publisher' in book);

//book.available = undefined;
//console.log('available' in book);

//delete book.available;
//console.log('available' in book);

//####################

//COMPARAÇÃO ENTRE OBJETOS
//exemplo 12
//let book1 = {};
//let book2 = {};

//book1.title = "Clean Code";
//book1.author = "Robert C. Martin";
//book1.pages = 464;
//book1.language = "English";
//book1.available = true;

//book2.title = "Clean Code";
//book2.author = "Robert C. Martin";
//book2.pages = 464;
//book2.language = "English";
//book2.available = true;

//compara referencias e não da certo
//console.log(book1 == book2);
//console.log(book1 === book2);

//a não ser que
//console.log(book1 == book1);
//console.log(book2 === book2);

//let equal = true;
//for (let key in book1) {
//    if (book1[key] !== book2[key]) {
//        equal = false;
//    }
//}
//for (let key in book2) {
//    if (book1[key] !== book2[key]) {
//        equal = false;
//    }
//}
//console.log(equal);

//###################

//HERANÇA
//exemplo 13
//const functionalLanguage = {
//    paradigm: 'Functional'
//};

//const scheme = {
//    name: 'Scheme',
//    year: 1975,
//    __proto__: functionalLanguage
//};

//const javascript = {
//    name: 'JavaScript',
//    year: 1995,
//    __proto__: functionalLanguage
//};

//não aparece para economizar letras no console
//console.log(functionalLanguage);
//console.log(scheme);
//console.log(javascript);

//mas se acessarmos diretamente aparece pois quando não existir o atributo
//no objeto ele procura no prototipo e por padrao todos objetos javascript tem o __proto__: Object
//console.log(scheme.paradigm);
//console.log(javascript.paradigm);

//for(let key in scheme){
//    console.log(key, scheme.hasOwnProperty(key));
//}

//##################

//exemplo 14
//MESMO RESULTADO UTILIZANDO A API DE OBJETOS
//const functionalLanguage = Object.create(null);
//functionalLanguage.paradigm = 'Functional';

//const scheme = Object.create(null);
//scheme.name = 'Scheme';
//scheme.year = 1975;
//Object.setPrototypeOf(scheme, functionalLanguage);

//const javascript = Object.create(null);
//javascript.name = 'JavaScript';
//javascript.year = 1995;
//Object.setPrototypeOf(javascript, functionalLanguage);

//console.log(functionalLanguage);
//console.log(scheme);
//console.log(javascript);

//##################
//exemplo 15

//MESMO RESULTADO UTILIZANDO A API DE OBJETOS
//const functionalLanguage = {
//    paradigm: 'Functional'
//};

//const functionalLanguage = Object.create(Object);
//functionalLanguage.paradigm = 'Functional';

//const scheme = Object.create(functionalLanguage);
//scheme.name = 'Scheme';
//scheme.year = 1975;

//const javascript = Object.create(functionalLanguage);
//javascript.name = 'JavaScript';
//javascript.year = 1995;
//javascript.paradigm = 'OO';

//console.log(functionalLanguage);
//console.log(scheme);
//console.log(javascript);

//shadowing
//console.log(javascript.paradigm);
//console.log(javascript.__proto__.paradigm);
//console.log(Object.getPrototypeOf(javascript).paradigm);

//################

//OBJECT API
//exemplo 16
//const javascript = Object.create({});
//Object.assign(javascript, {
//    name: 'Scheme',
//    year: 1975,
//    paradigm: 'OO and Functional'
//},{
//    author:'Brendan Eich',
//    influencedBy: 'Java, Scheme, Self'
//});
//console.log(javascript);

//################
//exemplo 17

//const javascript = {
//    name: 'Scheme',
//    year: 1975,
//    paradigm: 'OO and Functional'
//};
//console.log(Object.keys(javascript));
//console.log(Object.values(javascript));
//console.log(Object.entries(javascript));

//################
//exemplo 18

//const javascript = {
//    name: 'Scheme',
//    year: 1975,
//    paradigm: 'OO and Functional'
//};

//const javascript2 = {
//    name: 'Scheme',
//    year: 1975,
//    paradigm: 'OO and Functional'
//};
//comparando referencias
//não faz milagres
//console.log(Object.is(javascript, javascript2));

//mas olha isso
//console.log(NaN == NaN);
//console.log(NaN === NaN);
//console.log(Object.is(NaN, NaN));

//################
//exemplo 19

//const javascript = {};
//configurable = false, enumerable = false, writable = false, 
//Object.defineProperty(javascript,"name", {
//    enumerable:true,
//    value: "Javascript"    
//});
//não modificou
//javascript.name = 'meu senhor';
//console.log(javascript);
//console.log(javascript.name);

//#################
//exemplo 20

//const javascript = {};
//configurable =  permite que uma determinada propriedade seja apagada
//enumerable =  permite que uma determinada propriedade seja enumerada
//writable =  permite que uma determinada prpriedade seja modificada
//Object.defineProperty(javascript,"name", {
//    value: "Javascript",
//    configurable: false,
//    enumerable: true,
//    writable: true    
//});
//agora com o writable true pode ser modificada
//javascript.name = 'é verdade';
//console.log(javascript);
//console.log(javascript.name);

//não é possivel apagar devido a configurable estar falso
//delete javascript.name;
//console.log(javascript);

//#################
//exemplo 21
//preventExtensions - Impede que o objeto tenha novas propriedades, mas permite modificar as propriedades existentes
//seal - Impede que o objeto tenha novas propriedades ou apague as propriedades existentes, mas permite modificar as propriedades existentes
//freeze - Impede que o objeto tenha novas propriedades. apague ou modifique propriedades existentes.
//                      CREATE READ UPDATE DELETE
//preventExtensions        N    Y     Y     Y   
//seal                     N    Y     Y     N
//freeze                   N    Y     N     N


//                      CREATE READ UPDATE DELETE
//preventExtensions        N    Y     Y     Y   
//const javascript = {
//    name: 'Javascript',
//    year: 1995,
//    paradigm: 'OO and functional'
//};
//Object.preventExtensions(javascript);
//javascript.name = 'ECMAScript';
//não é possivel criar atributos
//javascript.author = 'Brendan Eich';
//deletar é permitido
//delete javascript.year;
//console.log(javascript);
//console.log(Object.isExtensible(javascript));

//                      CREATE READ UPDATE DELETE
//seal                     N    Y     Y     N
//const javascript = {
//    name: 'Javascript',
//    year: 1995,
//    paradigm: 'OO and functional'
//};
//Object.seal(javascript);
//javascript.name = 'ECMAScript';
//não é possivel criar atributos
//javascript.author = 'Brendan Eich';
//deletar não é permitido
//delete javascript.year;
//console.log(javascript);
//console.log(Object.isExtensible(javascript));
//console.log(Object.isSealed(javascript));

//                      CREATE READ UPDATE DELETE
//freeze                   N    Y     N     N

//const javascript = {
//    name: 'Javascript',
//    year: 1995,
//    paradigm: 'OO and functional'
//};
//Object.freeze(javascript);
//não é possível atualizar valores
//javascript.name = 'ECMAScript';
//não é possivel criar atributos
//javascript.author = 'Brendan Eich';
//deletar não é permitido
//delete javascript.year;
//console.log(javascript);
//console.log(Object.isExtensible(javascript));
//console.log(Object.isSealed(javascript));
//console.log(Object.isFrozen(javascript));
//não é permitido mudar o prototipo do objeto sempre que eu uso preventExtensions,seal, freeze
//Object.setPrototypeOf(javascript,{});