'use strict'; //impede bad actions.

import ScrollSuave from "./modules/scroll-suave.js";
import Accordeon from "./modules/accordeon.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import FetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import AnimacaoScroll from "./modules/scroll-animacao.js";
import Dropdown from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";



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

/* args: Json file url, selecao do bloco onde as divs dos animais serao inseridas,
 selecao da secao que vai aparecer,nome da classe que indica q a secao estah visivel*/
const fetchAnimais = new FetchAnimais('./animaisApi.json', '.numeros-grid', '.numeros', 'ativo');
fetchAnimais.init();

initFetchBitcoin('.btc-preco');

/* args: chamada da secao a ser animada (some e aparece).*/
const animacaoScroll = new AnimacaoScroll('[data-scroll="anima"]');
animacaoScroll.init();

/* args: chamada secao, nome da classe de ativacao do bloco, eventos a serem escutados  */
const dropdown = new Dropdown('[data-dropdown]','ativo', 'click', 'touchstart');
dropdown.init();

/* args: chamada do botao, chamada da lista que vai surgir, classe de ativacao do bloco,
eventos de ativacao do bloco*/
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]', 'active', 'click', 'touchstart');
menuMobile.init();

/* args: chamda do bloco onde vai ficar a classe de ativacao, nome das classes que indicam
se esta aberto ou fechado, respectivamente. */
const funcionamento = new Funcionamento('[data-semana]', 'aberto', 'fechado');
funcionamento.init();



