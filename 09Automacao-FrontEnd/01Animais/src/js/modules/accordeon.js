//Menu Accordeon
export default function accordeon() {
  const accordeonMenu = document.querySelectorAll('[data-anima="accordeon"] dt');

  function callback() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  } 

  if (accordeonMenu.length) {
    accordeonMenu[0].classList.add("ativo");
    accordeonMenu[0].nextElementSibling.classList.add("ativo");



    accordeonMenu.forEach((item) => {
      item.addEventListener("click", callback);
    });
  }
} 
