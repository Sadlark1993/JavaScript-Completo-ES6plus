//Navegacao por Tabs
export default function initTabNav() {
  //Selecionar os itens
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  //Verificar se existe elemento tabContent e tabMenu na pagina
  if (tabContent.length && tabMenu.length) {
    //adicionar 'ativo' ao primeiro item, para aparecer ao carregar a pg
    tabContent[0].classList.add("ativo");

    //callback do evento
    function activateTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove("ativo");
      });
      let anime = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo");
      tabContent[index].classList.add(anime);
    }

    //evento
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activateTab(index);
      });
    });
  }
}