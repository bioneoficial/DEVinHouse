// Exercício 1 - Para começarmos, vamos trabalhar com Arrow Functions. Faça uma arrow function que retorna uma mensagem de “Olá Mundo!

const ex1 = () => {
  return 'Hello World';
};
//console.log(ex1())

//Exercício 2 - Quero ver se vocês realmente estão entendendo a base de Arrow Functions. Faça uma arrow function que recebe um nome (nome) e retorna uma mensagem de “Olá [nome]!”
 const ex2 = nome => {
  return 'Olá ' + nome;
};

//console.log(ex2('Bione'));
module.exports ={
  ex2
}

// Exercício 3 - Ótimo agora crie uma variável chamada “ArrayNumeros” ela é uma array que possui valores de 1 a 10. Crie outra variável chamada “ArrayInvertida” ela é uma Array inicie ela vazia. Crie uma Arrow Function que inverta a ordem dos números ArrayNumeros e insira na ArrayInvertida.

let ArrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ArrayInvertida = [];

const ex3 = array => {
 /* for (array of array) {
    ArrayInvertida.unshift(array);
  } */
  ArrayInvertida = array.reverse();
  return ArrayInvertida;
};
console.log(ex3(ArrayNumeros));

//Exercício 4 - Para terminar essa primeira parte dos exercícios, crie uma variável chamada “ArrayInvertidaImpar”, ela uma Array, inicie ela vazia. Crie uma Arrow Function que inverta a ordem dos numeros ArrayNumeros e insira apenas os números ímpares na “ArrayInvertidaImpar”.
let ArrayInvertidaImpar = [];
ArrayNumeros.forEach( (array) => {
  
  if(array % 2 !== 0){
  
    ArrayInvertidaImpar.unshift(array)
  };
  return ArrayInvertidaImpar;
});

//console.log(ArrayInvertidaImpar)

//ex8
async function euNaoEspero(){
   Aguarda5Segundos();
  console.log('Eu nao espero');
};

async function Aguarda5Segundos(){
  await new Promise(resolve => setTimeout(resolve, 5000)); // 5 sec
  console.log("Função diz: Terminei!")
};

async function euEspero(){
await Aguarda5Segundos();

  console.log('Eu espero');
};
//euEspero();
//euNaoEspero();

//ex9
function produto(...params){
  let res = 1;
  params.forEach(elem =>{
    res *= elem;
  })
  return res;
}
//console.log(produto(...arrayInteiros));



let arrayInteiros = [1, 2, 3, 4, 5, 6];
const reducer = (acumulador, valorAtual) => acumulador * valorAtual;

//console.log(arrayInteiros.reduce(reducer));



