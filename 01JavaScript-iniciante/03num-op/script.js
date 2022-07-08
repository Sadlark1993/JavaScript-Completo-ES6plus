var pi = 3.14;
var exp = 2e10; //2*10^10.  (2 seguido de 10 zeros, a quantidade de zeros tbm pode ser negativa.)
//precisao ate 15 digitos.
console.log(exp);

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50 (number);
var multiplicacao = '100' * '2'; // 200 (number);
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

console.log(typeof multiplicacao, typeof subtracao, isNaN(divisao));

var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)

var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

console.log('******Exercício*****');

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //35?

// Crie duas expressões que retornem NaN

// Somar a string '200' com o número 50 e retornar 250

// Incremente o número 5 e retorne o seu valor incrementado

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

//respostas:
var letras = +'abc';
var letras2 = 'abc';
var nao = 2 * letras2;
console.log(letras, nao);
console.log(+'200'+50);
var inc = 5;
console.log(++inc);
console.log(numero/2 + unidade);