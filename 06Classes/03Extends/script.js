
/* SUBCLASSES
É possível criarmos uma subclasse, esta irá ter acesso aos métodos da classe à qual ela estendeu através do seu protótipo. */

class Veiculo {
    constructor(rodas) {
      this.rodas = rodas;
    }
    acelerar() {
      console.log('Acelerou');
    }
  }
  
  class Moto extends Veiculo {
    empinar() {
      console.log('Empinou com ' + this.rodas + ' rodas');
    }
    acelerar(){
        console.log('Acelerou a moto');
    }
  }
  
  const honda = new Moto(2);
  honda.empinar();
  