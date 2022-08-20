import Countdown from './countdown.js';

const diasParaNatal = new Countdown('24 December 2022 23:59:59 GMT-0400');
const diasParaAniversario = new Countdown('27 March 2023 00:00:00 GMT-0400');

console.log(diasParaNatal.total);

setInterval(()=>{
    console.log(diasParaAniversario.total);
}, 1000);


