import debounce from './debounce-function.js'
export class Slide{
    constructor(slide, wrapper){
        this.slide = document.querySelector(slide);
        this.wrapper = document.querySelector(wrapper);
        this.activeClass = 'active';

        this.dist = {
            finalPosition: 0,
            startX: 0,
            movement: 0,
        };
    }

    transition(active){
        this.slide.style.transition = (active) ? 'transform 0.3s' : '';
    }

    moveSlide(distX){
        this.dist.movePosition = distX;
        this.slide.style.transform = `translate3d(${distX}px, 0px, 0px)`;
    }

    updatePosition(clientX){
        this.dist.movement = (clientX - this.dist.startX)*1.6;
        return this.dist.finalPosition + this.dist.movement;
    }

    onStart(event){
        this.transition(false);
        let moveType;
        if(event.type === 'mousedown'){
            event.preventDefault();
            this.dist.startX = event.clientX;
            moveType = 'mousemove';
        }else{
            this.dist.startX = event.changedTouches[0].clientX;
            moveType = 'touchmove';
        }
        document.addEventListener(moveType, this.onMove);
    }

    onMove(event){
        const pointerPosition = (event.type ==='mousemove')? event.clientX : event.changedTouches[0].clientX;
        const finalPosition = this.updatePosition(pointerPosition);
        this.moveSlide(finalPosition);
    }

    onEnd(event){
        const eventType = (event.type === 'mouseup') ? 'mousemove' : 'touchmove';
        document.removeEventListener(eventType, this.onMove);
        this.dist.finalPosition = this.dist.movePosition;
        this.changeSlideOnEnd();
    }

    changeSlideOnEnd(){
        if(this.dist.movement > 120 && this.index.prev !== undefined){
            this.activePrevSlide();
        }else if(this.dist.movement < -120 && this.index.next !== undefined){
            this.activeNextSlide();
        }else{
            this.changeSlide(this.index.active);
        }
    }

    addSlideEvents(){
        this.wrapper.addEventListener('mousedown', this.onStart);
        document.addEventListener('mouseup', this.onEnd);
        this.wrapper.addEventListener('touchstart', this.onStart);
        document.addEventListener('touchend', this.onEnd);
        window.addEventListener('resize', this.onResize);
    }

    

    //pega a posicao exata que a imagem deve se mover para ficar centralizado na tela.
    slidePosition(slide){
        //pega a margem esquerda da imagem para que ela fique centralizada na tela
        const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;

        //margemEsquerda - distanciaDaImagemParaBordaDaEsquerda
        return margin - slide.offsetLeft;
    }

    /* cria um array com objetos que contem o slide e o quanto ele deve se mover para ficar no centro da tela */
    slidesConfig(){
        /* Desestrutura this.slide.children (li's), os coloca dentro de um array e da o map */
        this.slideArray = [...this.slide.children].map((element)=>{
            const position = this.slidePosition(element);
            return {
                element,
                position,
            }
        });

    }

    slideIndexNav(index){
        const last = this.slideArray.length - 1;
        this.index = {
            prev: index ? index - 1 : undefined,
            active: index,
            next: index >= last ? undefined : index + 1,
        }
    }

    changeActiveClass(){
        this.slideArray.forEach((item)=>{
            item.element.classList.remove(this.activeClass);
        });
        this.slideArray[this.index.active].element.classList.add(this.activeClass);
    }

    changeSlide(index){
        this.transition(true);
        const activeSlide = this.slideArray[index];
        this.moveSlide(activeSlide.position);
        this.dist.finalPosition = activeSlide.position;
        this.slideIndexNav(index);
        this.changeActiveClass();
    }

    activePrevSlide(){
        if(this.index.prev !== undefined) this.changeSlide(this.index.prev);
    }

    activeNextSlide(){
        if(this.index.next !== undefined) this.changeSlide(this.index.next);
    }

    bindEvents(){
        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onEnd = this.onEnd.bind(this);
        this.updatePosition = this.updatePosition.bind(this);
        this.onResize = debounce(this.onResize.bind(this),200);
        this.activePrevSlide = this.activePrevSlide.bind(this);
        this.activeNextSlide = this.activeNextSlide.bind(this);
    }

    onResize(){
        setTimeout(()=>{
            this.slidesConfig();
            this.changeSlide(this.index.active);
        }, 1000);

    }

    init(){
        this.bindEvents();
        this.addSlideEvents();
        this.slidesConfig();
        this.changeSlide(0);
        return this;
    }
}

export default class SlideNav extends Slide {
    constructor(slide, wrapper, prevButton, nextButton, customControl){
        super(slide, wrapper); //chama o construtor da classe pai
        this.prevButton = prevButton;
        this.nextButton = nextButton;
        this.customControl = customControl;
    }

    //override
    changeSlide(index){
        this.transition(true);
        const activeSlide = this.slideArray[index];
        this.moveSlide(activeSlide.position);
        this.dist.finalPosition = activeSlide.position;
        this.slideIndexNav(index);
        this.changeActiveClass();

        /* Ao inves de usar esse meu metodo, o professor criou um novo evento
        veja o codigo do provessor se quiser saber mais (changeEvent).  */
        this.selectCurrentControl();
    }
    
    //botoes next e prev
    addArrow(prev, next){
        const prevElement = document.querySelector(prev);
        const nextElement = document.querySelector(next);
        
        //adicionando listeners
        prevElement.addEventListener('click', this.activePrevSlide);
        nextElement.addEventListener('click', this.activeNextSlide);
    }

    /* remove todas as classes 'active' dos icones de navegacao (control)*/
    removeControlActiveClasses(){
        this.controlArray.forEach((li) => {
            li.firstChild.classList.remove('active');
        });
    }

    /* cria links de controle para selecionar qual slide deve ficar ativo */
    createControl(){
        let control;
        if(!this.customControl){
            control = document.createElement('ul');
            this.slideArray.forEach((item, index) => {
                control.innerHTML += `<li><a href="#slide${index+1}">${index+1}</a></li>`;
            });
            this.wrapper.appendChild(control);
        }else{
            control = document.querySelector(this.customControl);
        }
        control.dataset.control = 'slide';
        this.controlArray = [...control.children];
        this.controlArray.forEach((li, index) => {
            li.firstChild.addEventListener('click', (event) => {
                event.preventDefault();
                this.changeSlide(index);
            });
        });
    }

    //adiciona a classe 'active' no controle do slide atual. So vai ser executado no carregamento da pg.
    selectCurrentControl(){
        this.removeControlActiveClasses();
        this.controlArray[this.index.active].firstChild.classList.add('active');
    }

    //override
    init(){
        this.bindEvents();
        this.addSlideEvents();
        this.slidesConfig();
        this.createControl();
        this.changeSlide(0);
        //this.addArrow(this.prevButton, this.nextButton); //nao tem arrow no site.
        return this;
    }
}

