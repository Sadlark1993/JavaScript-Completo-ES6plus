
/*
  addEventListener
Adiciona uma função ao elemento, esta chamada de callback será ativada
assim que certo evento ocorrer neste elemento
*/

const img = document.querySelector('img');

//elemento.addeventListener(event, callback, options)
/*
img.addEventListener('click', function() {
  console.log('Clickou');
});
*/

/*
  Callback
É uma boa prática separ a função de callback do addEventListener.
*/

/*
function callback(){
  console.log('Clickou');
}

img.addEventListener('click', callback);
//lembre-se de não chamar a função no argumento. Apenas passe o nome dela.
*/

/*
  event
O primeiro parâmetro do callback é referente ao evento que ocorreu.
*/

/*
function callback(event){
  console.log(event);
}
img.addEventListener('click', callback);
*/


//Propriedades do event

const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this  
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log('\n\n aa\n\n');
  console.log(currentTarget, '\n target: ', target, type, path);
}

animaisLista.addEventListener('click', executarCallback);


/*
  event.preventDefault()
Previne o comportamento padrão do evento no browser. No caso de um 
link externo, por exemplo, irá previnir que o link seja ativado.
*/

const linkExterno = document.querySelector('a[href^=http]');

function clickNoLink(event){
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);
//lembe-se de não chamar a função ao passá-la como argumento.

/*
  this
A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.
*/

/*
function callback(event){
  console.log(this);
  console.log(this.getAttribute('src'));
}

img.addEventListener('click', callback);
*/
/*
  Diferentes Eventos
Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também.
*/

/*
const h1 = document.querySelector('h1');

function callback(event) {
  console.log(event.type, event);
}

h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);
window.addEventListener('keydown', callback);
*/

/*
  Keyboard
Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard.
*/

function handleKeyboard(event){
  if(event.key==='a')
    document.body.classList.toggle('azul');
  else if(event.key === 'v')
    document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', handleKeyboard);

/*
  forEach e Eventos
O método do addEventListener é adicionado à um único elemento,
então é necessário um loop entre elementos de uma lista, para
adicionarmos à cada um deles.
*/

const imgs = document.querySelectorAll('img');

function imgSrc(event){
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((item) => {
  item.addEventListener('click', imgSrc);
});

console.log('\n\n******Exercício******');
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll('a');

function handleLinks(event){
  event.preventDefault();
  links.forEach((link) => {
    if(link.classList.contains('ativo'))
      link.classList.remove('ativo');
  });

  event.currentTarget.classList.add('ativo');
}

links.forEach((link) => {
  link.addEventListener('click', handleLinks);
})



// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const tudo = document.querySelectorAll('body *');

function mostrar(event){
  console.log(event.currentTarget);
}
/*
tudo.forEach((item) => {
  item.addEventListener('click', mostrar);
});
*/

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function remover(event){
  event.target.remove();
}


/* tudo.forEach((item) => {
  item.addEventListener('click', remover);
}); */

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

const texto = document.querySelectorAll('p, h1, h2, h3, a, li, dd, dt, blockquote, cite');

function increase(event){
  if(event.key === 't'){
    texto.forEach((item) => {
      let style = window.getComputedStyle(item, null).getPropertyValue('font-size');
      currentSize = parseFloat(style);
      item.style.fontSize = (currentSize + 1) + 'px';
      console.log('pertou');
    });

    //resposta do professor.
  } else if(event.key === 'd'){
    document.documentElement.classList.toggle('texto-maior');
  }
}

window.addEventListener('keydown', increase);

//Resposta do professor pra essa ultima:

