/*forEach
A melhor forma de interagirmos com uma array-like é utilizando
o forEach. */

/* 
const imgs = document.querySelectorAll('img');

imgs.forEach(function(item){
  console.log(item);
});
 */

/*Parâmetros do forEach
 O primeiro parâmetro é o callback, ou seja, a função que será
 ativada a cada item. Essa função pode receber três parâmetros:
 valorAtual, index e array.*/

 
const imgs = document.querySelectorAll('img');

imgs.forEach(function(valorAtual, index, array){
  console.log(valorAtual);
  console.log(index);
  console.log(array);
});


/*forEach e Array
forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.
*/

/*
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});
*/

/*Arrow Function
Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos
*/
/*
const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  console.log(item);
});
*/

//Argumentos e Parênteses

//const imgs = document.querySelectorAll('img');

// argumento único não precisa de parênteses
imgs.forEach(item => {
  console.log(item);
});

// multiplos argumentos precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

// sem argumentos precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

//É possível omitir as chaves {} para a função que retorna uma linha

imgs.forEach(item =>console.log(item.src));
//nesse caso não pode colocar ';' após o comando console.log().

console.log('\n\n******Exercício******');
// Mostre no console cada parágrado do site
console.log('\nTags p:');
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((item) => {
  //console.log(item);
});

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
  //console.log('\n',item.innerText);
});
// Como corrigir os erros abaixo:

//const imgs = document.querySelectorAll('img'); //ja tem essa constante.

imgs.forEach((item, index) => {
  console.log(item, index);
});

let j = 0;
imgs.forEach( ()=> {
  console.log(j++);
});

imgs.forEach(() => j++);
console.log(j); 

