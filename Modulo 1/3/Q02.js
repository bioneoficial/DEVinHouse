

function som(){
  let a = Number(document.getElementById("valorA").value);
  let b = Number(document.getElementById("valorB").value);
  let somAB = a + b;
  document.getElementById("valorR").value = somAB;
  
};

function sub(){
  let a = Number(document.getElementById("valorA").value);
let b = Number(document.getElementById("valorB").value);
let subAB = a - b;
document.getElementById("valorR").value = subAB;
};

function mult(){
  let a = Number(document.getElementById("valorA").value);
let b = Number(document.getElementById("valorB").value);
let multAB = a * b;
document.getElementById("valorR").value = multAB;
};

function divi(){
  let a = Number(document.getElementById("valorA").value);
let b = Number(document.getElementById("valorB").value);
let diviAB = a / b;
document.getElementById("valorR").value = diviAB;
 
};
