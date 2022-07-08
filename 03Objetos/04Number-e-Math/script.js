/* Number eh a construtora de numeros. Todo numero possui propriedades e metodos do
prototype de Number. Number tambem possui alguns metodos. */

const ano = 1993; //number
const preco = new Number(50); //objeto

Number.isNaN(NaN); //true
Number.isNaN(ano); //false

Number.isInteger(ano); //true
Number.isInteger(19.5); //false

/* 
parseFloat() serve para retornarmos um número a partir de uma
string. A String deve começar com um número. parseInt recebe
também um segundo parâmetro que é o Radix, 10 é para decimal 
*/

Number.parseFloat('99.50'); //99.5
Number.parseFloat('100 reais'); //100
Number.parseFloat('R$ 100'); //NaN

Number.parseInt('99.5', 10); //99
Number.parseInt(99.5, 10); //99
Number.parseInt('100 reais'); //100

let numero = 23.567;
console.log(numero.toFixed()); //24
console.log(numero.toFixed(2)); //23.57 arredondamento ta?
console.log(typeof(numero.toFixed())); //String

numero.toString(); //converte para String

//n.toLocaleString(lang, options) formata um numero de a cordo com o idioma e as opcoes passadas
numero.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); //$23.567
const real = numero.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); //R$ 23.567
console.log(real);

//Math eh um objeto nativo que possui propriedades e metodos de expressoes matematicas comuns

Math.PI;//3.1415
Math.E; //2.718
Math.LN10; //2.303

console.log(Math); //se quiser, da uma olhada, corno.

console.log(Math.random()); //numero entre 0 e 1

console.log('\n********Exercícios:********');

// Retorne um número aleatório
// entre 1050 e 2000

console.log(Math.round( Math.random()*(2000-1050+1)+1050))

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

let numerosArray = numeros.split(', ');


console.log(Math.max(...numerosArray)); //'...' significa 'spread'. Insere cada elemento do array separadamente.
// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
 'R$ 230 ', 'r$ 200'];

let listaPrecos2 = [];

listaPrecos.forEach((item)=>{
  listaPrecos2.push(item.replace(',', '.'));
});

listaPrecos2.forEach((item, index)=>{
  listaPrecos2[index] = item.trim();
});
 //console.log(listaPrecos2);


console.log('\nLista de Preços:')
let totalPrecos = 0;
listaPrecos2.forEach((item,index)=>{
  listaPrecos2[index] = (+item.slice(3)).toFixed(2);
  console.log('R$ '+listaPrecos2[index]);
});

listaPrecos2.forEach((item)=>{
  totalPrecos += +item;
})
console.log('total: R$ '+totalPrecos);


