'use strict'; //impede bad actions.

import initScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import accordeon from "./modules/accordeon.js"
import initTabNav from "./modules/tab-nav.js"
//import {teste1, teste2} from "./modules/teste.js" //quando nao eh default, coloque entre chaves.
import * as teste from "./modules/teste.js" 

initScrollSuave();
initAnimacaoScroll();
accordeon();
initTabNav();
teste.teste1();
teste.teste2();
console.log(teste.senha);