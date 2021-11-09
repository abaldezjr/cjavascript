
//console.log(typeof 'javascript');
//console.log(typeof "javascript");
//console.log(typeof `javascript`);

//console.log('javascript' == 'javascript');
//console.log('javascript' === 'javascript');

//console.log('javascript' == "javascript");
//console.log('javascript' === "javascript");

//console.log('javascript' == `javascript`);
//console.log('javascript' === `javascript`);

//console.log("javascript" == `javascript`);
//console.log("javascript" === `javascript`);

//let s1 = new String('javascript');
//let s2 = new String("javascript");
//let s3 = new String(`javascript`);

//console.log(s1);
//console.log(s2);
//console.log(s3);

//template literal

let host = "localhost";
let port = "3000";
let resource = "users";

//interpolação forçada
let url = "https://"+host+":"+port+"/"+resource;
//console.log(url);

//com crase e ${}
let url2 = `https://${host}:${port}/${resource}`;
//console.log(url2);

let mesesDoAno = "0 - Jan" + 
"1 - Fev"+
"2 - Mar"+
"3 - Abr"+
"4 - Mai"+
"5 - Jun"+
"6 - Jul"+
"7 - Ago"+
"8 - Set"+
"9 - Out"+
"10 - Nov"+
"11 - Dez";
//console.log(mesesDoAno);

let mesesDoAno2 = "0 - Jan\
1 - Fev\
2 - Mar\
3 - Abr\
4 - Mai\
5 - Jun\
6 - Jul\
7 - Ago\
8 - Set\
9 - Out\
10 - Nov\
11 - Dez";
//console.log(mesesDoAno2);

let mesesDoAno3 = "0 - Jan\n\
1 - Fev \n\
2 - Mar\n\
3 - Abr\n\
4 - Mai\n\
5 - Jun\n\
6 - Jul\n\
7 - Ago\n\
8 - Set\n\
9 - Out\n\
10 - Nov\n\
11 - Dez\n";
//console.log(mesesDoAno3);


let mesesDoAno4 = `0 - Jan
1 - Fev
2 - Mar
3 - Abr
4 - Mai
5 - Jun
6 - Jul
7 - Ago
8 - Set
9 - Out
10 - Nov
11 - Dez`;
//console.log(mesesDoAno4);

//GRUPO DE FUNÇÕES 1
//console.log('javascript'.length);
//console.log('PHP'.indexOf('P'));
//console.log('PHP'.lastIndexOf('P'));
//console.log('cobol'.toUpperCase());
//console.log('algol'.toLowerCase());

//GRUPO DE FUNÇÕES 2
//console.log('javascript'.charAt(1));
//console.log('javascript'.charCodeAt(1));
//console.log(String.fromCharCode(97));

//GRUPO DE FUNÇÕES 3
//console.log('javascript'.includes('java'));
//console.log('ruby'.startsWith('r'));
//console.log('Erlang'.endsWith('lang'));


//GRUPO DE FUNÇÕES 4
//console.log('a'.localeCompare('b'));
//console.log('a'.localeCompare('a'));
//console.log('b'.localeCompare('a'));

//console.log('a'.charCodeAt(0));
//console.log('b'.charCodeAt(0));
//console.log('á'.charCodeAt(0));

//console.log('a' < 'b');
//console.log('á' < 'b');

//console.log('a'.localeCompare('b'));
//console.log('á'.localeCompare('b'));

//GRUPO DE FUNÇÕES 5
//console.log("c++".match(/\+/g));
//console.log("Java".search(/a/));//encontrei o a na posição 1
//console.log("javascript".replace('Java', 'Ecma'));
//console.log("javascript".replace(/a/g, 4));

//GRUPO DE FUNÇÕES 6
//console.log('javascript'.slice(0, 4));
//console.log('javascript'.slice(4));
//console.log('javascript'.slice(0, -6));
//console.log('c,java,javascript,ruby'.split(','));
//console.log('javascript'.substring(0, 4));
//console.log('javascript'.substring(4, 0));
//console.log('javascript'.substring(4));

//GRUPO DE FUNÇÕES 7
//console.log('java'.concat('script'));
//console.log('script'.padStart(10, 'java'));
//console.log('c'.padEnd(3,'+'));
//console.log('c'.concat('+'.repeat(2)));
//console.log(' Self '.trim());
//console.log(' scheme '.trimLeft());
//console.log('perl '.trimRight());



