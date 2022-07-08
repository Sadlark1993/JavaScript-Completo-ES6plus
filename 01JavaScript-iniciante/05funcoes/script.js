function areaQuadrado(lado){
  return lado*lado;
}
areaQuadrado(4);

//peso e altura são parâmetros
function imc(peso, altura){
  const imc = peso/(altura ** 2);
  return imc;
}

console.log(imc(80, 1.80)); //80 e 1.80 são argumentos.

/*
Argumentos podem ser funcoes
Chamadas de Callback, geralmente são funcoes que ocorrem após algum evento.
*/
addEventListener('click', function(){
  console.log('Clicou');
});
/*Funcoes anomnimas sao aquelas em que o nome da funcao nao e definido, escritas como: function(){} ou ()=>{} */

//pode ou nao retornar um valor.
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc(80, 1.80); // retorna o imc
console.log(imc(80, 1.80)); // retorna o imc e undefined

console.log('******Exercício******');
// Crie uma função para verificar se um valor é Truthy

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

// Crie uma função que verifica se um número é par

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises=193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

//Respostas:

var valor = 2;

function isTruthy(dado){
  return !!dado;
}

console.log(isTruthy(valor));

function perimetroQuadrado(lado){
  return lado*4;
}

console.log(perimetroQuadrado(5));

function ehPar(num){
  if(num%2){
    return false;
  }else{
    return true;
  }
}
console.log(ehPar(4));

addEventListener('scroll', function(){
  console.log('Claudio Zimmermann Junior');
});
