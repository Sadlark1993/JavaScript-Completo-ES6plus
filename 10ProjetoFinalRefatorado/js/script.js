'use strict'; //impede bad actions.

import ScrollSuave from "./modules/scroll-suave.js";
import Accordeon from "./modules/accordeon.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";

import initAnimacaoScroll from "./modules/scroll-animacao.js";



import initDropdown from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";


const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordeon = new Accordeon('[data-anima="accordeon"] dt');
accordeon.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initAnimacaoScroll();
initDropdown();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
