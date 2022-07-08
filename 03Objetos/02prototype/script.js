/* A propriedade prototype eh um objeto adicionado a uma função quando a mesma eh criada */

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
const andre = new Pessoa('André', 28);

console.log(Pessoa.prototype); // retorna o objeto
console.log(andre.prototype); // undefined

/* Assim como em qualquer objeto, eu posso adicionar propriedades e metodos ao 
prototype: */

Pessoa.prototype.andar = function(){
  console.log(this.nome+' andou.');
}

Pessoa.prototype.nadar = function(){
  console.log(this.nome+' correu.');
}



andre.andar(); //objetos construidos pela funcao construtora podem acessar os elementos do prototype.

/* Quando eu crio um novo objeto da função construtora, ele cria novamente os elementos da função
no objeto, mas nao cria novamente os elementos do prototype. Os elementos do prototype podem ser 
acessados pelo novo objeto, apenas. Quando ele tenta acessar um elemento do objeto, primeiro ele 
procura pelo objeto, se nao existir, ele procura no prototipo.*/

Pessoa.prototype.dado = 12;

console.log(andre.dado); //12
console.log(andre); //ele nao vai ter a propriedade 'dado', mas o prototipo tem.

const marcos = new Pessoa('Marcos', 21);
andre.dado = 2;
console.log(andre); //agora ele tem a propriedade
console.log(marcos); //esse ainda nao tem a propriedade, se tentar acessar, ele vai acessar a do prototipo.

/* O novo objeto acessa os métodos e propriedades do protótipo
através da propriedade __proto__ . É papel da engine fazer essa
busca, não devemos falar com __proto__ diretamente. Por meio dessa propriedade encadeada, que o 'codigo' 
acessa propridades dos objetos pai*/

/* O objeto possui acesso aos métodos e propriedades do protótipo
do construtor responsável por criar este objeto. O objeto abaixo
possui acesso a métodos que nunca de Object. */

console.log(andre.toString()); // toString() eh um metodo do objeto prototipo da funcao Object().


//eh possivel acessar os metodos do prototipo:
const lista = document.querySelectorAll('li');
// Transforma em uma array
let listaArray = Array.prototype.slice.call(lista); //jeito antigo.
listaArray = Array.from(lista); //jeito moderno

//saber o tipo de elemento:
console.log(andre.idade.constructor.name);


console.log('\n********Exercícios:******\n');

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoas(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = -1;
}

Pessoas.prototype.completo = function(){
  return this.nome + ' ' + this.sobrenome;
}

const tadeu = new Pessoas('Tadeu', 'Silva');
console.log(tadeu.completo());

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

console.log('\nNodeList:');
Object.getOwnPropertyNames(NodeList.prototype).forEach((item)=>{
  console.log(item);
});

console.log('\nHTMLCollection:');
Object.getOwnPropertyNames(HTMLCollection.prototype).forEach((item)=>{
  console.log(item);
});

console.log('\nDocument:');
Object.getOwnPropertyNames(Document.prototype).forEach((item)=>{
  console.log(item);
});

// Liste os construtores dos dados abaixo


console.log('\nConstrutores:');
const li = document.querySelector('li');
li;
console.log(li.constructor.name);

li.click;
console.log(li.click.constructor.name);

li.innerText;
console.log(li.innerText.constructor.name);

li.value;
console.log(li.value.constructor.name);

li.hidden;
console.log(li.hidden.constructor.name);


li.offsetLeft;
console.log(li.offsetLeft.constructor.name);


li.click();
console.log(li.click());


// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
console.log(li.hidden.constructor.name.constructor.name);



