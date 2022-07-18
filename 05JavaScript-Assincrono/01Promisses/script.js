
/* Promise é uma função construtora de promessas. Existem dois resultados possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento for ativado. */

/* Podemos passar um argumento na função resolve(), este será enviado junto com a resolução da Promise. Quando a condição de resolução da promise não é atingida, ativamos a função reject para rejeitar a mesma. Podemos indicar no console um erro, informando que a promise foi rejeitada.*/

const promessa = new Promise(function(resolve, reject) {
  let condicao = true;
  if(condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu.'));
  }
});

//console.log(promessa); // Promise {<resolved>: "Estou pronto!"}
/* O poder das Promises está no método then() do seu protótipo. O Callback deste método só será ativado quando a promise for resolvida. O argumento do callback será o valor passado na função resolve.
 */

promessa.then((resolucao)=>{
  console.log(resolucao); // Estou pronto!
});

/* ASSÍNCRONO
As promises não fazem sentido quando o código executado dentro da mesma é apenas código síncrono. O poder está na execução de código assíncrono que executará o resolve() ao final dele. */

const promessaAsinc = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    if(false)
      resolve('Resolvida!');
    else
      reject(Error('Rejeitada'));
  }, 2000);
});

/* promessaAsinc.then((resolucao)=>{
  console.log(resolucao);//'Resolvida!'. Após 2s.
}); */
console.log('instrução síncrona.');


/* THEN().THEN()
O método then() retorna outra Promise. Podemos colocar then() após then() e fazer um encadeamento de promessas. O valor do primeiro argumento de cada then, será o valor do retorno anterior. */

promessaAsinc.then((resolucao)=>{
  console.log(resolucao); //'Resolvida!'. Após 2s.
  return 'resolve outra.';
})
.then((resolucao)=>{
  console.log(resolucao); //'resolve outra.'
  return 'resolve mais uma';
})
.then((resolucao)=>{
  console.log(resolucao);//'resolve mais uma'
}) //n coloca ';', isso continua no .catch la em baixo.

/* CATCH()
O método catch(), do protótipo de Promises, adiciona um callback a promise que será ativado caso a mesma seja rejeitada. */

.catch((rejeicao)=>{ //eh como se ele estivesse ligado na ultima funcao then.
  console.log(rejeicao);
})

/* Podemos passar a função que será ativada caso a promise seja rejeitada, direto no método then, como segundo argumento. */

//SE DESCOMENTAR ISSO DA ERRO, a funcao de cima tem q continuar no finally() abaixo.
/* promessa.then(resolucao => {
  console.log(resolucao);
}, reject => {                   //mesma coisa q o catch().
  console.log(reject);
}); */

/* FINALLY()
finally() executará a função anônima assim que a promessa acabar. A diferença do finally é que ele será executado independente do resultado, se for resolvida ou rejeitada. */

.finally(()=>{
  console.log('It\'s over jhonny.'); //vai executar no fim, seja resolve ou reject.
});


/* PROMISE.ALL()
Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada. A reposta é uma array com as respostas de cada promise. */

const promessaArray = Promise.all([promessa, promessaAsinc]);

promessaArray.then((resolucao)=>{
  console.log(resolucao);
})
.catch((rejeicao)=>{
  console.log('nem todas foram resolvidas: '+rejeicao);
});

/* PROMISE.RACE()
Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. Essa nova promise terá a resposta da primeira resolvida. */

const corrida = Promise.race([promessa, promessaAsinc]);

corrida.then((resolucao)=>{
  console.log('primeira: '+ resolucao);
});

//isso ai eh tudo assincrono!

