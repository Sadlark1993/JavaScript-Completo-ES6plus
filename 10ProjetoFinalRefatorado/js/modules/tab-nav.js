//Navegacao por Tabs
export default class TabNav {
  constructor(menu, content){
    //Selecionar os itens
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
  }

  //callback do evento
  activateTab(index) {
    this.tabContent.forEach((content) => {
      content.classList.remove("ativo");
    });
    let anime = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add("ativo");
    this.tabContent[index].classList.add(anime);
  }

  init(){
      //Verificar se existe elemento tabContent e tabMenu na pagina
    if (this.tabContent.length && this.tabMenu.length) {
      //adicionar 'ativo' ao primeiro item, para aparecer ao carregar a pg
      this.activateTab(0);

      //evento
      this.tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener("click", () => {
          this.activateTab(index);
        });
      });
    }
    return this;
  }
}