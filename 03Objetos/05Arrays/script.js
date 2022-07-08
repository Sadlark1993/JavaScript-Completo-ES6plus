const precos = [49, 99, 69, 89];
const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor:
'Azul', preco: 2000}], function andar(nome) { console.log(nome)
}];
dados[2]('Ford'); //ford. Vai ativar a funcao que esta na posicao 2.
dados[1][2].cor; // azul. Acessando o objeto na posicao 1.2.

/* const carros = new Array('Ford', 'Fiat', 'Honda');
carros[3] = 'Kia'; //insere um novo dado.
carros[20] = 'Chevrolet'; //insere na posicao 20, mesmo as posicoes anteriores estando vazias.
console.log(carros.length); //21 */

const obj = {
  0: 'Andre',
  1: 'Rafael',
  2: 'Teste',
  length: 3,
}

const objArray = Array.from(obj);
console.log(objArray);

li = document.querySelectorAll('li');
Array.isArray(li); //false
Array.isArray(objArray); //true

Array.of(10); // [10]
Array.of(1,2,3,4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1,2,3,4); // [1,2,3,4]

const frutas = ['Banana', 'Maçã', ['Uva Roxa', 'Uva Verde']];
frutas.length; //3
frutas[1].length; //6
frutas[2][1].length; 

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort();//Baixo, Guitarra, Violão. Ele modifica o array original, e tbm retorna o array modificado.
const idades = [32,21,33,43,1,12,8];
idades.sort;//1, 12, 21, 32, 33, 43, 8. Ele organiza como se fosse ordem alfabética
instrumentos.push('Pandeiro');//insere um elemento no final do array e retorna o novo tamanho dele.
instrumentos.unshift('Cajón');//insere um elemento no inicio do array e retorna o novo tamanho dele.

instrumentos.shift();//Cajón. Retira e retorna o primeiro ítem do array.
instrumentos.pop();//Pandeiro. Retira e retorna o último ítem do array.
instrumentos.reverse();//Inverte a ordem dos elementos no array, e retorna ela.

/* 
  [].splice(index, remove, item1, item2...) adiciona valores no array apartir do index, inclusive,
removendo a quantidade especificada de itens após o index. Retorna os itens removidos.
*/

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.splice(1, 0, 'Kia', 'Mustang');
console.log(carros);//Ford, Kia, Mustang, Fiat, VW, Honda.

carros.splice(3, 2, 'Ferrari');
console.log(carros);//'Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda'.

//explicou o [].copyWithin

//[].fill(valor, inicio, final) preenche o array com o valor especificado do inicio ate o fim especificado.
['item1', 'item2', 'item3', 'item4', 'item5'].fill('Banana');
//['Banana', 'Banana', 'Banana', 'Banana', 'Banana'].

['item1', 'item2', 'item3', 'item4', 'item5'].fill('Banana', 2);
//['item1', 'item2', 'Banana', 'Banana', 'Banana'].

['item1', 'item2', 'item3', 'item4', 'item5'].fill('Banana', 1, 3);
//['item1', 'Banana', 'Banana', 'item4', 'item5'].

//array1.concat(array2), retorna a concatenação dos dois arrays, mas não modifica os arrays originais.
const instrumentosECarros = instrumentos.concat(carros);//concatenou
const instrumentosCarrosEFrutas = instrumentos.concat(carros, frutas, 'tomate');//tudo concatenado.

/* 
[].includes(valor) verifica se existe o valor no array
[].indexOf(valor) retorna o index da primeira aparicao do valor no array
[].lastIndexOf(valor) retorna o index da ultima aparicao do valor no array
*/

//explicou o [].join() e o [].slice() denovo. O [].slice() tbm eh usado para clonar arrays
const cloneInstrumentos = instrumentos.slice();//clonou

console.log('\n********Exercícios:********')

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const comida = comidas.shift();
// Remova o último valor de comidas e coloque em uma variável
const comida2 = comidas.pop();
// Adicione 'Arroz' ao final da array
comidas.push('Arroz')
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.splice(0, 0, 'Peixe', 'Batata');
console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber',
'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
console.log(estudantes);
// Inverta a ordem dos estudantes
estudantes.reverse();
console.log(estudantes);
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'));
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'));
let html = `<section>
<div>Sobre</div>
<div>Produtos</div>
<div>Contato</div>
</section>`
// Substitua section por ul e div com li,
// utilizando split e join

let htmlArray = html.split('section');
html = htmlArray.join('ul');

htmlArray = html.split('div');
html = htmlArray.join('li');

console.log(html);