
/*
    OuterHTML, innerHTML e innerText

* Propriedades que retornam uma string contendo o html ou texto.
É possivel atribuir um novo valor para as mesmas.
*/

const menu = document.querySelector('.menu');

// menu.outerHTML; //todo o html do elemento
// menu.innerHTML; //html interno
// menu.innerText; //texto, sem tags

// menu.innerText =  '<p>Texto</p>'; //a tag vai como texto
// menu.innerHTML =  '<p>Texto</p>'; //a tag é renderizada

/* 
    Traversing
* Como navegar pelo DOM, utilizando suas propriedades e métodos.
*/

// const lista = document.querySelector('.animais-lista');

// lista.parentElement; //pai
// lista.parentElement.parentElement; //pai do pai
// lista.previousElementSibling; //elemento acima
// lista.nextElementSibling; //elemento abaixo

// lista.children; //HTMLCollection com os filhos
// lista.children[0]; //primeiro filho
// lista.children[--lista.children.length]; //ultimo filho

// lista.querySelectorAll('li'); //todas as LI'S
// lista.querySelector('li:last-child'); //ultimo filho

/*
    Element vs Node

* Element's representam um elemento html, ou seja, uma tag. Node
representa um nó, e pode ser um elemento (Element), texto, comentario,
quebra de linha...
*/

// const lista = document.querySelector('.animais-lista');

// lista.previousElementSibling; //elemento acima
// lista.previousSibling; //node acima

// lista.firstChild; //primeiro node child
// lista.childNodes; //todos os node child

//geralmente estamos atras de um elemento, e nao qualquer node em si.

/**
 * Manipulando Elementos

  É possivel mover elementos no dom com metodos de Node.
 */
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// contato.appendChild(lista); //move lista para o final de contato
// contato.insertBefore(lista, titulo); //insere a lista antes de titulo
// //contato.removeChild(titulo); //remove titulo de contato
// contato.replaceChild(lista, titulo); //substitui titulo por lista

/*
 * Novos Elementos

  Podemos criar novos elementos com o método createElement()
*/

// const animais = document.querySelector('.animais');

// const novoH1 = document.createElement('h1');
// novoH1.innerText = 'Novo Título';
// novoH1.classList.add('titulo');
// animais.appendChild(novoH1);

/*
 * CLonar Elementos

  Todo elemento selecionado é único. Para criarmos um novo elemento
  baseado no anterior, é necessário utilizar o método cloneNode()
*/

// const titulo = document.querySelector('h1');
// const titulo2 = document.querySelector('h1');
// const novoTitulo = titulo;
// //titulo, titulo2 e novoTitulo apontam para o mesmo elemento. Modificar um modificará o outro tbm

// const cloneTitulo = titulo.cloneNode(true);
// const contato = document.querySelector('.contato');
// contato.appendChild(cloneTitulo);

//true sinaliza para incluir filhos

console.log('******Exercício******');
// Duplique o menu e adicione ele em copy
//const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);
copy.appendChild(menu);

// Selecione o primeiro DT da dl de Faq
const firstDt = document.querySelector('.faq dl dt');

// Selecione o DD referente ao primeiro DT
const firstDd = document.querySelector('.faq dl dd');


// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
const faq = document.querySelector('.faq');
faq.innerHTML = animais.innerHTML;

