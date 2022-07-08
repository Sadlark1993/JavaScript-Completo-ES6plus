var possuiGraduacao=true;
var possuiDoutorado=false;

if(possuiDoutorado){
  console.log('Possui graduação e doutorado');
}else if(possuiGraduacao){
  console.log('Possui Graduação e não possui doutorado');
}else{
  console.log('Não possui Graduação');
}

var corFavorita = 'Azul';

switch(corFavorita){
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para as rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol (é brincadeira, não olha não rsrsr).');
    break;
  default:
    console.log('Feche os olhos (não to falando pra morrer não).');
}

// Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``

// Truthy
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({})

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

//o operador === verifica se é estritamente igual, ou seja, verifica também o tipo.
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true
//o ideal é usar sempre o === e !==

/*O primeiro valor falso que ele encontrar, será retornado por ele. Se ele não encontrar nenhum valor falso, o ultimo valor será retornado.*/
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true
//Retorna o primeiro valor true que ele encontrar.

console.log('******Exercício******');
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 3); //2. 5 - ' ' == 5.

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //Truthy
var idade = 28; //Truthy
var possuiDoutorado = false; //Falsy
var empregoFuturo; //Falsy
var dinheiroNaConta = 0; //Falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) { //Falso
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) { //Cão
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

//respostas
var minhaIdade = 28;
var idadeLeticia = 53;

if(minhaIdade === idadeLeticia){
  console.log('É igual');
}else if(minhaIdade > idadeLeticia){
  console.log('É maior');
}else{
  console.log('É menor');
}