/*classList
Retorna uma lista com as classes do elemento. Permite adicionar,
remover e verificar se contém.
*/

const menu = document.querySelector('.menu');

console.log(menu.className); //String
console.log(menu.classList); //lista de classes
menu.classList.add('ativo');
menu.classList.remove('ativo');
menu.classList.add('ativo', 'mobile');
menu.classList.toggle('ativo'); //adiciona/remove a classe
console.log(menu.classList.contains('ativo')); //boolean

menu.classList.replace('ativo', 'inativo');
console.log('-------------\n\n');

//attributes
//retorna uma array-like com os atributos do elemento.

const animais = document.querySelector('.animais');

console.log(animais.attributes);
console.log(animais.attributes[0]);
console.log('-------------\n\n');


//getAtribute e setAttribute
//getter e setters dos trecos
const img = document.querySelector('img');

console.log(img.getAttribute('src'));
img.setAttribute('alt', 'Texto Alternativo'); // muda/atribui o alt
console.log(img.hasAttribute('id')); 
img.removeAttribute('alt');

console.log(img.hasAttributes()); //true/false se tem algum atributo
console.log('----------------\n\n');

// Adicione a classe ativo a todos os itens do menu
const menus = document.querySelectorAll('.menu *');

menus.forEach((item) => {
  item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menus.forEach((item, index) => {
  if(index !== 0){
    item.classList.remove('ativo');
  }
});

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
let cont = 0;
imgs.forEach((item, index) => {
  if(!item.hasAttribute('alt')){
    console.log(item, 'não tem atributo alt');
    cont++;
  }
});
console.log(cont, 'tags img não possuem o atributo alt');

// Modifique o href do link externo no menu
linkExterno = document.querySelector('.menu [href^="https://"]');
if(linkExterno){
  linkExterno.setAttribute('href', 'https://xvideos.com');
}else{
  console.log('a sacanagem falhou');
}

