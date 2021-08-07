/* Em outro arquivo crie a classe Funcionário que herda os atributos de pessoa. */
let {Pessoa} = require("./ex10");

 class Funcionario extends Pessoa{
   constructor(nome,cpf,cargo,salario,tempoEmpresa){
     super(nome,cpf);
     this.cargo = cargo,
     this.salario = salario,
     this.tempoEmpresa = tempoEmpresa;
   }
 }
 module.exports ={
  Funcionario
}