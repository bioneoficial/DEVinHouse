function createItem(text, status) {
  let itemList = document.createElement('li');

  itemList.className = status == 'complete' ? 'completed' : 'uncompleted';

  let itemDiv = document.createElement('div');
  itemDiv.className = ' text-break';
  itemDiv.innerText = text;



  itemList.appendChild(itemDiv);
 

  return itemList;
}

function addToList() {
  let newItem = new itemListStorage();
  newItem.data = addInput.value;
  listArray.push(newItem);
  checkLocal();
  let item = createItem(addInput.value, 'incomplete');
  toDoList.appendChild(item);
  addInput.value = '';
}
addBtn.addEventListener('click', addToList);

// funcao para carregar o localstorage e seus itens sempre que entrar/att na página
function myStorage() {
  let list = localStorage.getItem('toDoList');

  if (list !== null) {
    todos = JSON.parse(list);
    listArray = todos;

    for (let i = 0; i < listArray.length; i++) {
      let content = listArray[i].data;

      let item = createItem(content, listArray[i].status);
      toDoList.appendChild(item);
    }
  }
}
myStorage();