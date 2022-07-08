/* Document Object Model (DOM) 
É uma interface que representa documentos HTML e XML atrafés de objetos. 
Com ela é possível manipular a estrutura, estilo e conteúdo desses documentos.
*/

console.log(window);
//window é o objeto global do browser
console.log(window.innerHeight); //retorna o height do browser.
//Ao inspecionar elemento com o Chrome, você está vendo a representacao oficial do DOM.

//Objetos principais do DOM: window e document
window.alert('Isso é um alerta');
document.querySelector('h1'); //Seleciona o primeiro h1.
document.body; //retorna o body.

/*
Node
Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.
*/

const titulo = document.querySelector('h1');
titulo.innerText; //retorna o texto da tag;
titulo.classList; //retorna a lista de classes;
titulo.id; //retorna o id;
titulo.offsetHeight; //retorna a altura do elemento;

function msg() {
  window.alert('Clicou né safadinho?');
}

titulo.addEventListener('click', msg);

console.log('******Exercício******');
// Retorne o url da página atual utilizando o objeto window
const url = window.document.URL;
console.log(url);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

let ElementoAtivo = document.querySelector('.ativo');

// Retorne a linguagem do navegador
console.log(navigator.language);

// Retorne a largura da janela 
console.log(window.innerWidth);
