
export default function initFuncionamento(){
  const funcionamento = document.querySelector('[data-semana]');

  //com esse macete de 'Number' no 'map', ele retorna um array de Numbers, nao de Strings
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
  //console.log(diasSemana,horarioSemana);
  
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();
  
  const dentroHorario = horarioAgora>=horarioSemana[0] && horarioAgora<horarioSemana[1];
  
  if(diasSemana.includes(diaAgora) && dentroHorario){
    funcionamento.classList.add('aberto');
    //console.log('aberto!')
  }else{
    funcionamento.classList.add('fechado');
  }
}

/* const agora = new Date();
const futuro = new Date('dec 25 2022 00:01');

console.log(agora.getMonth());
console.log(futuro);

function transformarDias(tempo){
  return tempo / (24*60*60*1000);
}

const diasAgora = transformarDias(agora.getTime());
const diasFuturo = transformarDias(futuro.getTime());

console.log('\nFaltam '+Math.floor(diasFuturo-diasAgora)+' dias para o natal'); */
