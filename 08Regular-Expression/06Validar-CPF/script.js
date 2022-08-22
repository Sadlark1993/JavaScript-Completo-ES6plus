import ValidarCPF from "./validarCPF.js";

const campoCPF = document.querySelector('#cpf');
const msgErro = document.querySelector('#erro');


let cpfValidado = new ValidarCPF(campoCPF, msgErro).iniciar();
//console.log(cpfValidado.validar('049 892 401.70'));



