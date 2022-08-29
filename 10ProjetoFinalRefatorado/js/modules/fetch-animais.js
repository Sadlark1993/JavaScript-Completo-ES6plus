import AnimaNumeros from "./anima-numeros.js";

    /* 
    Recupera os objetos de animaisApi.json, cria uma div com um h3 e um span para cada um desses objetos e a 
    insere dentro do bloco (no index.html) cuja classe eh 'numeros-grid'. Depois ele inicia a execucao do 
    metodo 'animaNumeros.init()'.
    */
export default class FetchAnimais{
    constructor(jsonUrl, numerosGrid, sectionClass, activeClass){
        this.jsonUrl = jsonUrl;
        this.numerosGrid = numerosGrid;
        this.sectionClass = sectionClass
        this.activeClass = activeClass;
    }

    init(){
        this.fetchAnimais(this.jsonUrl);
        return this;
    }

    //faz o fetch dos nomes e numeros de animais do arquivo json
    async fetchAnimais(url){
        try{
            const animaisResponse = await fetch(url);
            const animaisJSON = await animaisResponse.json();
        
            const numerosGrid = document.querySelector(this.numerosGrid);
            animaisJSON.forEach((item)=>{
                const div = this.createAnimal(item);
                numerosGrid.appendChild(div);
            });
            
            /* argumentos: atributo do objeto do numero a ser incrementado; 
                           classe da sessao onde as divs foram inseridas,
                           nome da classe que informa se a secao esta visivel
            */
            const animaNumeros = new AnimaNumeros('[data-numero]',this.sectionClass, this.activeClass);
            animaNumeros.init();
        }catch(error){
            console.log(error);
        }
    }
   
    //cria a div com o nome e o numero de animais
    createAnimal(animal){
        const div = document.createElement('div');
        div.classList.add('numero-animal');
    
        div.innerHTML = `<h3>${animal.specie}</h3>\n<span data-numero>${animal.total}</span>`;
        return div;
    }
    
    
}
