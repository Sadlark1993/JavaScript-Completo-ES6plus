'use strict';
/* FACTORY FUNCTION
São funções que retornam um objeto sem a necessidade de utilizarmos a palavra chave new. Possuem basicamente a mesma função que constructor functions / classes. */

function createButton(text){
    const numeroSecreto = 1110625; //obejtos nao terao acesso direto a isso. Eh privado.
    function element(){
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        return buttonElement;
    }

    return {
        element: element,
        text: text,
    }
}

const comprarBtn = createButton('Comprar');


/* MÉTODOS / VARIÁVEIS PRIVADAS
Uma das vantagens é a possibilidade de criarmos métodos / variáveis privadas. */

function criarPessoa(nome, sobrenome){
    const nomeCompleto = `${nome} ${sobrenome}`;

    function andar(){
        return `${nomeCompleto} andou.`;
    }

    function nadar(){
        return `${nomeCompleto} nadou.`;
    }

    return {
        nome,
        sobrenome,
        andar,
        nadar,
    }
}

//nao tenho acesso direto à variavel 'nomeCompleto'.
const junior = criarPessoa('Claudio', 'Zimmermann Junior');
console.log(junior.andar());

/* 
ICE FACTORY
Podemos impedir que os métodos e propriedades sejam modificados com Object.freeze(). Ideia inicial de Douglas Crockford. 
*/

function criarPessoaCongelada(nome, sobrenome){
    const nomeCompleto = `${nome} ${sobrenome}`;

    function andar(){
        return `${nomeCompleto} andou.`;
    }

    function nadar(){
        return `${nomeCompleto} nadou.`;
    }

    return Object.freeze({
        nome,
        sobrenome,
        andar,
        nadar,
    });
}

const cientista = criarPessoaCongelada('Albert', 'Einstein');


/* CONSTRUCTOR FUNCTION / FACTORY FUNCTION
Uma das vantagens da Factory Function é a possibilidade de iniciarmos a mesma sem a utilização da palavra chave new. Também é possível fazer isso com uma Constructor Function. */

function Pessoa2(nome) {
    if (!(this instanceof Pessoa2)) // ou (!new.target)
      return new Pessoa2(nome);
    this.nome = nome;
  }
  
  Pessoa2.prototype.andar = function() {
    return `${this.nome} andou`;
  }
  
  const designer = Pessoa2('André');
  