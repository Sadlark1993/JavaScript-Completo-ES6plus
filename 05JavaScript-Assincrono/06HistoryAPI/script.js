/* HISTORY
É possível acessarmos o histórico de acesso do browser em uma sessão específica através do window.history. O objeto history possui diferentes métodos e propriedades. */
/* 
window.history;
window.history.back(); // vai para a anterior
window.history.forward(); // vai para a próxima
 */

/* PUSHSTATE()
A parte interessante de manipularmos o history é que podemos modificar o histórico e adicionar um novo item. window.history.pushState(obj, title, url).
 */

// Em obj podemos enviar um objeto com dados
// mas o seu uso é restrito por isso geralmente utilizamos
// null. O title ainda é ignorado por alguns browsers, também
// utilizamos null nele. O url que é parte importante.

/* window.history.pushState(null, null, 'sobre.html'); */


/* POPSTATE
O evento popstate pode ser adicionado ao objeto window. Assim podemos executar uma função toda vez que o usuário clicar no botão de voltar ou próximo. */

/* window.addEventListener('popstate', ()=>{
    console.log('foi');
}); */


/* FETCH E HISTORY
Ao puxarmos dados via fetch api, o url da página continua o mesmo. Ao combinar fetch com a history api conseguimos simular uma navegação real entre páginas, sem a necessidade de recarregamento da mesma. */

const links = document.querySelectorAll('a');

function handleClick(event){
    event.preventDefault();
    fetchPage(event.target.href);
    window.history.pushState(null,null,event.target.href);
}

async function fetchPage(url){
    document.querySelector('.content').innerHTML = 'Carregando...';

    pageResponse = await fetch(url);
    pageText = await pageResponse.text();
    replaceContent(pageText);
    //console.log(pageText);
}

function replaceContent(newText){
    const newHTML = document.createElement('div');
    newHTML.innerHTML = newText;
    const oldContent = document.querySelector('.content');
    const newContent = newHTML.querySelector('.content');
    oldContent.innerHTML = newContent.innerHTML;

    document.title = newHTML.querySelector('title').innerHTML;
}

links.forEach(item => {
    item.addEventListener('click', handleClick);
});

window.addEventListener('popstate', ()=>{
    fetchPage(window.location.href);
});
