// Exercício 1 - Para começarmos, vamos trabalhar com Arrow Functions. Faça uma arrow function que retorna uma mensagem de “Olá Mundo!

var ex1 = () => {
  console.log('Hello World');
};
//ex1();

//Exercício 2 - Quero ver se vocês realmente estão entendendo a base de Arrow Functions. Faça uma arrow function que recebe um nome (nome) e retorna uma mensagem de “Olá [nome]!”

let ex2 = nome => {
  return nome;
};
//console.log(ex2('Bione'));

// Exercício 3 - Ótimo agora crie uma variável chamada “ArrayNumeros” ela é uma array que possui valores de 1 a 10. Crie outra variável chamada “ArrayInvertida” ela é uma Array inicie ela vazia. Crie uma Arrow Function que inverta a ordem dos números ArrayNumeros e insira na ArrayInvertida.

let ArrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ArrayInvertida = [];

let ex3 = array => {
  for (array of array) {
    ArrayInvertida.unshift(array);
  }
  return ArrayInvertida;
};
//console.log(ex3(ArrayNumeros));

//Exercício 4 - Para terminar essa primeira parte dos exercícios, crie uma variável chamada “ArrayInvertidaImpar”, ela uma Array, inicie ela vazia. Crie uma Arrow Function que inverta a ordem dos numeros ArrayNumeros e insira apenas os números ímpares na “ArrayInvertidaImpar”.
let ArrayInvertidaImpar = [];
ArrayNumeros.forEach( (array) => {
  
  if(array % 2 !== 0){
  
    ArrayInvertidaImpar.unshift(array)
  }
  return ArrayInvertidaImpar
})

//console.log(ArrayInvertidaImpar)

//

