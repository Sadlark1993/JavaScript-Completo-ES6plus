//Variaveis declaradas dentro de funcoes nao sao acessadas fora das mesmas.

var carro = 'Belina';
function mostrarCarro(){
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro();
console.log(carro);

/* Declarar variaveis sem a palavra chave var, const ou let, 
cria uma variável global. Isso é um erro. Se usar 'use strict'
isso será impedido. */

/* Variaveis var vazam blocos (mas nao funções). Por isso, com 
a introdução do ES6 a melhor forma de declararmos uma variável
é com o const e let, pois essas respeitam o escopo de bloco. */

var fruta='uva';
if(true){ 
  var fruta = 'Pera';
  console.log(fruta);
}//se for false, variavel sera redelcarada mas nao reatribuida

console.log(fruta);

//A partir de agora, usaremos apenas const e let
let cor = 'azul';
{
  let cor = 'roxo';
  console.log(cor);
}// a variavel nao foi redeclarada, foi declarada outra.
//let nao permite redeclaração.
console.log(cor);

console.log('******Exercícios******');
// Por qual motivo o código abaixo retorna com erros?
{
  var madeira = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
//console.log(madeira, marca, portas); //pq marca e let nao foram declaradas nesse escopo

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
let numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

