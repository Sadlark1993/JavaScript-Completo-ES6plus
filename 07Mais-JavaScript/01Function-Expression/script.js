/* São duas as formas mais comuns de declararmos uma função. A que utilizamos até o momento e a FUNCTION EXPRESSION

FUNCTION EXPRESSION
É criada a partir da declaração de uma variável, na qual assinalamos uma função. Esta função pode ser anônima ou nomeada. A mesma poderá ser ativada através da variável assinalada.
*/

const somar = function(a,b){
    return a+b;
}

console.log(somar(4,2));//6

//podemos usar arrow functions
const quadrado = a=>a*a;
console.log(quadrado(8));

/* 
O interessante em function expression, eh que a funcao nao vai para o Objeto Window. Anulando assim, a possibilidade
de substituir uma funcao jah existente la e causar erro com um codigo de outra pessoa ou um plugin q use essa funcao.
Function Expression deixa o codigo mais organizado tbm: declara primeiro, usa depois.
*/

/* IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION
Antes da introdução de modules e da implementação do escopo de bloco, a forma mais comum utilizada para isolarmos o escopo de um código JavaScript era através das chamadas IIFE's. */

var instrumento = 'Violão';

(function() {
  // código isolado do escopo global
  var instrumento = 'Guitarra';
  console.log(instrumento); // Guitarra
})();

console.log(instrumento); // Violão


console.log('********Exercícios********');

// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

// Como podemos utilizar
// a função abaixo.

(function(){ //ta isolado
const active = callback => callback();

const call = function(){
    console.log('chamouuuuu');
}

active(call);
})();