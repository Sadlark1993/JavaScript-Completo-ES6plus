
export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal){
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    //definir o objeto dessa classe como o this no metodo. Se nao fizer isso, o this sera o link q o chamou.
    this.toggleModal = this.toggleModal.bind(this);
    this.cliqueFora = this.cliqueFora.bind(this);
  }
  
  
  toggleModal(event){
    event.preventDefault();
    this.containerModal.classList.toggle('ativo');
  }

  cliqueFora(event){
    if(event.target === event.currentTarget){
      this.toggleModal(event);
    }
  }

  init(){
    if(this.botaoAbrir&&this.botaoFechar&&this.containerModal){
      this.botaoAbrir.addEventListener('click', this.toggleModal);
      this.botaoFechar.addEventListener('click', this.toggleModal);
      this.containerModal.addEventListener('click', this.cliqueFora);
    }
    return this;
  }

  
}
