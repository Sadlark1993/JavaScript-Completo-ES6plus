/* Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento. */

const carro = {
  rodas: 4,
  init(marca){
    this.marca = marca;
    return this;
  },
  acelerar(){
    return `${this.marca} acelerou as  ${this.rodas} rodas.`;
  },
  buzinar(){
    return `${this.marca} buzinou.`;
  },
}
//console.log(carro.init('honda').acelerar());

const honda = Object.create(carro);
console.log(honda.init('Honda').acelerar());

/* Object.asign(alvo, obj1, obj2) adiciona ao alvo as propriedades e metodos enumeraveis 
dos demais objetos. O asign modificara as propriedades do objeto alvo. Propriedades iguais
sobrescrevem.*/

const funcaoAutomovel = {
  acelerar(){
    return 'acelerou';
  },
  buzinar(){
    return 'buzinou';
  },
}

const moto = {
  rodas: 2,
  capacete: true,
}

const carro2 = {
  rodas: 4,
  mala: true,
}

Object.assign(moto, funcaoAutomovel);
Object.assign(carro2, funcaoAutomovel);

/* Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades. */

const moto2 = {};
Object.defineProperties(moto2, {
  rodas: {
    value: 2,
    configurable: false, //impede deletar e mudanca de valor
    enumerable: true, //torna enumeravel
    writable: false, //impede mudanca de valor
    //por padrao, isso aqui eh tudo false, so precisava indicar o value.
  },
});

moto2.rodas = 5; //nao houve mudanca
console.log(moto2.rodas); //2

Object.defineProperties(moto2, {
  velocidade: {
    enumerable: true,
    get(){
      return this._velocidade;
    },
    set(valor){
      this._velocidade = valor + ' km/h';
    }
  }
});

moto2.velocidade = 100;

/* Object.getOwnPropertyDescriptors(objeto) lista todos os métodos e propriedades de um objeto, 
com as suas devidas configurações. */

console.log(Object.getOwnPropertyDescriptors(Array));

//no singular, seleciona uma propriedade especifica
console.log(Object.getOwnPropertyDescriptor(moto2, 'velocidade'));

console.log(Object.keys(moto2)); //retorna as chaves do objeto (propriedades enumeraveis).
console.log(Object.values(moto2)); //retorna os valores do objeto.
console.log(Object.getOwnPropertyNames(Array)); //retorna todos os nomes das propriedades do obj.

/* Object.getPrototypeOf(), retorna o protótipo do objeto. Object.is(obj1, obj2) verifica 
se os objetos são o mesmo e retorna true ou false. */

const frutas = ['Banana', 'Pêra']
Object.getPrototypeOf(frutas);
Object.getPrototypeOf(''); // String

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

Object.is(frutas1, frutas2); // false

/* Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades. */

const carro3 = {
  marca: 'Ford',
  ano: 2018,
}
Object.freeze(carro3);
Object.seal(carro3);
Object.preventExtensions(carro3);

Object.isFrozen(carro3); // true
Object.isSealed(carro3); // true
Object.isExtensible(carro3); // false

//{}.constructor retorna a função construtora do objeto.

console.log(frutas1.constructor);

/* {}.hasOwnProperty verifica se possui a propriedade e retorna true. A propriedade deve 
ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a 
propriedade é enumerável. */

//{}.isPrototypeOf(valor) verifica se é o protótipo do valor passado.
console.log(Array.prototype.isPrototypeOf(frutas1));//true

/* {}.toString() Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor). */

const frutas3 = ['Banana', 'Uva'];
frutas3.toString(); // 'Banana,Uva'
typeof frutas3; // object
Object.prototype.toString.call(frutas3); // [object Array]

const frase = 'Uma String';
frase.toString(); // 'Uma String'
typeof frase; // string
Object.prototype.toString.call(frase); // [object String]

carro.toString(); // [object Object]
typeof carro; // object
Object.prototype.toString.call(carro); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]

console.log('\n********Exercícios:********');

// Crie uma função que verifique
// corretamente o tipo de dado

function tipoDado(dado){
  return Object.prototype.toString.call(dado);
}
console.log(tipoDado(frutas3));

/* const tipoDado = Object.prototype.toString.bind();
console.log(tipoDado(frutas3)); */
//console.log(Object.prototype.toString.call(frutas3))

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {}
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    configurable: false,
    enumerable: true,
    writable: false,
  }
});

quadrado.lados = 2;//n mudou
console.log(quadrado.lados);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
Object.getOwnPropertyNames(Array.prototype);
Object.getOwnPropertyNames(String.prototype);

