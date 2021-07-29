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
console.log(endereco1.stateValidation());
class cliente {
  constructor(nome, cpf, endereco, numCelular) {
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.numCelular = numCelular;
  }
}
const cliente1 = new cliente('Bione', 15816746782, endereco1, 995177140);
cliente1.endereco.cep = 220;

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
