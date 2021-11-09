//console.log(typeof true);
//console.log(typeof false);
//console.log(typeof new Boolean(true));
//console.log(typeof new Boolean(false));

//let condition = true;

//if(condition){
//    console.log('É verdadeiro!');
//}else {
//    console.log('É falso!');
//}

//let condition2 = false;

//if(condition2){
//    console.log('É verdadeiro!');
//}else {
//    console.log('É falso!');
//}

//COERSÃO DE TIPO
//let condition3 = new Boolean(true);

//if(condition3){
//   console.log('É verdadeiro!');
//}else {
//    console.log('É falso!');
//}

//let condition4 = new Boolean(false);

//if(condition4){
//    console.log('É verdadeiro!');
//}else {
//    console.log('É falso!');
//}

//APENAS ESTES 6 VALORES SÃO EVALUADOS PARA FALSO

// PARA OS NÚMEROS 0 É FALSO E NOT A NUMBER É FALSO, O RESTO É VERDADEIRO
//console.log(!!0);
//console.log(!!NaN);

// PARA STRING SÓ STRING VAZIA É FALSO
//console.log(!!"");


//console.log(!!false);
//console.log(!!undefined);
//console.log(!!null);

//--VALORES VERDADEIROS EXEMPLOS--
//console.log(!!-10);
//console.log(!!'Javascript');
//console.log(!!{});
//console.log(!!/Javascript/);
//console.log(!!new Date());
//console.log(!!function (){});

//OPERADORES BOOLEANOS
//console.log(1 == 2);
//console.log(10 === 10);
//console.log('a' != 'b');
//console.log(3 !== 2);
//console.log(6 > 7);
//console.log(5 >= 5);
//console.log('z' < 'x');
//console.log('c' <= 'c');

//console.log(0 == '');
//console.log(0 == '0');
//console.log(false == undefined);
//console.log(false == null);
//console.log(null == undefined);
//console.log(1 == true);
//console.log(0 == false);
//console.log(0 == '\n');

//console.log(0 === '');
//console.log(0 === '0');
//console.log(false === undefined);
//console.log(false === null);
//console.log(null === undefined);
//console.log(1 === true);
//console.log(0 === false);
//console.log(0 === '\n');

//console.log(0 || 2);
//console.log(1 || 2);
//console.log(1 && 2);
//console.log(0 && 2);

//exemplo muito louco
//codigo 1 - max fica undefined e da NaN
//function generatedSerial(max){
//    return Math.floor(Math.random() * max);
//}

//console.log(generatedSerial());

//codigo 2 - neste exemplo se max é undefined ele recebe 1000
//function generatedSerial(max){
//    if (max == undefined){
//       max = 1000;
//   }
//    return Math.floor(Math.random() * max);
//}
//console.log(generatedSerial());

//!!0 !!NaN !!"" !!false !!undefined !!null
//codigo 3 - testando todos os valores possíveis que de falso com ==
//function generatedSerial(max){
//    console.log(max == undefined);
//    console.log(max == 0);
//    console.log(isNaN(max));
//    console.log(max == false);
//    console.log(max == null);
//        null == undefined                                             null == null
//    if (max == undefined || max == 0 || isNaN(max) || max == false || max == null){
//      max = 1000;
//   }
//    return Math.floor(Math.random() * max);
//}

//console.log(generatedSerial(null));

//codigo 4 - testando todos os valores possíveis que de falso com ===
//function generatedSerial(max){
//    console.log(max === undefined);
//    console.log(max === 0);
//    console.log(isNaN(max));
//    console.log(max === false);
//    console.log(max === null);
//    if (max === undefined || max === 0 || isNaN(max) || max === false || max === null){
//      max = 1000;
//   }
//    return Math.floor(Math.random() * max);
//}

//console.log(generatedSerial(null));

//codigo 6 - usando NOT na frente o valor se transforma em boolean e usandoa lista de valores falsos acaba
// que podemos fazer uma logica simples
//function generatedSerial(max) {
    //max === undefined || max === 0 || isNaN(max) || max === false || max === null
//    if (!max) {
//        max = 1000;
//    }
//    return Math.floor(Math.random() * max);
//}

//console.log(generatedSerial());

//codigo 7 - usando NOT na frente o valor se transforma em boolean e usandoa lista de valores falsos acaba
// que podemos fazer uma logica simples
//function generatedSerial(max) {
    //usando a logica dos operadores || e &&
    //console.log(0 || 2);
    //console.log(1 || 2);
    //console.log(1 && 2);
    //console.log(0 && 2);
    //temos que se max for falso ele pega 1000 senão pega max
 //   max = max || 1000;
 //   return Math.floor(Math.random() * max);
//}

//console.log(generatedSerial());

//codigo 8 - podemos ajeitar o codigo ainda mais
//function generatedSerial(max) {
//    return Math.floor(Math.random() * (max || 1000));
//}

//console.log(generatedSerial());

//OPERADOR TERNARIO
//console.log((10)?'bom':'mau');
//console.log((0)?'bom':'mau');







