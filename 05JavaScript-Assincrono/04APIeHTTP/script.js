/* EXEMPLOS DE API'S
GitHub

https://api.github.com/users/origamid

https://api.github.com/users/origamid/followers

Array / Element

[].map();

[].filter();

Element.classList;

Element.attributes;

Tempo

https://www.metaweather.com/api/location/455825/

https://github.com/toddmotto/public-apis */


/* URL E METHOD
Uma requisição HTTP é feita através de uma URL. O método padrão  do fetch é o GET, mas existem outros como POST, UPDATE, DELETE, HEADER. */

const url = 'https://jsonplaceholder.typicode.com/posts/';
const options = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body: '"aula": "JavaScript"',
}

fetch(url, options)
.then(res => res.json())
.then(res=>{
    console.log(res);
});

/* METHOD
GET

Puxa informação, utilizado para pegar posts, usuários e etc.
Quando for esse método, não é preciso informar, já é ele por padrão.

POST

Utilizado para criar posts, usuários e etc.

PUT

Geralmente utilizado para atualizar informações.

DELETE

Deleta uma informação.

HEAD

Puxa apenas os headers. */

const url2 = 'https://jsonplaceholder.typicode.com/posts/1/';

fetch(url2, {
  method: 'HEAD',
})
.then(response => {
  response.headers.forEach(console.log);
  console.log(response.headers.get('Content-Type'));
});


/* HEADERS
Cache-Control

Tempo que o arquivo deve ficar em cache em segundos. Ex: public, max-age=3600

Content-Type

Tipo de conteúdo. Ex: text/html; charset=utf-8. Indicar o tipo de arquivo principalmente em métodos POST e PUT.

Lista de Headers

https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers */

/* CORS
Cross-Origin Resource Sharing, gerencia como deve ser o compartilhamento de recursos entre diferente origens.

É definido no servidor se é permitido ou não o acesso dos recursos através de scripts por outros sites. Utilizando o Access-Control-Allow-Origin.

Se o servidor não permitir o acesso, este será bloqueado. É possível passar por cima do bloqueio utilizando um proxy.

CORS é um acordo entre browser / servidor ou servidor / servidor. Ele serve para dar certa proteção ao browser, mas não é inviolável. */

//vidolando usando proxy. Parece q ja bloquearam esse servidor kkkkk
const url3 = 'https://cors-anywhere.herokuapp.com/https://www.google.com/';
const div = document.createElement('div');

fetch(url3)
.then(r => r.text())
.then(r => {
  div.innerHTML = r;
  console.log(div);
});
