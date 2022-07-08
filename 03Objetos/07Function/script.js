
function areaQuadrado(lado){
  return lado*lado;
}

//um jeito de criar uma funcao que vc nunca vai usar na vida
const perimetroQuadrado = new Function('lado', 'return lado*4;');

areaQuadrado.length; //retorna o numero de argumentos da funcao.
console.log(areaQuadrado.name); //retorna o nome da funcao

/* funcao.call(this, arg1, arg2...) chama a funcao assim como funcao(). A diferenca, e que 
  o primeiro argumento recebe o valor do 'this'.
    Por padrao, o valor do this eh 'window'. Que eh o objeto base.
*/

window.marca = 'carro';
window.ano = 1998;

function descricaoCarro(texto){
  console.log(this.marca + ' ' + this.ano+texto);
}

descricaoCarro(' oii'); //carro 1998 oii

descricaoCarro.call({marca: 'Chevrolet', ano: 2020}, ' oii'); //Chevrolet 2020 oii

//todos os metodos e funcoes tem call:
const carros = ['Fiat', 'VW', 'Mercedes'];
const frutas = ['Banana', 'Pera', 'Uva'];

carros.forEach.call(frutas, (item)=>{
  console.log(item);
}); // ele vai executar na array frutas. O this nesse caso, eh a propria array. E ele a usa.


function dom(tag){
  console.log(this);
  this.element = document.querySelector(tag);
}

dom.prototype.addClasse = function(classe){
  console.log(this);
  this.element.classList.add(classe);
}; 

dom('li');//se eu chamo a funcao, o this eh o window.
const ul = new dom('ul'); //se eu a uso pra construir um objeto, o this passa a ser o objeto.
ul.addClasse('ativo'); //aqui tbm o this eh o objeto.

const li = {
  element: document.querySelector('li'),
};

//por o 'this' daqui ser o objeto 'li', o metodo adicionou a classe na tag do objeto li e nao do ul
ul.addClasse.call(li, 'inativo'); 
/* aqui, o 'ul' estah sendo inutil. Esse exemplo foi apenas para fins didaticos. Abaixo temos um 
exemplo do mundo real: */

dom.prototype.addClasse.call(li, 'lista-1');
//utilizou o metodo no objeto li, mesmo sem esse objeto possuir esse metodo.

/*modificar um metodo construtor original nao eh uma boa pratica, isso aqui eh so pra mostrar o this do array*/
Array.prototype.mostrarThis = function(){ 
  console.log(this);
}
carros.mostrarThis(); //o 'this' do array, eh o proprio array.

Array.prototype.pop.call(frutas);
//isso, eh a mesma coisa que isto:
frutas.pop();

//Quando precisaremos usar Array.prototype.metodo.call(arrayLike)?
//Quando tivermos um array-like que nao possui o metodo de Array que precisamos.

const arrayLike = {
  0: 'item 1',
  1: 'item 2',
  2: 'item 3',
  3: 'item 4',
  length: 4,
};

/* 
arrayLike.forEach((item)=>{
  console.log(item);
}); //isso nao funciona
 */

Array.prototype.forEach.call(arrayLike, (item) => {
  console.log(item);
}); //jah isso, funciona.

const li2 = document.querySelectorAll('li');
const lista1 = Array.prototype.filter.call(li2, (item)=>{
  return item.classList.contains('inativo');
});

console.log(lista1); //filtrei a nodeList usando um metodo de Array.

//o Apply eh igual o Call, a diferenca eh que os argumentos devem estar em um array:

const numeros = [55, 152, 818, 33, 165, 257];

//o null, voce usa para nao modificar o this.
console.log(Math.max.call(null, 55,152,818,33,165,257));
console.log(Math.max.apply(null, numeros)); //o resultado sera o mesmo. esse aqui aceita array.

/* 
  O bind eh parecido com o call, a diferenca eh que ele nao ativa a funcao, apenas retorna ela. Para usa-la, 
deve-se ativar a funcao pela variavel que a recebeu.
*/

const lista2 = Array.prototype.filter.bind(li2, (item)=>{ 
  return item.classList.contains('inativo');
});//ele nao ta retornando a lista, ta retornando a funcao.

console.log(lista2()); //a funcao vai executar aqui

//da pra usar o bind pra encurtar a funcao (mudar o nome dela).

const $ = document.querySelectorAll.bind(document);
li3 = $('li'); //praticamente mudou o jeito de chamar a funcao.
console.log(li3);

/* nao eh necessario passar todos os argumentos na hora do bind. Pode deixar pra passar na hora de 
chamar a funcao/metodo */

