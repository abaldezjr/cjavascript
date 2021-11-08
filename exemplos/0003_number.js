//numeros binarios, hexadecimais, octais
//let number = new Number(123.4);
//console.log(number.toExponential(10));
//console.log(number.toFixed(2));
//console.log(number.toPrecision(10));

//binarios
//console.log(0b0);
//console.log(0b1);
//console.log(0b10);
//console.log(0b11);
//console.log(0b100);
//console.log(0b101);
//console.log(0b110);
//console.log(0b111);
//console.log(0b1000);
//console.log(0b1001);
//console.log(0b1010);
//console.log(0b1011);
//console.log(0b1100);
//console.log(0b1101);
//console.log(0b1110);
//console.log(0b1111);
//console.log(0b10000);
//console.log(0b10001);
//console.log(0b10010);
//console.log(0b10011);
//console.log(0b10100);
//console.log(0b10101);
//console.log(0b10110);
//console.log(0b10111);
//console.log(0b11000);
//console.log(0b11001);
//console.log(0b11010);
//console.log(0b11011);
//console.log(0b11100);
//console.log(0b11101);
//console.log(0b11110);
//console.log(0b11111);
//console.log(0b100000);

//hexadecimais
//console.log(0x0);
//console.log(0x1);
//console.log(0x2);
//console.log(0x3);
//console.log(0x4);
//console.log(0x5);
//console.log(0x6);
//console.log(0x7);
//console.log(0x8);
//console.log(0x9);
//console.log(0xA);
//console.log(0xB);
//console.log(0xC);
//console.log(0xD);
//console.log(0xE);
//console.log(0xF);
//console.log(0x10);
//console.log(0x11);
//console.log(0x12);
//console.log(0x13);
//console.log(0x14);
//console.log(0x15);
//console.log(0x16);
//console.log(0x17);
//console.log(0x18);
//console.log(0x19);
//console.log(0x1A);
//console.log(0x1B);
//console.log(0x1C);
//console.log(0x1D);
//console.log(0x1E);
//console.log(0x1F);
//console.log(0x20);

//octais
//console.log(00);
//console.log(01);
//console.log(02);
//console.log(03);
//console.log(04);
//console.log(05);
//console.log(06);
//console.log(07);
//console.log(010);
//console.log(011);
//console.log(012);
//console.log(013);
//console.log(014);
//console.log(015);
//console.log(016);
//console.log(017);
//console.log(020);
//console.log(021);
//console.log(022);
//console.log(023);
//console.log(024);
//console.log(025);
//console.log(026);
//console.log(027);
//console.log(030);
//console.log(031);
//console.log(032);
//console.log(033);
//console.log(034);
//console.log(035);
//console.log(036);
//console.log(037);
//console.log(040);

//OPERADORES NUMÉRICOS
//let contador = 0;
//console.log(contador++);
//console.log(contador);
//console.log(++contador);
//console.log(contador);

//let result = 10;
//result += 2;
//result -= 5;
//result *= 8;
//result /= 2;
//result %= 6;
//console.log(result);

//let n1 = 10;
//let n2 = 5;
//console.log(n1 + n2);
//console.log(n1 - n2);
//console.log(n1 * n2);
//console.log(n1 / n2);
//console.log(n1 % n2);

//OPERAÇÕES COM NÚMEROS BINÁRIOS

//operação binário or (acaba somando)
//let n1 = 4;
//let n2 = 3;
//console.log(n1.toString(2).padStart(32,0));
//console.log(n2.toString(2).padStart(32,0));
//console.log(n1 | n2);

//operação binaria and
//let n1 = 3;
//let n2 = 1;
//console.log(n1.toString(2).padStart(32,0));
//console.log(n2.toString(2).padStart(32,0));
//console.log(n1 & n2);

//operação binaria xor
//let n1 = 5;
//let n2 = 2;
//console.log(n1.toString(2).padStart(32,0));
//console.log(n2.toString(2).padStart(32,0));
//console.log(n1 ^ n2);

//operação binaria not
//let n1 = 2;
//let n2 = -3;
//console.log(n1.toString(2).padStart(32,0));
//console.log((n2 >>> 0).toString(2).padStart(32,0));
//console.log(~n1);

//deslocamento de bits para esquerda
//let n1 = 4;
//let r = (n1 << 2);
//console.log(r.toString(2).padStart(32, 0));
//console.log(r);

//deslocamento de bits para direita
//let n1 = 4;
//let r = (n1 >> 2);
//console.log(r.toString(2).padStart(32, 0));
//console.log(r);

//deslocamento com sinal junto
//let n1 = -2;
// >>> com mudança de sinal
//let r = (n1 >>> 1);
//console.log(r.toString(2).padStart(32, 0));
//console.log(r);

//Conversão numérica

//console.log(Number("10"));
//console.log(Number("9.9"));
//console.log(Number("0xFF"));
//console.log(Number("0b10"));
//console.log(Number("0o10"));
//console.log(Number());
//console.log(Number("Javascript"));

//coisas estranhas
//console.log(~~"10");
//console.log(+"10");
//console.log("10" + 2); //102
//console.log("10" - 2); //8
//console.log("10" * 2); //20
//console.log("10" / 2); //5

//conversão de bases

//NUMERICO PARA STRING
//hex to dec
//console.log((0xA).toString(10));

//bin to hex
//console.log((0b1010).toString(16));

//oct to hex
//console.log((010).toString(16));

//dec to oct
//console.log((10).toString(8));

//STRING PARA NUMERICO
//console.log(parseInt("10", 10));
//console.log(parseInt("9.9", 10));
//console.log(parseInt("A", 16));
//console.log(parseInt("11", 2));
//console.log(parseInt("10", 10));
//console.log(parseInt("010", 8));

//console.log(parseFloat("10"));
//console.log(parseFloat("2.5"));
//console.log(parseFloat("0xFF")); //entende o primeiro o numero e trata o resto como string e elimina
//console.log(parseFloat("0b10"));

//IEEE 754 estudar

//Math
//constantes
//console.log(Math.E);
//console.log(Math.PI);
//console.log(Math.SQRT2);
//console.log(Math.LN10);
//console.log(Math.LN2);
//console.log(Math.SQRT1_2);
//console.log(Math.LOG10E);
//console.log(Math.LOG2E);

//funções matematicas

//tomar muito cuidado com isso
//console.log(Math.abs(10));
//console.log(Math.abs(-10));
//console.log(Math.ceil(1.1));
//console.log(Math.ceil(-1.1));
//console.log(Math.floor(9.9));
//console.log(Math.floor(-9.9));
//console.log(Math.round(4.5));
//console.log(Math.round(-4.5));

//
//console.log(Math.cbrt(8));
//console.log(Math.cos(Math.PI / 3));
//console.log(Math.exp(1));
//console.log(Math.hypot(3,4));
//console.log(Math.log(1));
//console.log(Math.pow(2,10));
//console.log(Math.sin(Math.PI / 2));
//console.log(Math.sqrt(4));
//console.log(Math.tan(Math.PI / 4));

console.log(Math.min(1,2,3));
console.log(Math.max(1,2,3));
console.log(Math.random());



