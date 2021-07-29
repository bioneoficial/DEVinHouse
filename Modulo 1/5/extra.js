// ignorar, quero testar umas coisas depois.


class veiculo{
  constructor(tipoVeiculo, marca, modelo, ano, placa, numMultas, velocidadeMaxima){
    this.tipoVeiculo = tipoVeiculo;
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.placa = placa;
    this.numMultas = numMultas;
    this.velocidadeMaxima = velocidadeMaxima;
  }
  get tipoModelo(){
    return  (this.tipoVeiculo + " " + this.modelo);
  }
  adicionaMulta(codigoDaPlaca){
    if(codigoDaPlaca == this.placa){
      this.numMultas++;
     return  (this.numMultas);
    }
  }
}


veiculo1 = new veiculo('carro', 'Fiat', 'Uno', 1994, 'kxm-3388', 1, 200);
veiculo1.adicionaMulta('kxm-3388');
console.log(veiculo1);


