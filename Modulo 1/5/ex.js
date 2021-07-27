class quadrado {
  constructor(lado) {
    this.lado = lado;
  }
}
quadrado.lado = 2;
//console.log(quadrado.lado);

class endereco {
  constructor(logradouro, numero, cidade, estado, pais, cep) {
    this.logradouro = logradouro;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;
    this.pais = pais;
    this.cep = cep;
  }
}
endereco.logradouro = 'Rua DEV';
endereco.numero = 200;
endereco.cidade = 'Cala Boca';
endereco.estado = 'RJ';
endereco.pais = 'BR';
endereco.cep = 24110001;

//console.log(endereco.logradouro);
//console.log(endereco.numero);
//console.log(endereco.cidade);
//console.log(endereco.estado);
//console.log(endereco.pais);
//console.log(endereco.cep);

class cliente {
  constructor(nome, cpf, endereco, numCelular) {
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.numCelular = numCelular;
  }
}
const cliente1 = new cliente('Bione', 15816746782, endereco, 995177140);
cliente1.endereco.cep = 220;
//console.log(cliente1.endereco.cep);
// aqui ele pega oatributo cep da class endereco e atribui valor dentro do cliente1;
class conta {
  constructor(numConta, saldo, cliente) {
    this.numConta = numConta;
    this.saldo = saldo;
    this.cliente = cliente;
  }
}
const conta1 = new conta(999, 666, cliente);
conta1.cliente.nome = 'José';
conta1.cliente.cep = 48167946782;
conta1.cliente.cpf = 197986;
// console.log(conta1.cliente.cep) provando que funciona
//conta1.cep = 921
//console.log(conta1.cep); outra prova
console.log(conta1);
// tomar cuidado com essa abertura do js em por var.algo e ele aceitar esse algo, mesmo não tendo ele no constructor, prova abaixo
//conta1.arroz = 'feijão';
//console.log(conta1.arroz); nunca fazer isto, sempre usar a versao como esta na linha 53, pelo - é no que eu acredito kkk class dentro de class dentro de classe? dificiu

