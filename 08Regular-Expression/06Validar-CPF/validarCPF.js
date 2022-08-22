export default class ValidarCPF{
    constructor(element, elementError){
        this.element = element;
        this.elementError = elementError;
    }
    validar(cpf){
        const cpfLimpo = cpf.replace(/\D/g, '');
        const matchCPF = cpfLimpo.match(/\d{11}/g);
        if(matchCPF && matchCPF[0]===cpfLimpo){
            return cpfLimpo.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
        }else{
            
            return null;
        }

    }

    iniciar(){
        this.element.addEventListener('change', ()=>{
            
            const valor = this.validar(this.element.value);
            if(valor){
                this.element.value = valor;
                this.element.style.border = '2px solid black';
                this.elementError.style.display = 'none';
            }else{
                this.element.style.border = '2px solid red';
                this.elementError.style.display = 'block';
                return -1;
            }
            return this;
        })
    }
}