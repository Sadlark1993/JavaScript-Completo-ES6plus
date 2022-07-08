/*
 * Objetos
Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. 

*/

/* 
const carro = {
  marca: 'Marca',
  preco: 0,
}


const honda = carro;
honda.marca = 'Honda';
honda.preco = 4000;

const fiat = carro;
fiat.marca = 'Fiat';
fiat.preco = 3000;
//isso aqui nao funciona. honda, fiat e carro apontam para os mesmos dados
//na memoria
*/

/*
 * Constructor Functions
  Para criar objetos com as mesmas características, temos as Constructior
Functions, que são responsáveis por construir novos objetos sempe que
chamar-mos as mesmas:
*/
/*
//por padrão iniciam com letra maiúscula.
function Carro() {
  this.marca = "marca";
  this.preco = 0;
}

const honda = new Carro();
honda.marca = "Honda";
honda.preco = 4000;

const fiat = new Carro();
fiat.marca = "Fiat";
fiat.preco = 3000;
*/

/*
 * Usando Parâmetros e Argumentos
 */
function Carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

const honda = new Carro("Honda", 4000);
const fiat = new Carro("Fiat", 3000);


//Constructor Function 2:

function Carro2(marca, precoInicial){
  const taxa = 1.2;
  const precoFinal = precoInicial*taxa; //os objetos nao terao acesso a esse valor.
  this.marca = marca;
  this.preco = precoFinal; //os objetos terao acesso a esse valor.
}

const mazda = new Carro2('Mazda', 5000);

//*****Mundo Real Agora: */

function Dom(seletor){
  this.element = function(){
    return document.querySelector(seletor);
  }

  this.ativar = function(){
    this.element().classList.add('ativar');
  }
}

//const li = new Dom('li');
//const ul = new Dom('ul');
const lastLi = new Dom('li:last-child');

lastLi.ativar();


console.log('\n\n****Exercícios****');

// Transforme o objeto abaixo em uma Constructor Function 
function Pessoa(){ 
  this.nome= 'Nome pessoa';
  this.idade= 0; 
  this.andar = function() { 
    console.log(this.nome + ' andou'); 
  } 
}

 
// Crie 3 pessoas, João - 20 anos, 
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa();
joao.nome = 'João';
joao.idade = 20;
joao.andar();

const maria = new Pessoa();
joao.nome = 'Maria';
joao.idade = 25;
joao.andar();

const bruno = new Pessoa();
joao.nome = 'Bruno';
joao.idade = 15;
joao.andar();
console.log('\n');
 
 
// Crie uma Constructor Function (Dom) para manipulação 
// de listas de elementos do dom. Deve conter as seguintes 
// propriedades e métodos: 
// 
// elements, retorna NodeList com os elementos selecionados 
// addClass(classe), adiciona a classe a todos os elementos 
// removeClass(classe), remove a classe a todos os elementos 

function DomEx(element){
  this.elements = function(){
    return document.querySelectorAll(element);
  }

  this.addClass = function(classe){
    this.elements().forEach((item)=>{
      item.classList.add(classe);
    })
  }

  this.removeClass = function(classe){
    this.elements().forEach((item)=>{
      item.classList.remove(classe);
    })
  }
}

const liEx = new DomEx('li');
liEx.addClass('primeiro-li');

const lastLiEx = new DomEx('li:last-child');
lastLiEx.removeClass('ativar');