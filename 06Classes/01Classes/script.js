/* CONSTRUCTOR FUNCTION
Funções responsáveis pela criação de objetos. O conceito de uma função construtora de objetos é implementado em outras linguagens como Classes. */

/* function Button(text, background){ //classe inicia-se com letra maiuscula
    this.text = text;
    this.background = background;
}

Button.prototype.element = function(){
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
}
 */


/* CLASS
O ES6 trouxe uma nova sintaxe para implementarmos funções construtoras. Agora podemos utilizar a palavra chave class. É considerada syntactical sugar, pois por baixo dos panos continua utilizado o sistema de protótipos de uma função construtora para criar a classe. */

/* CONSTRUCTOR RETURN
Por padrão a classe retorna this. Ou seja, this é o objeto criado com o new Class. Podemos modificar isso alterando o return do constructor, o problema é que perderá toda a referência do objeto.
 */

/* THIS
Assim como em uma função construtora, this faz referência ao objeto criado com new. Você pode acessar as propriedades e métodos da classe utilizando o this. */




class Button{
    constructor(text, background){
        this.text = text;
        this.background = background;
    }
    element(){ //esse metodo passa a ser do prototipo.
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        return buttonElement;
    }
    appendTo(target){
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element());
        return targetElement;
    }
}

const blueButton = new Button('Comprar', 'blue');
blueButton.appendTo('body');


/* STATIC VS PROTOTYPE
Por padrão todos os métodos criados dentro da classe irão para o protótipo da mesma. Porém podemos criar métodos diretamente na classe utilizando a palavra chave static. Assim como [].map() é um método de uma array e Array.from() é um método do construtor Array. */


class Button2{
    constructor(options){
        this.options = options;
    }

    static createButton(text, background){
        const botao = document.createElement('button');
        botao.innerText = text;
        botao.style.background = background;
        return botao;
    }
}

const blackButton = new Button2({
    background: 'black',
    text: 'saiba mais',
    color: 'white'
});

console.log(blackButton);

const botao = Button2.createButton('oi, eu sou um botao', 'white');



/* Você pode utilizar um método static para retornar a própria classe com propriedades já pré definidas. */

class Button4 {
    constructor(text, background) {
      this.text = text;
      this.background = background;
    }
    element() {
      const elementButton = document.createElement('button');
      elementButton.innerText = this.text;
      elementButton.style.background = this.background;
      return elementButton
    }
    static createBlue(text) {
      return new Button(text, 'blue');
    }
  }
  
  const blueButton2 = Button4.createBlue('Comprar');
  
