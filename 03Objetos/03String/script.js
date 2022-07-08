
const comida = 'Pizza'; //retorna uma String
const bebida = String('Agua'); //retorna um objeto
//Ambos acima possuem os mesmos metodos e atributos.

console.log(comida.length); //5
console.log(comida[0]); //P
console.log(comida.charAt(2)); //z

const concatenado = comida +' com ' + bebida;
const concatenado2 = comida.concat(' com ', bebida);
//os dois fazem a mesma coisa

const fruta = 'banana';
const saladaDeFrutas = 'pega na minha banana';

saladaDeFrutas.includes(fruta); //true
fruta.includes(saladaDeFrutas); //false
saladaDeFrutas.includes(fruta, 16); //false: o numero eh o indice de inicio de busca

saladaDeFrutas.endsWith(fruta); //true. Case sensitive
saladaDeFrutas.startsWith('peg'); //true

fruta.slice(1, 3); //an. Ele inclui o primeiro, mas nao inclui o ultimo especificado.
fruta.slice(2); //nana
fruta.slice(-2); //na
fruta.slice(0 , -2); //bana

const instrumento = 'guitarra';
instrumento.indexOf('a'); //4
instrumento.lastIndexOf('a'); //7

fruta.padStart(9);//   banana. Aumenta o tamanho da String pro tamanho especificado, se der.
fruta.padStart(9, 'a'); //aaabanana
fruta.padEnd(9, 'of');//bananaofof

//aplicacao: alinhar precos ao final :)
const listaPrecos = ['R$99,00', 'R$199,00', 'R$12000,00' ];
listaPrecos.forEach((item)=>{
  console.log(item.padStart(10));
});

const palavra = 'ta';
palavra.repeat(3); //tatata

let listaItens = 'camisa boné saia calcinha luva';
listaItens = listaItens.replace(/[ ]+/g, ', '); //usou uma regular expression
console.log(listaItens);

let listaItens2 = 'placa memoria cooler processador';
listaItens2 = listaItens2.replaceAll(' ',', ');
console.log(listaItens2);

arrayLista = listaItens2.split(', ');
console.log(arrayLista);

const arrayJuntada = arrayLista.join(', ');
console.log(arrayJuntada);//ele usou isso para umdar a tag de <div> para <section>

fruta.toUpperCase(); //BANANA
comida.toLowerCase(); //pizza

//existe tbm o trim(), trimStart() e trimEnd(). Nao vou exemplificar, vc ja conhece

console.log('\n********Exercícios:********');
// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [ //isso eh uma array cujos valores sao objetos
{
descricao: 'Taxa do Pão',
valor: 'R$ 39',
},
{
descricao: 'Taxa do Mercado',
valor: 'R$ 129',
},
{
descricao: 'Recebimento de Cliente',
valor: 'R$ 99',
},
{
descricao: 'Taxa do Banco',
valor: 'R$ 129',
},
{
  descricao: 'Recebimento de Cliente',
  valor: 'R$ 49',
},
];

let total = 0;
transacoes.forEach((item)=>{
  let aux = +item.valor.slice(3);
  if(item.descricao === 'Recebimento de Cliente'){
    total += aux;
  }else{
    total -= aux;
  }
})

console.log('Saldo do cliente: '+total);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

console.log('\n');
console.log(transportes.split(';'));

// Substitua todos os span's por a's
const html = `<ul>
<li><span>Sobre</span></li>
<li><span>Produtos</span></li>
<li><span>Contato</span></li>
</ul>`;

let html2 = html.split('span');
html2 = html2.join('a');
console.log(html2);

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase[frase.length-1]);

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', ' TAXA DO PÃO', ' taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

console.log(transacoes2.length);