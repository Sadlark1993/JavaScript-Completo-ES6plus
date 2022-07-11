
// Mude a cor da tela para azul e depois para vermelho a cada 2s.
/* body = document.querySelector('body');
let clear1 = false;

function usandoFor(){
  for(let i=0; i<50 ; i++){
    setTimeout(()=>{
      body.classList.remove('vermelho');
      body.classList.add('azul');
    },(2000*i-1000));
    setTimeout(()=>{
      body.classList.add('vermelho');
      body.classList.remove('azul');
    }, (2000*i));
  }
  window.addEventListener('keydown', handleKeyboard);

}




function usandoInterval(){
  setTimeout(()=>{
    intervalo1 = setInterval(()=>{
      body.classList.remove('vermelho');
      body.classList.add('azul');
      if(clear1){ 
        clearInterval(intervalo1);
        body.classList.remove('azul');
      }
  
    }, 2000);
  })


  setTimeout(()=>{
    intervalo2 = setInterval(()=>{
      body.classList.add('vermelho');
      body.classList.remove('azul');
      if(clear1){ 
        clearInterval(intervalo2);
        body.classList.remove('vermelho');
      }
    }, 2000);
  },1000);
  window.addEventListener('keydown', handleKeyboard);
} */

body = document.querySelector('body');
let clear1 = false;
let i=0;

function usandoInterval(){
  intervaloCor = setInterval(()=>{
    if(i%2){
      body.classList.remove('vermelho');
      body.classList.add('azul');
    }else{
      body.classList.add('vermelho');
      body.classList.remove('azul');
    }
    if(clear1){
      clearInterval(intervaloCor);
      body.classList.remove('vermelho');
      body.classList.remove('azul');
    }
    i++;
  },1000);

}

window.addEventListener('keydown', handleKeyboard);

function handleKeyboard(event, intervalo1, intervalo2){
  if(event.key === 'Enter'){
    clear1 = true;
  }
}

//usandoFor();
usandoInterval();

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

cronometro = document.createElement('p');
cronometro.classList.add('cronometro');
cronometro.innerText = 0;
div = document.querySelector('.leitor');
div.appendChild(cronometro);

const bIniciar = document.querySelector('.iniciar');
bIniciar.addEventListener('click', iniciar);

const bPausar = document.querySelector('.pausar');
bPausar.addEventListener('click', pausar);
let boolPausar = false;
let boolIniciar = false;

const bReiniciar = document.querySelector('.reiniciar');
bReiniciar.addEventListener('click', reiniciar);


function iniciar(){
  boolPausar = false;
  if(!boolIniciar){
    const intervalo = setInterval(()=>{
      if(boolPausar){
        clearInterval(intervalo);
      }else{
        cronometro.innerText++;
      }
    },1000);
    boolIniciar = true;
  }
}

function pausar(){
  boolPausar = true;
  boolIniciar = false;
}

function reiniciar(){
  cronometro.innerText = 0;
}