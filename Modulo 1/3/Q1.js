// Q1
function calcularIdade(){
  var birth =  document.getElementById("dataNascimento").value;
  var birthYear = Number(birth.slice(0,4));
  var birthMonth = Number(birth.slice(5,7));
  var birthDay = Number(birth.slice(8,10));
  var dateGen = new Date(); 
  var yearToday = dateGen.getUTCFullYear();
  var monthToday =  dateGen.getUTCMonth() + 1;
  var dayToday = dateGen.getUTCDate();
  var yearDiff = yearToday - birthYear;
  var monthDiff =monthToday - birthMonth;
  var dayDiff = dayToday - birthDay;
  if(dayDiff < 0 && monthDiff === 0){
   monthDiff--;
  };
  if(monthDiff < 0){
    yearDiff--;
  }
     let age = document.querySelector(".idade").innerHTML = `Sua idade é ${yearDiff} ano(s)`;
 
 return age;
}