function q5f(){
  const a = new Date();
  let c = a.getMinutes();
  c = check(c);
  let d =a.getHours();
  d = check(d);
  let b = a.getSeconds();
  b = check(b);
  clock = document.querySelector("#q5f").innerHTML = ` ${d}:${c}:${b} é o horário de acesso`
 
  };

  function check(i) {
    if (i < 10) 
    {
      i = "0" + i
    }; 
    return i;
  }