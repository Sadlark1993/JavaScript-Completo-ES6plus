/*
 * Adicionar Classes para Manipulação

  A ideia de navegação por tabs, é ter uma lista de itens que controla a visualização de uma lista de conteúdo. Cada item da lista possui um conteúdo relacionado ao mesmo.
*/

//Navegacao por Tabs
function initTabNav() {
  //Selecionar os itens
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  //Verificar se existe elemento tabContent e tabMenu na pagina
  if (tabContent.length && tabMenu.length) {
    //adicionar 'ativo' ao primeiro item, para aparecer ao carregar a pg
    tabContent[0].classList.add("ativo");

    //callback do evento
    function activateTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    //evento
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activateTab(index);
      });
    });
  }
}
initTabNav();

//Menu Accordeon
function accordeon() {
  const accordeonMenu = document.querySelectorAll(".js-accordeon dt");

  if (accordeonMenu.length) {
    accordeonMenu[0].classList.add("ativo");
    accordeonMenu[0].nextElementSibling.classList.add("ativo");

    function callback() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    accordeonMenu.forEach((item) => {
      item.addEventListener("click", callback);
    });
  }
}
accordeon();

//Scroll Suave
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    //forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach((item) => {
    item.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

//Animacao ao Scroll
function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    //pegar 60% da altura da tela
    const window60 = window.innerHeight * 0.6;

    function animaScroll() {
      console.log("foi");
      sections.forEach((section) => {
        //pega a distanccia do topo da secao ao topo da tela
        const sectionTop = section.getBoundingClientRect().top;

        //valor booleano que determinara se a secao vai estar visivel
        const isSectionVisible = sectionTop - window60 < 0;

        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();
