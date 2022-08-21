//CEP

const regexpCEP = /\d{5}[-\s]?\d{3}/g;

const ceps = [
  '00000-000',
  '00000 000',
  '00000000'
];

for(const cep of ceps) {
  console.log(cep, cep.match(regexpCEP));
}


//CPF
const regexpCPF = /(?:\d{3}[-.]?){3}\d{2}/g;

const cpfs = [
  '000.000.000-00',
  '000-000-000-00',
  '000.000.000.00',
  '000000000-00',
  '00000000000'
];

for(const cpf of cpfs) {
  console.log(cpf, cpf.match(regexpCPF));
}

//CNPJ
const regexpCNPJ = /\d{2}[-.]?(?:\d{3}[-.]?){2}[-\/]?\d{4}[-.]?\d{2}/g;

const cnpjs = [
  '00.000.000/0000-00',
  '00000000000000',
  '00-000-000-0000-00',
  '00.000.000/000000',
  '00.000.000.000000',
  '00.000.000.0000.00',
];

for(const cnpj of cnpjs) {
  console.log(cnpj, cnpj.match(regexpCNPJ));
}

//TELEFONE
const regexpTELEFONE = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;

const telefones = [
  '+55 11 98888-8888',
  '+55 11 98888 8888',
  '+55 11 988888888',
  '+55 11988888888',
  '+5511988888888',
  '5511988888888',
  '11 98888-8888',
  '11 98888 8888',
  '(11) 98888 8888',
  '(11) 98888-8888',
  '11-98888-8888',
  '11 98888 8888',
  '11988888888',
  '11988888888',
  '988888888',
  '(11)988888888',
  '98888 8888',
  '8888 8888'
];

for(const telefone of telefones) {
  console.log(telefone, telefone.match(regexpTELEFONE));
}

//EMAIL
const regexpEMAIL = /[\w.-]+@[\w-]+\.[\w-.]+/gi;

const emails = [
  'email@email.com',
  'email@email.com.org',
  'email-email@email.com',
  'email_email@email.com',
  'email.email23@email.com.br',
  'email.email23@empresa-sua.com.br',
  'c@contato.cc',
];

for(const email of emails) {
  console.log(email, email.match(regexpEMAIL));
}

//http://emailregex.com/


//TAG
const regexpTAG2 = /<\/?[\w\s="']+\/?>/gi;

const tags2 = [
  '<div>Isso é uma div</div>',
  '<div class="ativa">Essa está ativa</div>',
  '<img src="imagem" />',
  '<img src="imagem">',
  '<ul class="ativa">',
  '<li>Essa está ativa</li>',
  '</ul>'
];

for(const tag of tags2) {
  console.log(tag, tag.match(regexpTAG2));
}

//TAG APENAS O NOME
const regexpTAG = /(?<=<\/?)[\w]+/gi;

const tags = [
  '<div>Isso é uma div</div>',
  '<div class="ativa">Essa está ativa</div>',
  '<img src="imagem" />',
  '<img src="imagem">',
  '<ul class="ativa">',
  '<li>Essa está ativa</li>',
  '</ul>'
];

for(const tag of tags) {
  console.log(tag, tag.match(regexpTAG));
}

//Positive Lookbehind (?<=) não está disponível em todos os browsers.

