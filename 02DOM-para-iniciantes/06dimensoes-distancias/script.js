/*width e height
Estas são as propriedades e métodos dos objetos Element 
e HTMLElement, a maioria delas são Read Only*/

const section = document.querySelector('.animais');

section.clientHeight; //height + padding;
section.offsetHeight; //height+padding+border;
section.scrollHeight; //height total, mesmo dentro do scroll
//mesma coisa pra width.

//offsetTop e offsetLeft
/*Distância entre o topo do elemento e o topo da página */
section.offsetTop;

/*Distância entre o canto esquerdo do elemento e o canto 
esquerdo da página */
section.offsetLeft;

//getBoudingClientRect()
/*Método que retorna um objeto com valores de width,
height, distâncias dos elementos... */
const rect = section.getBoundingClientRect();
rect.height; //height do elemento
rect.width; //width do elemento
rect.top; //distancia entre o topo do elemento e o scroll

//Window
window.innerWidth; // width da janela
window.outerWidth; //soma o dev tools tbm
window.innerHeight; //height da janela
window.outerHeight; //soma a barra de endereço tbm

window.pageYOffset; //distância total do scroll vertical
window.pageXOffset; //distância total do scroll horizontal

if(window.innerWidth < 600){
  console.log('Tela menor q 600px');
}

//matchMedia()
//Utilizee um media-query como no CSS para verificar a largura
//do browser

const small = window.matchMedia('(max-width: 600px)');
if(small.matches){
  console.log('Usuário Mobile');
}else{
  console.log('Usuário Desktop');
}
console.log('\n\n******Exercício******');
// Verifique a distância da primeira imagem
// em relação ao topo da página
img = document.querySelector('img');
console.log(img.offsetTop);
/*
imgRect = img.getBoundingClientRect();
console.log(imgRect.top);
*/

// Retorne a soma da largura de todas as imagens
imgs = document.querySelectorAll('img');
let totalW = 0;
imgs.forEach((item) => {
  totalW += item.clientWidth;
});
console.log(totalW);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
links = document.querySelectorAll('a');
let countW = 0;
let countH = 0;

links.forEach((item) => {
  if(item.clientHeight < 48){
    console.log(item);
    console.log('Esse link tem o height menor q 48px');
    countH++;
  }
  if(item.clientWidth < 48){
    console.log(item);
    console.log('Esse link tem o width menor q 48px');
    countW++;
  }
});

console.log(`\n\nTemos ${countH} links com altura insuficiente e ${countW} links com largura insuficiente.`);

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const mobile = window.matchMedia('(max-width: 719px)').matches;
if(mobile){
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}

