//acabei fazendo as mudancas na pasta menu-mobile
export default class AnimaNumeros{
  /* 
  args: atributo do objeto a ser incrementado (numero++);
        classe da sessao onde os divs foram inseridos
  */
  constructor(numeros, secaoNumeros, ativo){
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(secaoNumeros);
    this.ativo = ativo;

    //Faz com que o 'this' nesse metodo seja sempre o objeto da classe atual.
    this.handleMutation = this.handleMutation.bind(this);
  }

  init(){
    if(this.numeros.length && this.observerTarget){
      this.observer = new MutationObserver(this.handleMutation);

      //Observar a secao com a classe 'secaoNumeros', quando a classe 'ativo' aparecer nela, ele inicia a execucao da animacao.
      this.observer.observe(this.observerTarget, {attributes: true});
    }
    return this;
  }

  /* 
  recebe um elemento do DOM com um numero, faz a animacao desse numero incrementando de zero ate ele.
  */
  static incrementarNumero(numero){
    const total = +numero.innerText;
    const incremento = Math.floor(total/100);
    let start = 0;
    const timer = setInterval(()=>{
      start += incremento;
      numero.innerText = start;
      if(start > total){
        numero.innerText=total;
        clearInterval(timer);
      }
    }, 35*Math.random());
  }

  animarNumeros(){
    this.numeros.forEach((numero)=>{
      this.constructor.incrementarNumero(numero);
    });
  }
  
  handleMutation(mutation){
    if(mutation[0].target.classList.contains(this.ativo)){
      this.observer.disconnect();
      this.animarNumeros();
    }
  }

}
