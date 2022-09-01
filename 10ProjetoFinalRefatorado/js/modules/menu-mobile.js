import outsideClick from "./outside-click.js";

export default class MenuMobile {
  constructor(botao, lista, ativo, ...eventos){
    this.menuButton = document.querySelector(botao);
    this.menuList = document.querySelector(lista);
    this.ativo = ativo;

    if(!eventos.length) this.eventos = ['click', 'touchstart'];
    else this.eventos = eventos;

    //dando o bind
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(){
    this.menuButton.classList.add(this.ativo);
    this.menuList.classList.add(this.ativo);
    outsideClick(this.menuList, this.eventos, ()=>{
      this.menuButton.classList.remove(this.ativo);
      this.menuList.classList.remove(this.ativo);
    })
  }
  
  init(){
    if(this.menuButton){
      this.eventos.forEach((item)=>{
        this.menuButton.addEventListener(item, this.openMenu);
      });
    }
    return this;
  }

}





