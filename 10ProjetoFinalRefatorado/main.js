/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordeon.js":
/*!*********************************!*\
  !*** ./js/modules/accordeon.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ accordeon)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\n//Menu Accordeon\nvar accordeon = /*#__PURE__*/function () {\n  function accordeon(link) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, accordeon);\n\n    this.accordeonMenu = document.querySelectorAll(link);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(accordeon, [{\n    key: \"callback\",\n    value: function callback(item) {\n      item.classList.toggle(\"ativo\");\n      item.nextElementSibling.classList.toggle(\"ativo\");\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      //iniciar execucao da classe\n      if (this.accordeonMenu.length) {\n        this.callback(this.accordeonMenu[0]);\n        this.accordeonMenu.forEach(function (item) {\n          item.addEventListener(\"click\", function () {\n            return _this.callback(item);\n          });\n        });\n      }\n\n      return this;\n    }\n  }]);\n\n  return accordeon;\n}();\n\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordeon.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\n//acabei fazendo as mudancas na pasta menu-mobile\nvar AnimaNumeros = /*#__PURE__*/function () {\n  /* \n  args: atributo do objeto a ser incrementado (numero++);\n        classe da sessao onde os divs foram inseridos\n  */\n  function AnimaNumeros(numeros, secaoNumeros, ativo) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, AnimaNumeros);\n\n    this.numeros = document.querySelectorAll(numeros);\n    this.observerTarget = document.querySelector(secaoNumeros);\n    this.ativo = ativo; //Faz com que o 'this' nesse metodo seja sempre o objeto da classe atual.\n\n    this.handleMutation = this.handleMutation.bind(this);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(AnimaNumeros, [{\n    key: \"init\",\n    value: function init() {\n      if (this.numeros.length && this.observerTarget) {\n        this.observer = new MutationObserver(this.handleMutation); //Observar a secao com a classe 'secaoNumeros', quando a classe 'ativo' aparecer nela, ele inicia a execucao da animacao.\n\n        this.observer.observe(this.observerTarget, {\n          attributes: true\n        });\n      }\n\n      return this;\n    }\n    /* \n    recebe um elemento do DOM com um numero, faz a animacao desse numero incrementando de zero ate ele.\n    */\n\n  }, {\n    key: \"animarNumeros\",\n    value: function animarNumeros() {\n      var _this = this;\n\n      this.numeros.forEach(function (numero) {\n        _this.constructor.incrementarNumero(numero);\n      });\n    }\n  }, {\n    key: \"handleMutation\",\n    value: function handleMutation(mutation) {\n      if (mutation[0].target.classList.contains(this.ativo)) {\n        this.observer.disconnect();\n        this.animarNumeros();\n      }\n    }\n  }], [{\n    key: \"incrementarNumero\",\n    value: function incrementarNumero(numero) {\n      var total = +numero.innerText;\n      var incremento = Math.floor(total / 100);\n      var start = 0;\n      var timer = setInterval(function () {\n        start += incremento;\n        numero.innerText = start;\n\n        if (start > total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, 35 * Math.random());\n    }\n  }]);\n\n  return AnimaNumeros;\n}();\n\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/debounce-function.js":
/*!*****************************************!*\
  !*** ./js/modules/debounce-function.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\n/* Debounce: Quando usamos o event listener no scroll, a cada unico scroll a funcao de callback eh ativada\r\numa vez. Entao, num scroll comum, a funcao de callback serah ativada dezenas de vezes. A funcao de debounce \r\nserve para evitar que isso ocorra.\r\n\r\nNesse caso aqui, o script vai esperar o usuario parar de dar scroll para executar o callback do listener.\r\n */\nfunction debounce(callback, delay) {\n  var timer;\n  /* esse retorno eh um macete para preservar o valor da variavel 'timer' sem ter que \r\n  declara-la do lado de fora da funcao.\r\n   Esse 'args' eh para fazer o codigo ser mais versatil para o caso de o callback 'onScroll' precisar \r\n  receber argumentos.*/\n\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    /* se o varlor guardado na variavel 'timer' nao for falsy, ele vai cancelar a execucao do\r\n    codigo assincrono.*/\n    if (timer) clearTimeout(timer);\n    /* vai esperar um tempinho para executar o codigo. Se a funcao for chamada novamente,\r\n    ele vai cancelar essa execucao do codigo e vai executar apenas a ultima que foi chamada. */\n\n    timer = setTimeout(function () {\n      callback.apply(void 0, args);\n      timer = null;\n    }, delay);\n  };\n}\n/* exemplo de uso: \r\n\r\n    const debouncedScroll = debounce(callbackFunction, 200); \r\n    element.addEventListener('<event>', debouncedScroll);  \r\n      \r\n*/\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/debounce-function.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dropdown)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\n\n\n\n\n\nvar Dropdown = /*#__PURE__*/function () {\n  function Dropdown(dropdownMenu, ativo) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Dropdown);\n\n    this.dropdownMenu = document.querySelectorAll(dropdownMenu);\n\n    for (var _len = arguments.length, events = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n      events[_key - 2] = arguments[_key];\n    }\n\n    if (events === undefined) {\n      //adicionando eventos padrao.\n      this.events = ['click', 'touchstart'];\n    } else {\n      this.events = events; //eh um array de string dos eventos a serem escutados.\n    }\n\n    this.ativo = ativo; //dando o bind\n\n    this.handleClick = this.handleClick.bind(this);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Dropdown, [{\n    key: \"handleClick\",\n    value: function handleClick(event) {\n      var _this = this;\n\n      var element = event.currentTarget;\n      event.preventDefault();\n      element.classList.add(this.ativo);\n      (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element, this.events, function () {\n        element.classList.remove(_this.ativo);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this2 = this;\n\n      if (this.dropdownMenu.length) {\n        this.dropdownMenu.forEach(function (menu) {\n          _this2.events.forEach(function (item) {\n            menu.addEventListener(item, _this2.handleClick);\n          });\n        });\n        return this;\n      }\n    }\n  }]);\n\n  return Dropdown;\n}(); //explicou event bubble\n//explicou setTimeOut()\n//explicou setInterval()\n\n\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\n\n\n\n\n/* \r\nRecupera os objetos de animaisApi.json, cria uma div com um h3 e um span para cada um desses objetos e a \r\ninsere dentro do bloco (no index.html) cuja classe eh 'numeros-grid'. Depois ele inicia a execucao do \r\nmetodo 'animaNumeros.init()'.\r\n*/\n\nvar FetchAnimais = /*#__PURE__*/function () {\n  function FetchAnimais(jsonUrl, numerosGrid, sectionClass, activeClass) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, FetchAnimais);\n\n    this.jsonUrl = jsonUrl;\n    this.numerosGrid = numerosGrid;\n    this.sectionClass = sectionClass;\n    this.activeClass = activeClass;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(FetchAnimais, [{\n    key: \"init\",\n    value: function init() {\n      this.fetchAnimais(this.jsonUrl);\n      return this;\n    } //faz o fetch dos nomes e numeros de animais do arquivo json\n\n  }, {\n    key: \"fetchAnimais\",\n    value: function () {\n      var _fetchAnimais = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(url) {\n        var _this = this;\n\n        var animaisResponse, animaisJSON, numerosGrid, animaNumeros;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return fetch(url);\n\n              case 3:\n                animaisResponse = _context.sent;\n                _context.next = 6;\n                return animaisResponse.json();\n\n              case 6:\n                animaisJSON = _context.sent;\n                numerosGrid = document.querySelector(this.numerosGrid);\n                animaisJSON.forEach(function (item) {\n                  var div = _this.createAnimal(item);\n\n                  numerosGrid.appendChild(div);\n                });\n                /* argumentos: atributo do objeto do numero a ser incrementado; \r\n                               classe da sessao onde as divs foram inseridas,\r\n                               nome da classe que informa se a secao esta visivel\r\n                */\n\n                animaNumeros = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-numero]', this.sectionClass, this.activeClass);\n                animaNumeros.init();\n                _context.next = 16;\n                break;\n\n              case 13:\n                _context.prev = 13;\n                _context.t0 = _context[\"catch\"](0);\n                console.log(_context.t0);\n\n              case 16:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this, [[0, 13]]);\n      }));\n\n      function fetchAnimais(_x) {\n        return _fetchAnimais.apply(this, arguments);\n      }\n\n      return fetchAnimais;\n    }() //cria a div com o nome e o numero de animais\n\n  }, {\n    key: \"createAnimal\",\n    value: function createAnimal(animal) {\n      var div = document.createElement('div');\n      div.classList.add('numero-animal');\n      div.innerHTML = \"<h3>\".concat(animal.specie, \"</h3>\\n<span data-numero>\").concat(animal.total, \"</span>\");\n      return div;\n    }\n  }]);\n\n  return FetchAnimais;\n}();\n\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBitcoin)\n/* harmony export */ });\nfunction fetchBitcoin(numberClass) {\n  fetch('https://blockchain.info/ticker').then(function (res) {\n    return res.json();\n  }).then(function (res) {\n    document.querySelector(numberClass).innerText = (100 / res.BRL.last).toFixed(6); //console.log(res.BRL.last);\n  })[\"catch\"](function (error) {\n    console.log(error);\n  });\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Funcionamento)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar Funcionamento = /*#__PURE__*/function () {\n  function Funcionamento(funcionamento, aberto, fechado) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Funcionamento);\n\n    this.funcionamento = document.querySelector(funcionamento);\n    this.aberto = aberto;\n    this.fechado = fechado;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Funcionamento, [{\n    key: \"init\",\n    value: function init() {\n      //com esse macete de 'Number' no 'map', ele retorna um array de Numbers, nao de Strings\n      var diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);\n      var horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number); //console.log(diasSemana,horarioSemana);\n\n      var dataAgora = new Date();\n      var diaAgora = dataAgora.getDay();\n      var horarioAgora = dataAgora.getUTCHours() - 3;\n      var dentroHorario = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\n\n      if (diasSemana.includes(diaAgora) && dentroHorario) {\n        this.funcionamento.classList.add(this.aberto); //console.log('aberto!')\n      } else {\n        this.funcionamento.classList.add(this.fechado);\n      }\n\n      return this;\n    }\n  }]);\n\n  return Funcionamento;\n}();\n/* const agora = new Date();\r\nconst futuro = new Date('dec 25 2022 00:01');\r\n\r\nconsole.log(agora.getMonth());\r\nconsole.log(futuro);\r\n\r\nfunction transformarDias(tempo){\r\n  return tempo / (24*60*60*1000);\r\n}\r\n\r\nconst diasAgora = transformarDias(agora.getTime());\r\nconst diasFuturo = transformarDias(futuro.getTime());\r\n\r\nconsole.log('\\nFaltam '+Math.floor(diasFuturo-diasAgora)+' dias para o natal'); */\n\n\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\n\n\n\nvar MenuMobile = /*#__PURE__*/function () {\n  function MenuMobile(botao, lista, ativo) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MenuMobile);\n\n    this.menuButton = document.querySelector(botao);\n    this.menuList = document.querySelector(lista);\n    this.ativo = ativo;\n\n    for (var _len = arguments.length, eventos = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {\n      eventos[_key - 3] = arguments[_key];\n    }\n\n    if (!eventos.length) this.eventos = ['click', 'touchstart'];else this.eventos = eventos; //dando o bind\n\n    this.openMenu = this.openMenu.bind(this);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MenuMobile, [{\n    key: \"openMenu\",\n    value: function openMenu() {\n      var _this = this;\n\n      this.menuButton.classList.add(this.ativo);\n      this.menuList.classList.add(this.ativo);\n      (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.menuList, this.eventos, function () {\n        _this.menuButton.classList.remove(_this.ativo);\n\n        _this.menuList.classList.remove(_this.ativo);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this2 = this;\n\n      if (this.menuButton) {\n        this.eventos.forEach(function (item) {\n          _this2.menuButton.addEventListener(item, _this2.openMenu);\n        });\n      }\n\n      return this;\n    }\n  }]);\n\n  return MenuMobile;\n}();\n\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(botaoAbrir, botaoFechar, containerModal) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Modal);\n\n    this.botaoAbrir = document.querySelector(botaoAbrir);\n    this.botaoFechar = document.querySelector(botaoFechar);\n    this.containerModal = document.querySelector(containerModal); //definir o objeto dessa classe como o this no metodo. Se nao fizer isso, o this sera o link q o chamou.\n\n    this.toggleModal = this.toggleModal.bind(this);\n    this.cliqueFora = this.cliqueFora.bind(this);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Modal, [{\n    key: \"toggleModal\",\n    value: function toggleModal(event) {\n      event.preventDefault();\n      this.containerModal.classList.toggle('ativo');\n    }\n  }, {\n    key: \"cliqueFora\",\n    value: function cliqueFora(event) {\n      if (event.target === event.currentTarget) {\n        this.toggleModal(event);\n      }\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\n        this.botaoAbrir.addEventListener('click', this.toggleModal);\n        this.botaoFechar.addEventListener('click', this.toggleModal);\n        this.containerModal.addEventListener('click', this.cliqueFora);\n      }\n\n      return this;\n    }\n  }]);\n\n  return Modal;\n}();\n\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outside-click.js":
/*!*************************************!*\
  !*** ./js/modules/outside-click.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callBack) {\n  var html = document.documentElement;\n  var outside = 'data-outside';\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach(function (userEvent) {\n      setTimeout(function () {\n        return html.addEventListener(userEvent, handleOutsideClick);\n      });\n    });\n    element.setAttribute(outside, '');\n  }\n\n  function handleOutsideClick(event) {\n    //event.target: onde o click ocorreu\n    //event.currentTarget: this\n    if (!element.contains(event.target)) {\n      callBack();\n      events.forEach(function (userEvent) {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      element.removeAttribute(outside);\n    }\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outside-click.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimacaoScroll)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _debounce_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debounce-function.js */ \"./js/modules/debounce-function.js\");\n\n\n\n//Animacao ao Scroll\n\n\nvar AnimacaoScroll = /*#__PURE__*/function () {\n  function AnimacaoScroll(sections) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, AnimacaoScroll);\n\n    this.sections = document.querySelectorAll(sections); //pegar 60% da altura da tela\n\n    this.window60 = window.innerHeight * 0.6; //setar o 'this' como o objeto da classe.\n\n    /* colocar debounce na funcao para ela nao ativar centenas de vezes por segundo \r\n    quando o usuario der scroll */\n\n    this.checkDistance = (0,_debounce_function_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.checkDistance.bind(this), 50);\n  }\n  /* Pega a distancia de cada item em relacao ao topo do site */\n\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(AnimacaoScroll, [{\n    key: \"getDistance\",\n    value: function getDistance() {\n      var _this = this;\n\n      this.distance = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.sections).map(function (section) {\n        var offset = section.offsetTop;\n        return {\n          element: section,\n          offset: Math.floor(offset - _this.window60)\n        };\n      });\n    }\n    /* dependendo da distancia de de cada objeto ao topo do site\r\n    comparado ao scroll, esse metodo vai adicionar ou remover\r\n    a classe 'ativo' dele.  */\n\n  }, {\n    key: \"checkDistance\",\n    value: function checkDistance() {\n      this.distance.forEach(function (item) {\n        if (window.pageYOffset > item.offset) {\n          item.element.classList.add('ativo');\n        } else if (item.element.classList.contains('ativo')) {\n          item.element.classList.remove('ativo');\n        }\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.sections.length) {\n        this.getDistance();\n        this.checkDistance();\n        window.addEventListener(\"scroll\", this.checkDistance);\n      }\n\n      return this;\n    } // Remove o event de scroll\n\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      window.removeEventListener('scroll', this.checkDistance);\n    }\n  }]);\n\n  return AnimacaoScroll;\n}();\n\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\n//Scroll Suave\nvar ScrollSuave = /*#__PURE__*/function () {\n  function ScrollSuave(links, options) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ScrollSuave);\n\n    this.linksInternos = document.querySelectorAll(links);\n\n    if (options === undefined) {\n      this.options = {\n        behavior: 'smooth',\n        block: 'start'\n      };\n    } else {\n      this.options = options;\n    } //define a classe como o this eterno desse metodo. Se nao fizer isso, o this passa ser o link q o chamou.\n\n\n    this.scrollToSection = this.scrollToSection.bind(this); //<<--- prestencao.\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ScrollSuave, [{\n    key: \"scrollToSection\",\n    value: function scrollToSection(event) {\n      event.preventDefault();\n      var href = event.currentTarget.getAttribute(\"href\");\n      var section = document.querySelector(href);\n      section.scrollIntoView(this.options);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      //Inicia o plugin\n      this.linksInternos.forEach(function (item) {\n        item.addEventListener(\"click\", _this.scrollToSection);\n      });\n      return this;\n    }\n  }]);\n\n  return ScrollSuave;\n}();\n\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tab-nav.js":
/*!*******************************!*\
  !*** ./js/modules/tab-nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\n//Navegacao por Tabs\nvar TabNav = /*#__PURE__*/function () {\n  function TabNav(menu, content) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, TabNav);\n\n    //Selecionar os itens\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabContent = document.querySelectorAll(content);\n  } //callback do evento\n\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(TabNav, [{\n    key: \"activateTab\",\n    value: function activateTab(index) {\n      this.tabContent.forEach(function (content) {\n        content.classList.remove(\"ativo\");\n      });\n      var anime = this.tabContent[index].dataset.anime;\n      this.tabContent[index].classList.add(\"ativo\");\n      this.tabContent[index].classList.add(anime);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      //Verificar se existe elemento tabContent e tabMenu na pagina\n      if (this.tabContent.length && this.tabMenu.length) {\n        //adicionar 'ativo' ao primeiro item, para aparecer ao carregar a pg\n        this.activateTab(0); //evento\n\n        this.tabMenu.forEach(function (itemMenu, index) {\n          itemMenu.addEventListener(\"click\", function () {\n            _this.activateTab(index);\n          });\n        });\n      }\n\n      return this;\n    }\n  }]);\n\n  return TabNav;\n}();\n\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tab-nav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar Tooltip = /*#__PURE__*/function () {\n  function Tooltip(dataTooltip) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Tooltip);\n\n    this.tooltips = document.querySelectorAll(dataTooltip); //bind para definir o this nos metodos como o objeto da classe.\n\n    this.onMouseOver = this.onMouseOver.bind(this);\n    this.onMouseMove = this.onMouseMove.bind(this);\n    this.onMouseLeave = this.onMouseLeave.bind(this);\n  } //adiciona o evento que sera disparado quando o mouse entrar em cima do container especificado.\n\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Tooltip, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.tooltips.forEach(function (item) {\n        item.addEventListener('mouseover', function () {\n          return _this.onMouseOver(item);\n        });\n      });\n      return this;\n    } //evento que serah disparado quando o mouse entrar em cima do container especificado.\n\n  }, {\n    key: \"onMouseOver\",\n    value: function onMouseOver(item) {\n      var _this2 = this;\n\n      this.tooltipBox = this.criarTooltipBox(item);\n      item.addEventListener('mousemove', this.onMouseMove);\n      item.addEventListener('mouseleave', function () {\n        return _this2.onMouseLeave(item);\n      });\n    } //cria o elemento tooltip box e o retorna.\n\n  }, {\n    key: \"criarTooltipBox\",\n    value: function criarTooltipBox(element) {\n      var text = element.getAttribute('aria-label');\n      var tooltipBox = document.createElement('div');\n      tooltipBox.classList.add('tooltip');\n      tooltipBox.innerText = text;\n      document.body.appendChild(tooltipBox);\n      return tooltipBox;\n    } //exclui a tooltip box e remove os eventos de movimento de mouse e o proprio.\n\n  }, {\n    key: \"onMouseLeave\",\n    value: function onMouseLeave(item) {\n      this.tooltipBox.remove();\n      item.removeEventListener('mouseleave', this.onMouseLeave);\n      item.removeEventListener('mousemove', this.onMouseMove);\n    } //evento que eh disparado ao movimentar o mouse sobre o container especificado.\n\n  }, {\n    key: \"onMouseMove\",\n    value: function onMouseMove(event) {\n      this.tooltipBox.style.top = event.pageY + 20 + 'px';\n\n      if (event.pageX + 240 > window.innerWidth) {\n        //para a tooltip nao sair da janela criando uma barra horizontal.\n        this.tooltipBox.style.left = event.pageX - 200 + 'px';\n      } else {\n        this.tooltipBox.style.left = event.pageX + 20 + 'px';\n      }\n    }\n  }]);\n\n  return Tooltip;\n}();\n\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordeon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordeon.js */ \"./js/modules/accordeon.js\");\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./js/modules/tab-nav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n //impede bad actions.\n\n\n\n\n\n\n\n\n\n\n\n\nvar scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\nscrollSuave.init();\nvar accordeon = new _modules_accordeon_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-anima=\"accordeon\"] dt');\naccordeon.init();\nvar tabNav = new _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\ntabNav.init();\nvar modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\nmodal.init();\nvar tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-tooltip]');\ntooltip.init();\n/* args: Json file url, selecao do bloco onde as divs dos animais serao inseridas,\r\n selecao da secao que vai aparecer,nome da classe que indica q a secao estah visivel*/\n\nvar fetchAnimais = new _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('./animaisApi.json', '.numeros-grid', '.numeros', 'ativo');\nfetchAnimais.init();\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('.btc-preco');\n/* args: chamada da secao a ser animada (some e aparece).*/\n\nvar animacaoScroll = new _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]('[data-scroll=\"anima\"]');\nanimacaoScroll.init();\n/* args: chamada secao, nome da classe de ativacao do bloco, eventos a serem escutados  */\n\nvar dropdown = new _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]('[data-dropdown]', 'ativo', 'click', 'touchstart');\ndropdown.init();\n/* args: chamada do botao, chamada da lista que vai surgir, classe de ativacao do bloco,\r\neventos de ativacao do bloco*/\n\nvar menuMobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]('[data-menu=\"button\"]', '[data-menu=\"list\"]', 'active', 'click', 'touchstart');\nmenuMobile.init();\n/* args: chamda do bloco onde vai ficar a classe de ativacao, nome das classes que indicam\r\nse esta aberto ou fechado, respectivamente. */\n\nvar funcionamento = new _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]('[data-semana]', 'aberto', 'fechado');\nfuncionamento.init();\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\n\nfunction _regeneratorRuntime() {\n  \"use strict\";\n  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */\n\n  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return exports;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  var exports = {},\n      Op = Object.prototype,\n      hasOwn = Op.hasOwnProperty,\n      $Symbol = \"function\" == typeof Symbol ? Symbol : {},\n      iteratorSymbol = $Symbol.iterator || \"@@iterator\",\n      asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\",\n      toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function define(obj, key, value) {\n    return Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: !0,\n      configurable: !0,\n      writable: !0\n    }), obj[key];\n  }\n\n  try {\n    define({}, \"\");\n  } catch (err) {\n    define = function define(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,\n        generator = Object.create(protoGenerator.prototype),\n        context = new Context(tryLocsList || []);\n    return generator._invoke = function (innerFn, self, context) {\n      var state = \"suspendedStart\";\n      return function (method, arg) {\n        if (\"executing\" === state) throw new Error(\"Generator is already running\");\n\n        if (\"completed\" === state) {\n          if (\"throw\" === method) throw arg;\n          return doneResult();\n        }\n\n        for (context.method = method, context.arg = arg;;) {\n          var delegate = context.delegate;\n\n          if (delegate) {\n            var delegateResult = maybeInvokeDelegate(delegate, context);\n\n            if (delegateResult) {\n              if (delegateResult === ContinueSentinel) continue;\n              return delegateResult;\n            }\n          }\n\n          if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) {\n            if (\"suspendedStart\" === state) throw state = \"completed\", context.arg;\n            context.dispatchException(context.arg);\n          } else \"return\" === context.method && context.abrupt(\"return\", context.arg);\n          state = \"executing\";\n          var record = tryCatch(innerFn, self, context);\n\n          if (\"normal\" === record.type) {\n            if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue;\n            return {\n              value: record.arg,\n              done: context.done\n            };\n          }\n\n          \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg);\n        }\n      };\n    }(innerFn, self, context), generator;\n  }\n\n  function tryCatch(fn, obj, arg) {\n    try {\n      return {\n        type: \"normal\",\n        arg: fn.call(obj, arg)\n      };\n    } catch (err) {\n      return {\n        type: \"throw\",\n        arg: err\n      };\n    }\n  }\n\n  exports.wrap = wrap;\n  var ContinueSentinel = {};\n\n  function Generator() {}\n\n  function GeneratorFunction() {}\n\n  function GeneratorFunctionPrototype() {}\n\n  var IteratorPrototype = {};\n  define(IteratorPrototype, iteratorSymbol, function () {\n    return this;\n  });\n  var getProto = Object.getPrototypeOf,\n      NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);\n  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);\n\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function (method) {\n      define(prototype, method, function (arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n\n      if (\"throw\" !== record.type) {\n        var result = record.arg,\n            value = result.value;\n        return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) {\n          invoke(\"next\", value, resolve, reject);\n        }, function (err) {\n          invoke(\"throw\", err, resolve, reject);\n        }) : PromiseImpl.resolve(value).then(function (unwrapped) {\n          result.value = unwrapped, resolve(result);\n        }, function (error) {\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n\n      reject(record.arg);\n    }\n\n    var previousPromise;\n\n    this._invoke = function (method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new PromiseImpl(function (resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n    };\n  }\n\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n\n    if (undefined === method) {\n      if (context.delegate = null, \"throw\" === context.method) {\n        if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel;\n        context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n    if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel;\n    var info = record.arg;\n    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel);\n  }\n\n  function pushTryEntry(locs) {\n    var entry = {\n      tryLoc: locs[0]\n    };\n    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\", delete record.arg, entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    this.tryEntries = [{\n      tryLoc: \"root\"\n    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);\n  }\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) return iteratorMethod.call(iterable);\n      if (\"function\" == typeof iterable.next) return iterable;\n\n      if (!isNaN(iterable.length)) {\n        var i = -1,\n            next = function next() {\n          for (; ++i < iterable.length;) {\n            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;\n          }\n\n          return next.value = undefined, next.done = !0, next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    return {\n      next: doneResult\n    };\n  }\n\n  function doneResult() {\n    return {\n      value: undefined,\n      done: !0\n    };\n  }\n\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, \"constructor\", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) {\n    var ctor = \"function\" == typeof genFun && genFun.constructor;\n    return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name));\n  }, exports.mark = function (genFun) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun;\n  }, exports.awrap = function (arg) {\n    return {\n      __await: arg\n    };\n  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {\n    return this;\n  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    void 0 === PromiseImpl && (PromiseImpl = Promise);\n    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);\n    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {\n      return result.done ? result.value : iter.next();\n    });\n  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () {\n    return this;\n  }), define(Gp, \"toString\", function () {\n    return \"[object Generator]\";\n  }), exports.keys = function (object) {\n    var keys = [];\n\n    for (var key in object) {\n      keys.push(key);\n    }\n\n    return keys.reverse(), function next() {\n      for (; keys.length;) {\n        var key = keys.pop();\n        if (key in object) return next.value = key, next.done = !1, next;\n      }\n\n      return next.done = !0, next;\n    };\n  }, exports.values = values, Context.prototype = {\n    constructor: Context,\n    reset: function reset(skipTempReset) {\n      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {\n        \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);\n      }\n    },\n    stop: function stop() {\n      this.done = !0;\n      var rootRecord = this.tryEntries[0].completion;\n      if (\"throw\" === rootRecord.type) throw rootRecord.arg;\n      return this.rval;\n    },\n    dispatchException: function dispatchException(exception) {\n      if (this.done) throw exception;\n      var context = this;\n\n      function handle(loc, caught) {\n        return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i],\n            record = entry.completion;\n        if (\"root\" === entry.tryLoc) return handle(\"end\");\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\"),\n              hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n          } else {\n            if (!hasFinally) throw new Error(\"try statement without catch or finally\");\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          }\n        }\n      }\n    },\n    abrupt: function abrupt(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n\n        if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);\n      var record = finallyEntry ? finallyEntry.completion : {};\n      return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);\n    },\n    complete: function complete(record, afterLoc) {\n      if (\"throw\" === record.type) throw record.arg;\n      return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;\n    },\n    finish: function finish(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;\n      }\n    },\n    \"catch\": function _catch(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n\n          if (\"throw\" === record.type) {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n\n          return thrown;\n        }\n      }\n\n      throw new Error(\"illegal catch attempt\");\n    },\n    delegateYield: function delegateYield(iterable, resultName, nextLoc) {\n      return this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel;\n    }\n  }, exports;\n}\n\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(obj);\n}\n\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayLikeToArray)\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithoutHoles)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArray)\n/* harmony export */ });\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableSpread)\n/* harmony export */ });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toConsumableArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _unsupportedIterableToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;