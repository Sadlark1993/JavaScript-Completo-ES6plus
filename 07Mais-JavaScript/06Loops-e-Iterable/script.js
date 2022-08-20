/* ITERABLE
São objetos que possuem o método [Symbol.iterator], geralmente no protótipo, é dentro dele que a função que lida com a iteração será definida. Ex: Array, String, NodeList, boa parte das Array-Like e outros. */

const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(({headers}) => console.log(headers));


/* FOR...OF
É possível fazemos um loop por cada iteração do objeto iterável utilizando o for...of. Além deste loop podemos também utilizar o Spread Operator nos mesmos. */

for(const fruta of frutas) {
  console.log(fruta);
}

for(const char of frase) {
  console.log(char);
}


/* ARRAYS E FOR...IN
Uma Array é um objeto, porém a chave de cada valor é igual ao seu index. */

for(const index in frutas) {
  console.log(index);
}

for(const index in frutas) {
  console.log(frutas[index]);
}


/* CHAVE E VALOR
Utilizando o for...in podemos retornar todas as chaves e valores de propriedades enumeráveis. */

const carro = {
  marca: 'Honda',
  ano: 2022,
}

for(const key in carro){
  console.log(key, carro[key]);
}


console.log('----valores do estilo do botao----');
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

for(const style in btnStyles) {
  console.log(`${style}: ${btnStyles[style]}`);
}

console.log('********Exercícios********');

// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const lis = document.querySelectorAll('li');

for(const item of lis){
  item.classList.add('ativo');
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for(const item in window){
  console.log(item, window[item]);
}