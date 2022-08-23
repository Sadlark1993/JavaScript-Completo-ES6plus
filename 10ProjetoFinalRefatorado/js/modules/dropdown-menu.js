
import outsideClick from "./outside-click.js";

export default function initDropdown(){
  const dropdownMenu = document.querySelectorAll('[data-dropdown]');

  dropdownMenu.forEach((menu)=>{
    ['click', 'touchstart'].forEach((item)=>{
      menu.addEventListener(item, handleClick);
    });
  });
  
  function handleClick(event){
    event.preventDefault();
    this.classList.add('ativo');
    outsideClick(this, ['click', 'touchstart'], ()=>{
      this.classList.remove('ativo');
    });
  }
  
}

//explicou event bubble
//explicou setTimeOut()
//explicou setInterval()