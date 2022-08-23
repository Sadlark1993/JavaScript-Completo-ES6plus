'use strict'; //impede bad actions.

import ScrollSuave from "./modules/scroll-suave.js";
import Accordeon from "./modules/accordeon.js";

import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initTabNav from "./modules/tab-nav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js"
import initDropdown from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";


const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordeon = new Accordeon('[data-anima="accordeon"] dt');
accordeon.init();

initAnimacaoScroll();
initTabNav();
initModal();
initTooltip();
initDropdown();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();