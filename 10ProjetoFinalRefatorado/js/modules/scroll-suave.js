//Scroll Suave
export default class ScrollSuave {
  constructor(links, options){
    this.linksInternos = document.querySelectorAll(links);
    if(options === undefined){
      this.options = {
        behavior: 'smooth',
        block: 'start',
      }
    }else{
      this.options = options;
    }
    //define a classe como o this eterno desse metodo. Se nao fizer isso, o this passa ser o link q o chamou.
    this.scrollToSection = this.scrollToSection.bind(this);   //<<--- prestencao.
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  init(){ //Inicia o plugin
    this.linksInternos.forEach((item) => {
      item.addEventListener("click", this.scrollToSection);
    });
    return this;
  }
}
