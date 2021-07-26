// Q1 
window.alert("Estudar é viver!");

//Q2
window.confirm("Certeza que queres entrar nesta page?");

//Q3
var forename = prompt('Insira seu nome');
window.alert('Seu nome é ' + forename);

//Q4
var surname =prompt('Insira seu sobrenome'); 
var age = prompt(forename + ' qual é a sua idade?Responda numericamente');
while (!/^[0-9]+$/.test(age)) {
  window.alert("Numero = 1,2,3,4,...");
  age =  prompt(forename + ' qual é a sua idade?Responda numericamente');
}
/* aqui eu usei /^[0-9]+$/, o qual é conhecido como uma expressão regular(regular expression), ^é  o inicio de uma string 
e $ o final dela.O [0-9] são os digitos e o + é para ver se tem uma ou mais ocorrencias do que ele esta se referindo,
 neste caso em específico, os digitos. Usei para testar se estava digitando Number mesmo ou tava trollando a gente T.T */

var sport = prompt('Gosta de praticar esporte?');
var fullName = forename + ' ' + surname;
console.log(`O seu nome é ${fullName}, possui ${age} anos. Gosta de praticar esportes?Resposta: ${sport}`);
/* Pensei em transformar o valor  inserido na var sport para Boolean pra printar no console mas creio que sairia muito do que esta
sendo pedido no exercício, fazer a expressão regular ja fugiu ao que foi pedido. */


//Q5
let forename2 =prompt('Insira seu nome dinovu :c');
let surname2 =prompt('Insira seu sobrenome dinovu :c'); 
let fullName2 = forename2 + ' ' + surname2;
window.alert('Este nome é: ' +fullName2);

//Q6
let lastName = prompt('Qual é o seu último nome?');
window.alert(`Olá, ${lastName.toUpperCase()}. Seu
sobrenome contém ${lastName.length} letras`)

// aqui poderiamos fazer o debug igual fiz no números, para forçar o  usuario a nao trollar e digitar characteres

//Q7
let birthYear = prompt('Nasceste em que ano, padawan?');
let birthMonth = prompt('Ah esqueci, qual foi o mês do nascimento? 3? ou que nem eu no mes 2? 10,talvez?rsrs');
let todayYear = prompt('Em que ano estamos?');
let todayMonth = prompt('Caramba, como sou esquecido... em qual mes estamos? 4,5,6?rsrs')
if(birthMonth <= todayMonth){
  var age2 = todayYear - birthYear;
}else{
  var age2 = todayYear - birthYear - 1;
}

window.alert('Sua idade é ' + age2);
 
// no enunciado nao pedia pra ler o mes, mas depois pedia pra printar idade dependendo do mes de nascimento, então fiz a gambiarra.
// mas se pa era pra por tudo em um alert só sem fazer essa coisa aí que eu fiz X;

// Q8
var operator = prompt('Qual será a operação? soma(+) subtração(-) multiplicação(*) divisao(/). Por favor use um dos símbolos');
var firstValue = prompt('Qual o primeiro valor que deseja calcular?');
var firstValue = Number(firstValue);
var secondValue = prompt('Qual o segundo valor que deseja calcular?');
var secondValue = Number(secondValue);
//sinceramente não sou fã de usar switch em app grandes, mas como é uma simples++ calc, usarei ao inves de outras condicionais.
// não debuguei dnv, que nervoso não debugar kkkkk!!
switch (operator) {
  case '+':
    var result = firstValue + secondValue;
    window.alert(result);
    break;

    case '-':
      var result = firstValue - secondValue;
      window.alert(result);
    break;

    case '*':
      var result = firstValue * secondValue;
      window.alert(result);
    break;

    case '/':
      var result = firstValue / secondValue;
      window.alert(result);
    break;

  default:
    window.alert('ta trollando né T.T')
    break;
}

//Q9
const data = new Date();
window.alert(`${data.getHours()}:${data.getMinutes()} horas`);

//Q10


var iValue = Number(prompt('insira um valor númerico inicial'));
var raizValue = Number(prompt('insira um valor númerico para a raíz'));
var theEnd = [];
var paSum = iValue;
theEnd[0] = iValue;
for(var i=0;i<9;i++){
 paSum +=  raizValue;
 theEnd.push(paSum);
};
window.alert(theEnd);

