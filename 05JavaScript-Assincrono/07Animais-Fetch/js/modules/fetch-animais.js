import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais(){
    try{
        async function fetchAnimais(url){
            const animaisResponse = await fetch(url);
            const animaisJSON = await animaisResponse.json();
        
            const numerosGrid = document.querySelector('.numeros-grid');
            animaisJSON.forEach((item)=>{
                const div = createAnimal(item);
                numerosGrid.appendChild(div);
            });
            initAnimaNumeros();
        }
    }catch(error){
        console.log(error);
    }
    
    function createAnimal(animal){
        const div = document.createElement('div');
        div.classList.add('numero-animal');
    
        div.innerHTML = `<h3>${animal.specie}</h3>\n<span data-numero>${animal.total}</span>`;
        return div;
    }
    
    fetchAnimais('./animaisApi.json');
}

