import AnimaNumeros from "./anima-numeros.js";

    /* 
    Recupera os objetos de animaisApi.json, cria uma div com um h3 e um span para cada um desses objetos e a 
    insere dentro do bloco (no index.html) cuja classe eh 'numeros-grid'. Depois ele inicia a execucao do 
    metodo 'animaNumeros.init()'.
    */
export default function initFetchAnimais(){

    async function fetchAnimais(url){
        try{
            const animaisResponse = await fetch(url);
            const animaisJSON = await animaisResponse.json();
        
            const numerosGrid = document.querySelector('.numeros-grid');
            animaisJSON.forEach((item)=>{
                const div = createAnimal(item);
                numerosGrid.appendChild(div);
            });
            
            /* argumentos: atributo do objeto do numero a ser incrementado; 
                           classe da sessao onde as divs foram inseridas. 
            */
            const animaNumeros = new AnimaNumeros('[data-numero]','.numeros','ativo');
            animaNumeros.init();
        }catch(error){
            console.log(error);
        }
    }
   
    
    function createAnimal(animal){
        const div = document.createElement('div');
        div.classList.add('numero-animal');
    
        div.innerHTML = `<h3>${animal.specie}</h3>\n<span data-numero>${animal.total}</span>`;
        return div;
    }
    
    fetchAnimais('./animaisApi.json');
}
