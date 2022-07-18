
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

fetch('https://viacep.com.br/ws/01001000/json/')
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
