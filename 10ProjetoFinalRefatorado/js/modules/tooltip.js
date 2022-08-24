
export default class Tooltip{
  constructor(dataTooltip){
    this.tooltips = document.querySelectorAll(dataTooltip);

    //bind para definir o this nos metodos como o objeto da classe.
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  //adiciona o evento que sera disparado quando o mouse entrar em cima do container especificado.
  init(){
    this.tooltips.forEach((item)=>{
      item.addEventListener('mouseover', ()=> this.onMouseOver(item));
    });
    return this;
  }

  
  //evento que serah disparado quando o mouse entrar em cima do container especificado.
  onMouseOver(item){
    this.tooltipBox = this.criarTooltipBox(item);
    item.addEventListener('mousemove', this.onMouseMove);
  
    item.addEventListener('mouseleave', ()=>this.onMouseLeave(item));
  }
  
  //cria o elemento tooltip box e o retorna.
  criarTooltipBox(element){
    const text = element.getAttribute('aria-label');
    const tooltipBox = document.createElement('div');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
  
  //exclui a tooltip box e remove os eventos de movimento de mouse e o proprio.
  onMouseLeave(item){
    this.tooltipBox.remove();
    item.removeEventListener('mouseleave', this.onMouseLeave);
    item.removeEventListener('mousemove', this.onMouseMove);
  }
  
  //evento que eh disparado ao movimentar o mouse sobre o container especificado.
  onMouseMove(event){
    this.tooltipBox.style.top = (event.pageY+20) +'px';

    if(event.pageX+240>window.innerWidth){ //para a tooltip nao sair da janela criando uma barra horizontal.
      this.tooltipBox.style.left = (event.pageX-200) +'px';
    }else{
      this.tooltipBox.style.left = (event.pageX+20) +'px';
    }
  }

}
