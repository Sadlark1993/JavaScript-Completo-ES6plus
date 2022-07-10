
export default function initDropdown(){

}

const dropdownMenu = document.querySelectorAll('[data-dropdown]');

dropdownMenu.forEach((menu)=>{
  ['click', 'touchstart'].forEach((item)=>{
    menu.addEventListener(item, handleClick);
  });
});

function handleClick(event){
  event.preventDefault();
  this.classList.toggle('ativo');
}

//explicou event bubble.