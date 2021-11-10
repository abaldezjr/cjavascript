//let expEmail = /john@gmail.com/;
//console.log(typeof expEmail);

//let expEmail2 = new RegExp(/john@gmail.com/);
//console.log(typeof expEmail2);

//let regExp = /john@gmail.com/;
//console.log(regExp.test('john@gmail.com'));

//let regExp = /john@gmail.com/;
//let result = regExp.exec('john@gmail.com');
//console.log(result);
//console.log(result[0]);
//console.log(result.index);
//console.log(result.input);

//META CARACTERES 
//o ponto é um meta caractere que aceita qualquer caractere
//let regExp = /john@gmail.com/;
//let result = regExp.exec('john@gmail.com');
//console.log(result);

//então precisamos escapar caracteres
//let regExp = /john@gmail\.com/;
//let result = regExp.exec('john@gmailxcom');
//console.log(result);

//mudando o indice que foi encontrado
//let regExp = /john@gmail\.com/;
//let result = regExp.exec('E-mail: john@gmail.com');
//console.log(result);

//INICIO(^) E FIM($) DE EXPRESSÕES
//let regExp = /^john@gmail\.com$/;
//let result = regExp.exec('E-mail: john@gmail.com ...');
//console.log(result);

//let regExp = /^john@gmail\.com$/;
//let result = regExp.exec('john@gmail.com');
//console.log(result);

//GRUPOS DE CARACTERES
//[abc] - aceita qualquer caractere dentro do grupo
//[^abc] - não aceita qualquer caractere dentro do grupo, nesse caso a b ou c
//[0-9] - aceita qualquer caractere na range de 0 a 9
//[^0-9] - não aceita qualquer caractere na range de 0 a 9

//let regExp = /^[a-z]@gmail\.com$/;
//let result = regExp.exec('john@gmail.com');
//let result2 = regExp.exec('j@gmail.com');
//console.log(result);
//console.log(result2);

//QUANTIFICADORES
//{n} - Quantifica um número específico.
//{n,} - Quantifica um número maximo.
//{n,m} - Quantifica um número mínimo e um número máximoA
//? - Zero ou um
//* - zero ou mais
//+ - Um ou mais

//let regExp = /^[A-Za-z]+[A-Za-z0-9]+@gmail\.com$/;
//let result = regExp.exec('jOhn@gmail.com');
//console.log(result);

//META CARACTERES
// \w representa o conjunto [a-zA-Z0-9_]
// \W representa o conjunto [^a-zA-Z0-9_]
// \d representa o conjunto [0-9]
// \D representa o conjunto [^0-9]
// \s representa um espaço em branco
// \S representa um não espaço em branco
// \n representa uma quebra de linha
// \t representa um tab

//o \w permite underline cuidado
//let regExp = /^[A-Za-z]\w+@\w+\.\w{2,3}$/;
//let result = regExp.exec('jOhn_98@gma_il.cm');
//console.log(result);

//() GRUPOS DE CAPTURA
//let regExp = /^[A-Za-z]\w+@\w+(\.\w{2,3})+$/;
//let result = regExp.exec('jOhn_98@gma_il.c_m.b_r');
//console.log(result);

//let regExp = /^[a-z][A-Za-z0-9_]+@[A-Za-z0-9]+(\.[A-Za-z0-9]{2,3})+$/;
//let result = regExp.exec('john_98@hotmail.io.br');
//console.log(result);

//extração de valores
//let regExp = /^(\w+)@(\w+(\.\w{2,3})+)$/;
//let result = regExp.exec('mary@hotmail.com');
//console.log(result);
//console.log(result[0]);
//console.log(result[1]);
//console.log(result[2]);
//console.log(result.index);
//console.log(result.input);










