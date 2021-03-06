//Animacao ao Scroll
export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-scroll="anima"]');

  if (sections.length) {
    //pegar 60% da altura da tela
    const window60 = window.innerHeight * 0.6;

    function animaScroll() {
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