/*Hoisting: declaracoes de variaveis sao movidas para cima no codigo, a sua atribuicao de valor, não.
- variaveis var e let podem ter seu valor atribuido mudado, const não.
- variaveis var podem ser declaradas de novo. Let não. const tbm nao, é constante né...
--> ctrl+C e ctrl+V não precisam da linha inteira selecionada. Deixe o cursor no fim da linha e "perta"*/

var nome = 'André';
var idade = 28;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade, ',', nome);

var preco = 25;
var totalComprado = 5;
var precoTotal = preco*totalComprado;

console.log('você vai pagar ', preco*totalComprado, ' seu vagal!!');

var sobrenome = 'Rafael', cidade='Rio de Nojeira';
console.log(sobrenome, ' é residente do ', cidade);

var semDefinir;
console.log(semDefinir);
