//nos objetos, variaveis e funcoes sao chamadas de propriedades e metodos.
var pessoa = {
  nome: 'André',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true,
}

console.log(pessoa.nome);

var quadrado = {
  lados: 4,
  //metodos podem ser declarados dessa forma:
  area: function(lado){
    return lado*lado;
  },
  //ou dessa:
  perimetro(lado){
    return this.lados*lado; //this faz uma referencia ao proprio objeto.
  },
}

console.log(quadrado.lados, quadrado.area(5), quadrado.perimetro(5));

/*Objetos servem para reorganizar o codigo em pequenas partes
reutilizaveis. Math eh um objeto nativo de JavaScript, console tbm. */

console.log(Math.PI, Math.random());

/* 
-Acesse propriedades de um objeto utilizando o ponto .
-Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.
-Para adicionar novas propriedades e metodos a um objeto, basta
adicionar um novo nome e definir o valor.
*/

var menu = {
  width: 800,
}

menu.height = 50;
menu.position = 'fixed';
menu.width= 700;
console.log(menu.width, menu.height);

/*Prototipo e Heranca
-O objeto herda propriedades e metodos do objeto que foi utilizado 
para criar o mesmo. hasOwnProperty é um metodo de Object.
*/

console.log("propriedades: ", menu.hasOwnProperty('width'), menu.hasOwnProperty('color'));

console.log('******Exercício******');
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco=3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var dadosPessoais = {
  nome: 'Claudio',
  sobrenome: 'Zimmermann Junior',
  idade: 28,
  nomeCompleto(){
    console.log(this.nome, this.sobrenome);
  },
}
dadosPessoais.nomeCompleto();

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  verHomem(){
    console.log('Au au au');
  }
}
cachorro.verHomem();