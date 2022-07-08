
/* 
 Ele explicou o [].forEach(callBack(item, index, array));
 [].map(callBack(item, index, array)), funciona da mesma forma que o forEach, a diferenca eh que
 enquanto o forEach retorna 'undefined', o map retorna um array com os retornos de todos os loops.
*/

const carros = ['Ford', 'Fiat', 'Honda'];
const newCarros = carros.map((item)=>{
  return 'carro ' + item;
});

console.log(newCarros); //['carro Ford', 'carro Fiat', 'carro Honda'].

const aulas = [
  {
    nome: 'HTML 1',
    min: 15,
  },
  {
    nome: 'HTML 2',
    min: 13,
  },
  {
    nome: 'CSS',
    min: 17,
  },
  {
    nome: 'JS',
    min: 12,
  },
];

const tempoAulas = aulas.map(item => item.min); //quando o corpo da funcao eh uma linha sem chaves, ele ja retorna ela.
console.log(tempoAulas);

function nomeAulas(aula){ //o mesmo que: const nomeAulas = aula => aula.nome;
  return aula.nome;
}

const arrayNomeAulas = aulas.map(nomeAulas);
console.log(arrayNomeAulas);

/* 
  [].reduce(callBack(acumulador, item, index, array) valorInicial) executa a função de callBack para cada 
item do Array (igual o forEach). O acumulador eh apenas o retorno.
*/

let tempoTotal = tempoAulas.reduce((acumulador, item)=>{
  return acumulador + item;
}, 0);
console.log(tempoTotal);//57

tempoTotal = tempoAulas.reduce((acumulador, item)=>{
  return acumulador + item;
}, 100);

console.log(tempoTotal);//157

const numeross = [10, 25, 60, 5, 35, 10];
let maiorValor = numeross.reduce((acumulador, item)=>{
  return acumulador < item ? item : acumulador;
});

console.log(maiorValor);

//usando o [].reduce() para gerar um objeto com apenas os nomes das aulas.
const nomeAulas2 = aulas.reduce((acumulador, item, index)=>{
  acumulador[index] = item.nome;
  return acumulador;
},{});

console.log(nomeAulas2);

//[].reduceRight() eh igual o [].reduce(), so que a iteracao eh feita da direita para a esquerda no array.
//[].some(), se pelo menos um return da operacao for truthy, ele retorna true.

const frutas = ['Maçã', 'Uva', 'Banana'];
const temUva = frutas.some((item)=>{
  return item === 'Uva';
});

console.log(temUva); //true

function maiorQ100(numero){
  return numero>100;
}

const numeros2 = [0, 43, 22, 88, 101, 2];
console.log(numeros2.some(maiorQ100)); //true

//[].every(), se todos os retornos da iteracao forem truthy, retorna true, se pelo menos um for falsy, retorna false.
const ehTudoUva = frutas.every((item)=>{
  return item === 'Uva';
});
console.log(ehTudoUva); //false

//[].find() retorna o primeiro valor truthy que encontrar nas interacoes. Ja [].findIndex(), retorna o indice.
const uva = frutas.find((item)=>{
  return item === 'Uva';
});
console.log(uva); //uva

const indexUva = frutas.findIndex((item)=>{
  return item === 'Uva';
});
console.log(indexUva); //1

const maior45 = numeros2.find((item)=>{
  return item>45;
});
console.log(maior45); //88

//[].fileter() retorna um array com os valores que durante a operacao, retornaram truthy.
const maiores45 = numeros2.filter((item)=>{
  return item>45;
});
console.log(maiores45); //[88, 101]

console.log('\n********Exercícios:********');

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const curso = document.querySelectorAll('.curso');
const cursos = [];

curso.forEach((item, index)=>{
  let objeto = {};
  objeto.titulo = item.querySelector('h1').innerText;
  objeto.descricao = item.querySelector('p').innerText;
  objeto.aulas = item.querySelector('.aulas').innerText;
  objeto.horas = item.querySelector('.horas').innerText;
  cursos.push(objeto);
});
console.log(cursos);
// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiores100 = numeros.filter((item) => item > 100);
console.log(maiores100);
// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria',
'Teclado']
const temBaixo = instrumentos.some(item => 'Baixo'===item);
console.log(temBaixo);

// Retorne o valor total das compras
const compras = [
{
item: 'Banana',
preco: 'R$ 4,99'
},
{
item: 'Ovo',
preco: 'R$ 2,99'
},
{
item: 'Carne',
preco: 'R$ 25,49'
},
{
item: 'Refrigerante',
preco: 'R$ 5,35'
},
{
item: 'Quejo',
preco: 'R$ 10,60'
},
];

const valorTotal = compras.reduce((acumulador, item) => {
  return acumulador += +item.preco.slice(3).replace(',','.');//transformando em Number.
}, 0);
console.log(valorTotal);