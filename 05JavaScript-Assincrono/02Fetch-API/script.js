
/* Permite fazermos requisições HTTP através do método fetch(). Este método retorna a resolução de uma Promise. Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response. */

//injetando texto de arquivo no HTML
const doc = fetch('./arquivo.txt');

doc.then((resolucao) => {
  return resolucao.text();
})
.then((resolucao) => {
  resolucao = resolucao.split('\n');
  resolucao = resolucao.join('</p><p>')
  secArquivo = document.querySelector('.arquivo');
  secArquivo.innerHTML += '<p>'+resolucao+'</p>';
});

//site que retorna json com o endereco pelo cep:
const cep = fetch('https://viacep.com.br/ws/78068560/json/');

cep
.then((res)=>{
  return res.json();
})
.then((res)=>{
  end = document.querySelector('.endereco');
  end.innerText = res.bairro;
});


//Injetando css em um html por fetch API
const estilo = fetch('./style.css');

estilo.then((res)=>{
  return res.text();
})
.then((res)=>{
  const cabe = document.querySelector('head');
  cabe.innerHTML += '<style>'+res+'</style>';
});


//injetando codigo HTML no documento HTML por meio de fetch API
const sobre = fetch('./sobre.html');
const div = document.createElement('div');

sobre
.then((res)=>{
  return res.text();
})
.then((res)=>{
  div.innerHTML = res;
  document.querySelector('body').appendChild(div.querySelector('h1'));
})


/* .BLOB()
Um blob é um tipo de objeto utilizado para representação de dados de um arquivo. O blob pode ser utilizado para transformarmos requisições de imagens por exemplo. O blob gera um URL único. */



fetch('./imagem.jpg')
.then((r) => r.blob())
.then((r)=>{
  const imagem = document.querySelector('img');
  const imgURL = URL.createObjectURL(r);
  console.log(imgURL);
  imagem.src = imgURL;
});


/* .CLONE()
Ao utilizarmos os métodos acima, text, json e blob, a resposta é modificada. Por isso existe o método clone, caso você necessite transformar uma resposta em diferentes valores.
 */

fetch('https://viacep.com.br/ws/78068560/json/')
.then(response => {
  const cloneResponse = response.clone();
  response.json().then(json => {
    console.log('objeto: ',json)
  });
  cloneResponse.text().then(text => {
    console.log('texto: ',text)
  });
});


/* .HEADERS
É uma propriedade que possui os cabeçalhos da requisição. É um tipo de dado iterável então podemos utilizar o forEach para vermos cada um deles. */

fetch('https://viacep.com.br/ws/78068560/json/')
.then(response => {
  console.log('\nHeaders:')
  response.headers.forEach(console.log);
});


/* .STATUS E .OK
Retorna o status da requisição. Se foi 404, 200, 202 e mais. ok retorna um valor booleano sendo true para uma requisição de sucesso e false para uma sem sucesso.
 */

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  console.log(response.status, response.ok);
  if(response.status === 404) {
    console.log('Página não encontrada')
  }
});


/* .URL E .TYPE
.url retorna o url da requisição. .type retorna o tipo da reposta. */


fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  console.log(response.type, response.url);
});

//types
// basic: feito na mesma origem
// cors: feito em url body pode estar disponível
// error: erro de conexão
// opaque: no-cors, não permite acesso de outros sites


console.log('\n********Exercicios:********');

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const botao = document.querySelector('.btn');
botao.addEventListener('click', handleClick);

function handleClick(event){
  event.preventDefault();
  const formInput = document.forms.formCep.cep.value;

  fetch(`https://viacep.com.br/ws/${formInput}/json/`)
  .then((response) =>{

    return response.json();

  })
  .then((response)=>{

      let end = `\nLogradouro: ${response.logradouro}\nComplemento: ${response.complemento}\nBairro: ${response.bairro}\nCidade: ${response.localidade}\nUF: ${response.uf}`;
      //console.log(end);

      const divEnd = document.querySelector('div.endereco');
      divEnd.innerText = end;
   
  })
  .catch((rejeicao)=>{
    const divEnd = document.querySelector('div.endereco');
      divEnd.innerText = '\nColoca o treco certo, gay.';
  })
}


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

handleCripto();
setInterval(()=>{
  handleCripto();
},30000);

function handleCripto(){
  fetch('https://blockchain.info/ticker')
  .then((res)=>{
    return res.json();
  }).then((res)=>{
    cripto = document.querySelector('.precoCripto');
    cripto.innerText = `Preço do Bitcoin: R$${res.BRL.last}`;
    //console.log(res.BRL.last);
  });
}


// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

chuckBtn = document.querySelector('.chuck button');
chuckBtn.addEventListener('click', handleChuck);

handleChuck();
function handleChuck(){
  fetch('https://api.chucknorris.io/jokes/random')
  .then((res)=>{
    return res.json();
  })
  .then((res)=>{
    piada = document.querySelector('.chuck p');
    piada.innerText = res.value;
  })
}
