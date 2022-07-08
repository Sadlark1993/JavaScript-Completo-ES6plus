//Array
var videoGames = ['Switch', 'Ps4', 'XBOX'];
videoGames[0]; //Switch
videoGames[2]; //XBOX

//Métodos e Propriedades de um Array
ultimoElemento = videoGames.pop() //remove o ultimo item e retorna ele.
videoGames.push('3DS'); // Adiciona ao final do array.
videoGames.length; //3
//Existem diversos outros metodos como map, reduce, forEach...
//veremos isso mais à frente.

//For Loop
for(var numero = 0; numero < 10; numero++){
  console.log(numero);
}
//Retorna de 0 a 9 no console

//While Loop
var i = 0;
while(i<10){
  console.log(i);
  i++;
}

//uso do break:
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break;
  }
}

videoGames.forEach(function(item){
  console.log(item);
});
//atribui cada valor de videoGames para 'item'.
//podemos passar os seguintes parametros:
//item, index, array.

console.log('******Exercícios******');
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia'];

let indice = 0;

do{
  console.log(frutas[indice]," ");
}while(frutas[indice++]!=='Pera');
console.log("\n");


/* for(var i = 0;i<frutas.length;i++){
  console.log(frutas[i]);
  if(frutas[i] === 'Pera'){
    break;
  }
} */

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var copas = [1959, 1962, 1970, 1994, 2002];

copas.forEach(function(item){
  console.log('O Brasil ganhou a copa de', item);
});



var ultimaFruta = frutas[frutas.length-1];
console.log(ultimaFruta);

