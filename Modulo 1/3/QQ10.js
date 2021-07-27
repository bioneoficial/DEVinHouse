var paBtn = document.querySelector('#paBtn');
paBtn.addEventListener('click', paCalc);
var pgBtn = document.querySelector('#pgBtn');
pgBtn.addEventListener('click', pgCalc);
var rootValue = document.querySelector('#rootValue');
var iValue = document.querySelector('#iValue');
var results = document.querySelector('#results');
var resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', reset);

function createItem(content) {
  let itemResult = document.createElement('div');
  itemResult.className = ' AQUI';
  itemResult.innerText = content;
  results.appendChild(itemResult);

  return itemResult;
}

function paCalc() {
  var paArray = [];
  var x = Number(iValue.value);
  var y = Number(rootValue.value);
  var paResult = x;
  let paDiv = document.createElement('div');
  paDiv.className = 'resshow';

  if (checkin(iValue.value.length, rootValue.value.length) == true) {
    for (let i = 0; i < 9; i++) {
      if (i == 0) {
        paArray.push(x);
        createItem(paArray[i]);
      }
      paResult = paResult + y;
      paArray.push(paResult);
      createItem(paArray[i + 1]);
    }
    console.log(paArray);
  } else {
    return false;
  }
}

function pgCalc() {
  var pgArray = [];
  var x = Number(iValue.value);
  var y = Number(rootValue.value);
  var pgResult = x;
  if (checkin(iValue.value.length, rootValue.value.length) == true) {
    for (let i = 0; i < 9; i++) {
      if (i == 0) {
        pgArray.push(x);
        createItem(pgArray[i]);
      }
      pgResult = pgResult * y;
      pgArray.push(pgResult);
      createItem(pgArray[i + 1]);
    }
    console.log(pgArray);
  } else {
    return false;
  }
}

function checkin(pa, pg) {
  if (pa == '' || pg == '') {
    window.alert('insira valores corretamente');
  } else {
    return true;
  }
}

function reset() {
  results.innerHTML = '';
}