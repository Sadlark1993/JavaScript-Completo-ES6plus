

const botao = document.querySelector('.btn');
const controles = document.querySelector('#controles');
const cssTexto = document.querySelector('.css');

controles.addEventListener('change', handleChange);

function handleChange(event){
  const nome = event.target.name;
  const value = event.target.value;
  styleSetter[nome](value);
  showCss();
  saveValue(nome, value);
}

const styleSetter = {
  element: botao,
  texto(value){
    this.element.innerText = value;
  },

  color(value){
    this.element.style.color = value;
  },

  backgroundColor(value){
    this.element.style.backgroundColor = value;
  },

  height(value){
    this.element.style.height = value+'px';
  },
  
  width(value){
    this.element.style.width = value+'px';
  },

  border(value){
    this.element.style.border = value;
  },

  borderRadius(value){
    this.element.style.borderRadius = value+'px';
  },

  fontFamily(value){
    this.element.style.fontFamily = value;
  },

  fontSize(value){
    this.element.style.fontSize = value+'rem';
  }
}

function showCss(){
  let texto = botao.style.cssText;
  texto = texto.split(';');
  texto = '<span> '+texto.join(';</span><span>');
  //console.log(texto);
  cssTexto.innerHTML = texto;
}

function saveValue(nome, value){
  localStorage[nome] = value;
}

function setValues(){
  const properties = Object.keys(localStorage);
  properties.forEach((item)=>{
    styleSetter[item](localStorage[item]);
  });
}
setValues();
showCss();