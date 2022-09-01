'use strict';
import outsideClick from "./outside-click.js";

export default class Dropdown {
  constructor(dropdownMenu, ativo ,...events){
    this.dropdownMenu = document.querySelectorAll(dropdownMenu);
    
    if(events === undefined){//adicionando eventos padrao.
      this.events = ['click', 'touchstart'];
    }else{
      this.events = events; //eh um array de string dos eventos a serem escutados.
    }

    this.ativo = ativo;
    //dando o bind
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event){
    const element = event.currentTarget;
    event.preventDefault();
    element.classList.add(this.ativo);
    outsideClick(element, this.events, ()=>{
      element.classList.remove(this.ativo);
    });
  }

  init(){
    if(this.dropdownMenu.length){
      this.dropdownMenu.forEach((menu)=>{
        this.events.forEach((item)=>{
          menu.addEventListener(item, this.handleClick);
        });
      });
      return this;
    }
  }
  
}

//explicou event bubble
//explicou setTimeOut()
//explicou setInterval()