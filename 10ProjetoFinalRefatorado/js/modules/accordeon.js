//Menu Accordeon
export default class accordeon {
  constructor(link){
    this.accordeonMenu = document.querySelectorAll(link)
  }

  callback(item) {
    item.classList.toggle("ativo");
    item.nextElementSibling.classList.toggle("ativo");
  } 

  

  init(){ //iniciar execucao da classe
    if (this.accordeonMenu.length) {
      this.callback(this.accordeonMenu[0]);

      this.accordeonMenu.forEach((item) => {
        item.addEventListener("click", ()=> this.callback(item));
      });
    }
    return this;
  }
} 
