var inputValue = document.querySelector('#inputValue');
var inputBtn = document.querySelector('#inputBtn');
inputBtn.addEventListener('click', addToList);
var list = document.querySelector('#toDoList');
let selectList = document.querySelector('#selectList');
let saveBtn = document.querySelector('#saveBtn');
saveBtn.addEventListener('click', addToStorage);
let loadBtn = document.querySelector('#loadBtn');
loadBtn.addEventListener('click', loadStorage);
let listArray = [];

function createItem(text) {
  let itemDiv = document.createElement('div');
  itemDiv.className = ' text-break border';
  itemDiv.innerText = text;
  if (inputValue.value === '') {
    window.alert('Insira algo escrito, rapazinho');
  } else {
    list.appendChild(itemDiv);
    addToSelect(itemDiv);
    listArray.push(itemDiv.innerText);

    return itemDiv;
  }
}

function addToList() {
  let item = createItem(inputValue.value);
  list.appendChild(item);
  inputValue.value = '';
}

function addToSelect(selectOption) {
  let option = document.createElement('option');
  option.innerText = selectOption.innerText;

  selectList.appendChild(option);
}

function addToStorage() {
  let todos = listArray;
  localStorage.removeItem('marketList');
  localStorage.setItem('marketList', JSON.stringify(todos));
}

function loadStorage() {
  var loadList = localStorage.getItem('marketList');
  
  if (loadList !== null) {
   var loadTodos = JSON.parse(loadList);
    listArray = loadTodos;
    for (let i = 0; i < listArray.length; i++) {
      let itemLoad = document.createElement('div');
      itemLoad.className = ' text-break border';
      itemLoad.innerText = listArray[i];
      list.appendChild(itemLoad);
    }
    }else{
      window.alert("Não há itens salvos");
    }
  
  
}
