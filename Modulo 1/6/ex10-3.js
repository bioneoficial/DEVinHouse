let { Pessoa } = require('./ex10');
let { Funcionario } = require('./ex10-2');

f1 = new Funcionario('Bione', 158, 'dev', 100, 10);
f2 = new Funcionario('Bione', 158, 'dev', 100, 10);
f3 = new Funcionario('Bione', 158, 'dev', 100, 10);
f4 = new Funcionario('Bione', 158, 'dev', 100, 10);

const arrayF = [f1, f2, f3, f4];
//console.log(arrayF);

function calcSalario(...funcionarios) {
  let total = 0;
  funcionarios.forEach(elem => {
    total += elem.salario;
  });
  return total;
}
console.log(calcSalario(...arrayF));

