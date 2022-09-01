//Animacao ao Scroll
import debounce from './debounce-function.js';
export default class AnimacaoScroll {
  constructor(sections){
    this.sections = document.querySelectorAll(sections);
    //pegar 60% da altura da tela
    this.window60 = window.innerHeight*0.6;

    //setar o 'this' como o objeto da classe.
    /* colocar debounce na funcao para ela nao ativar centenas de vezes por segundo 
    quando o usuario der scroll */
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  /* Pega a distancia de cada item em relacao ao topo do site */
  getDistance(){
    this.distance = [...this.sections].map((section)=>{
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.window60),
      };
    });
  }

  /* dependendo da distancia de de cada objeto ao topo do site
  comparado ao scroll, esse metodo vai adicionar ou remover
  a classe 'ativo' dele.  */
  checkDistance(){
    this.distance.forEach((item)=>{
      if(window.pageYOffset > item.offset){
        item.element.classList.add('ativo');
      }else if(item.element.classList.contains('ativo')){
        item.element.classList.remove('ativo');
      }
    });
  }

  init(){
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  // Remove o event de scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}