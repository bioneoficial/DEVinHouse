function q3Function(){
 let a = document.querySelector("#q3").value;
 if(a % 2 === 0){
  document.querySelector("#result").value = "O número inserido é par"
 }else{
  document.querySelector("#result").value = "O número inserido é impar"
 }
}