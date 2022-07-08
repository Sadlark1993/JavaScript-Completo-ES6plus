var nome = "André";

/*Uma string herda propriedades e metodos do 
construtor String()*/
console.log(nome.length, nome.charAt(1), nome.replace('ré', 'rei'));
console.log(nome);

/*
Numeros
Por um breve momento o numero eh envolvido em um objeto
(coerção), tendo acesso assim às suas propriedades
e metodos.
*/
var alturoa = 1.8;
alturoa.toString(); // '1.8'
alturoa.toFixed(); // 2

//Funções
function areaQuadrado(lado){
  return lado*lado;
}
areaQuadrado.toString();
/*
function areaQuadrado(lado){
  return lado*lado;
}
areaQuadrado.toString();
*/
areaQuadrado.length; //1 (retorna a quantidade de parametros)

var btn = document.querySelector('.btn');

console.log(btn.innerText);
btn.classList.add('azul');// adiciona a classe azul
btn.addEventListener('click', function(){
  console.log('Clicou');
});

/*Web API's são métodos e propriedades que permitem
a interação do JavaScript e Browser */

console.log('******Exercícios******');
// nomeie 3 propriedades ou métodos de strings

// nomeie 5 propriedades ou métodos de elementos do DOM

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

//Respostas:
//.length, .charAt(), .replace().
//.classList.add(), addEventListener(), .innerText, .classList, elementTiming

btn.addEventListener('click', function(){
  var text = "abracadabraaaaaa";
  navigator.clipboard.writeText(text);
  console.log('copiado!');
});
