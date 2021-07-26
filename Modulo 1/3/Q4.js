function q4f(){
const a = new Date();
let c = a.getMinutes();
c = check(c);
let d =a.getHours();
d = check(d);
clock = document.querySelector("#q4F").innerHTML = `São ${d}:${c}`
setTimeout(q4f, 1000);
};
// o check adiciona um 0 na frente quando o numero for menor que da
// e o seTimeout é pra atualização do relogio.
function check(i) {
  if (i < 10) 
  {
    i = "0" + i
  }; 
  return i;
}