// treino de classes pelo trello.

class quadrado {
  constructor(lado) {
    this.lado = lado;
  }
}
quadrado.lado = 2;

const states = {
  AC: 'AC',
  AL: 'AL',
  AP: 'AP',
  AM: 'AM',
  BA: 'BA',
  CE: 'CE',
  DF: 'DF',
  ES: 'ES',
  GO: 'GO',
  MA: 'MA',
  MT: 'MT',
  MS: 'MS',
  MG: 'MG',
  PA: 'PA',
  PB: 'PB',
  PR: 'PR',
  PE: 'PE',
  PI: 'PI',
  RJ: 'RJ',
  RN: 'RN',
  RS: 'RS',
  RO: 'RO',
  RR: 'RR',
  SC: 'SC',
  SP: 'SP',
  SE: 'SE',
  TO: 'TO',
};

class endereco {
  constructor(logradouro, numero, cidade, estado, pais, cep) {
    this.logradouro = logradouro;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;
    this.pais = pais;
    this.cep = cep;
  }
  stateValidation() {
    let valid = false;
    let msgError = 'Estado invalido';
    const stateList = Object.values(states);
    stateList.forEach(element => {
      if (this.estado == element) {
        valid = true;
      }
    });
    if (valid == true) {
      return valid;
    } else {
      this.estado = '';
      return msgError;
    }
  }
}

const endereco1 = new endereco();
endereco1.logradouro = 'Rua DEV';
endereco1.numero = 200;
endereco1.cidade = 'Cala Boca';
endereco1.estado = 'RJ';
endereco1.pais = 'BR';
endereco1.cep = 24110001;

//console.log(endereco1.stateValidation());

class cliente {
  constructor(nome, cpf, endereco, numCelular) {
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.numCelular = numCelular;
  }
  validaCPF() {
    let trueCPF = 'CPF válido';
    let falseCPF = 'Digite um CPF válido';
    let  thisCPF = this.cpf;
   thisCPF = String(thisCPF);
    let Soma = 0,
      Resto,
      i;

    if (thisCPF == '00000000000') {
      return falseCPF;
    } else if (thisCPF.length != 11) {
      return falseCPF;
    }

    for (i = 1; i <= 9; i++) {
      Soma = Soma + parseInt(thisCPF.substring(i - 1, i)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) {
      Resto = 0;
    }

    if (Resto != parseInt(thisCPF.substring(9, 10))) {
      return falseCPF;
    }

    Soma = 0;
    for (i = 1; i <= 10; i++) {
      Soma = Soma + parseInt(thisCPF.substring(i - 1, i)) * (12 - i);
    }
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) {
      Resto = 0;
    }
    if (Resto != parseInt(thisCPF.substring(10, 11))) {
      return falseCPF;
    }
    return trueCPF;
  }
}
const cliente1 = new cliente('Bione', 15816746782, endereco1, 995177140);

//console.log(cliente1.validaCPF());


class conta {
  constructor(numConta, saldo, cliente) {
    this.numConta = numConta;
    this.saldo = saldo;
    this.cliente = cliente;
  }
}
const conta1 = new conta(
  999,
  666,
  new cliente(
    'Dione',
    '996',
    new endereco('ceu', '45', 'floripa', 'SC', 'BR', 265870),
    '987654'
  ),
  '6023'
);



class transacoes{
  constructor(conta, valorTransacao, idDeTransferencia, numDaConta, data){
    this.conta = conta;
    this.valorTransacao = valorTransacao;
    this.idDeTransferencia = idDeTransferencia;
    this.numDaConta = numDaConta;
    this.data = data;
  };
  transferencia(){
    //let idDeTransferencia = this.idDeTransferencia;
   // let numConta = this.numDaConta;
    // let transTime = this.timeTrue;
    let msgValorFalse = 'O valor desta transação é invalido, deve ser maior que R$0,00 até R$300,00.';
    let msgValorNegativo = 'Conta com saldo insuficiente para esta transação. Consulte a disponibilidade do crédito Pessoal ZAP?( n sei se existe kk)';
    let saldo = this.conta.saldo;
    let valorTransacao = this.valorTransacao;
    if(valorTransacao <= 0 || valorTransacao > 300){
      return msgValorFalse;
    }else if(saldo - valorTransacao < 0){
      return msgValorNegativo;
    }else{
      saldo = saldo - valorTransacao;
    }
    this.conta.saldo = saldo;
   return saldo;
  };

  deposito(){
    //let idDeTransferencia = this.idDeTransferencia;
    // let numConta = this.numDaConta;
    //let depTime = this.timeTrue;
    let msgValorFalse = 'O valor desta transação é invalido, deve ser maior que R$0,00 até R$300,00.';
    let valorTransacao = this.valorTransacao;
    if(valorTransacao <= 0 || valorTransacao > 300){
      return msgValorFalse;
    }
    let saldo = this.conta.saldo;
    saldo = saldo + valorTransacao;
    this.conta.saldo = saldo;
    return saldo;
  };
};

const data =new Date();
const year = data.getUTCFullYear();
const month = data.getUTCMonth();
const day =  data.getUTCDate();
const dataTrue = `${day}/${month}/${year}`;
const hora = data.getUTCHours();
const minutos =  data.getUTCMinutes();
const segundos = data.getUTCSeconds();
const milSec = data.getUTCMilliseconds();
const timeTrue = `${hora}:${minutos}:${segundos}:${milSec}`;

/*estou usando o Universal Time Zone ao inves de local. Se for necessário usar string,
 só fazer a conversão, botei tudo em number pra adiantar logo.
Vou usar o math.random pro id direto na const, mas poderia declarar id com string vazia e dentro do metodo fazer isto, se for uma melhor prática.. */

const transa1 = new transacoes(conta1, 300, Math.floor(Math.random() * 1000), conta1.numConta, (dataTrue + ' ' + timeTrue));
//console.log(transa1.conta.saldo);
//console.log(transa1.transferencia());
//console.log(transa1.deposito());
//console.log(transa1.idDeTransferencia);
//console.log(transa1.data);
//console.log(transa1.conta.saldo);
