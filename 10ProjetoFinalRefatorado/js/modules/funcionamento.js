
export default class Funcionamento{
  constructor(funcionamento, aberto, fechado){
    this.funcionamento = document.querySelector(funcionamento);
    this.aberto = aberto;
    this.fechado = fechado;
  }

  init(){
    //com esse macete de 'Number' no 'map', ele retorna um array de Numbers, nao de Strings
    const diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    const horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
    //console.log(diasSemana,horarioSemana);
    
    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horarioAgora = dataAgora.getUTCHours()-3;
    
    const dentroHorario = horarioAgora>=horarioSemana[0] && horarioAgora<horarioSemana[1];
    
    if(diasSemana.includes(diaAgora) && dentroHorario){
      this.funcionamento.classList.add(this.aberto);
      //console.log('aberto!')
    }else{
      this.funcionamento.classList.add(this.fechado);
    }

    return this;
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
