/* getEelementById
Seleciona e retorna elementos do DOM */
const animaisSection = document.getElementById('animais');
console.log(animaisSection);

//tem metodos tbm. tá?
console.log(animaisSection.innerText);

/* getElementByClassName e getElementByTagName retornam uma lista
de elementos do DOM. A lista é ao vivo. */

const gridSection = document.getElementsByClassName('grid-section');
const ul = document.getElementsByTagName('ul');

//é array-like
console.log(gridSection[0]);

/* getElementsBy é um jeito mais antigo e menos usado atualmente.
Hoje em dia, usa-se mais o querySelector */

/* querySelector retorna o primeiro elemento que combinar com 
o seletor CSS */

const animais = document.querySelector('.animais');
const contato = document.querySelector('#contato');
const linkInterno = document.querySelector('[href^="#"]');

console.log(animais);
console.log(linkInterno);

/* querySelectorAll retorna todos os elementos compatíveis
com o seletor CSS em uma NodeList */

const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

//array-like
console.log(titulos[2])
console.log(fotosAnimais[1])
//diferente do getElementsBy, a lista aqui é estática.

/*HTMLCollection vs NodeList
o getElementsByClass retorna uma HTMLCollection, o querrySelectorAll
retorna um NodeList. A NodeList é estática e tem alguns métodos
a mais que o HTMLCollection*/

titulos.forEach(function(item){
  console.log(item.innerText);
});

//tem como transformar um array-like em um array:
const gridSectionArray = Array.from(gridSection);
gridSectionArray.forEach(function(item){
  console.log(item);
});

console.log('******Exercícios******');
// Retorne no console todas as imagens do site

const imagens = document.querySelectorAll('img');
imagens.forEach(function(item){
  console.log(item.src);
});

console.log('----------------------------------------');
// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagens2 = document.querySelectorAll('[src^="img/imagem"]');
imagens2.forEach(function(item){
  console.log(item.src);
});

console.log('----------------------------------------');
// Selecione todos os links internos (onde o href começa com #)

const internos = document.querySelectorAll('[href^="#"]');
internos.forEach(function(item){
  console.log(item);
});


console.log('----------------------------------------');
// Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector('.animais-descricao h2');
console.log(h2);

console.log('----------------------------------------');
// Selecione o último p do site
const lastP = document.querySelectorAll('p');
PArray = Array.from(lastP);
console.log(PArray.at(-1));

