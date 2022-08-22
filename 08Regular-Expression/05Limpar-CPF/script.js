

const liCPF = document.querySelectorAll('.cpf li');

//console.log(liCPF);

const limpaCPF = (...cpf)=>{
  return cpf.map((item)=>item.innerText.replace(/\D/g, ''));
}

const cpfLimpo = limpaCPF(...liCPF);

const buildaCPF = (cpf)=>{
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

cpfLimpo.forEach((item,i)=>{
  //console.log(buildaCPF(item));
  liCPF[i].innerText = buildaCPF(item);
});