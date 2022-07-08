var simbolo = Symbol();
console.log(typeof simbolo);

var nome = 'André';
var sobrenome = 'Rafael';
var NomeCompleto = nome + ' ' +sobrenome;
console.log(NomeCompleto);

var gols = 1000;
var frase = 'Romário fez ' +gols+ ' gols.';
console.log(frase);
console.log(typeof frase);

//Template String:
frase = `Romário fez ${gols *2} gols`;
console.log(frase);

console.log('***********************************');
// Declare uma variável contendo uma string

// Declare uma variável contendo um número dentro de uma string

// Declare uma variável com a sua idade

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas

// Coloque a seguinte frase em uma variável: It's time

// Verifique o tipo da variável que contém o seu nome

var $string = 'isso é uma string';
var numero = '7';
var idade = 28;
var nom = 'junior', last = 'zimmermann';
var completo = nom + ' ' +last;
var frase2 = 'It\'s time';


console.log($string, numero, idade, completo, frase2);
console.log(typeof nom);