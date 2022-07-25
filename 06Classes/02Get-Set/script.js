/* GET E SET
Podemos definir comportamentos diferentes de get e set para um método. */

const quadrado = {
    get lado(){
        return this._lado | 2;
    },
    get perimetro(){
        return this._lado*4 | 8;
    },
    get area(){
        return Math.pow(this._lado, 2) | 4;
    },
    set lado(num){
        this._lado = num;
    },
}

console.log(quadrado.lado); //2
quadrado.lado = 5;
console.log(quadrado.lado);//5
console.log(quadrado.area);//25
console.log(quadrado.perimetro);//20


/* VALOR ESTÁTICO
Se definirmos apenas o get de um método, teremos então um valor estático que não será possível mudarmos. */

const matematica = {
    get PI(){
        return 3.1415;
    }
}

matematica.PI = 5; //nada acontece
console.log(matematica.PI); //3.1415

/* 
SET
Eu posso ter um método com set apenas, que modifique outras propriedades do meu objeto. */

const frutas = {
    lista: [],
    set nova(frut){
        this.lista.push(frut);
    }
}

frutas.nova = 'banana';
frutas.nova = 'abiu';

/* 
CLASS
Assim como em um objeto, as classes podem ter métodos de get e set também. */

class Button{
    constructor(text, background){
        this.text = text;
        this.background = background;
    }
    get element(){
        const type = this._elementType || 'button';//o valor padrao serah 'button'.
        const buttonElement = document.createElement(type);
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        buttonElement.style.padding = '8px';
        buttonElement.style.margin = '16px';
        return buttonElement;
    }
    set tipo(type){
        this._elementType = type;
    }
}

const botaoAzul = new Button('comprar', 'blue');
document.querySelector('body').appendChild(botaoAzul.element); //magicamente um botao azul apareceu na tela!!
botaoAzul.element.style.padding = '40px'; //isso nao funciona :)

botaoAzul.tipo = 'div';
document.querySelector('body').appendChild(botaoAzul.element);

