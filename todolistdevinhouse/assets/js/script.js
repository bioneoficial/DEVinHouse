//Usar let e getelement em sua maioria.Evetlisteners tb.
let addInput = document.getElementById('itemInput');
let addBtn = document.getElementById('addButton');
let clearBtn = document.getElementById('clearButton');
let toDoList = document.getElementById('toDoList');
var UniqueIdArray = [];
let listArray = [];

// funcao para classe complete
function handleToComplete() {
  let parent = this.parentElement;
  parent.className = 'completed';
  this.innerText = 'Incomplete';
  this.removeEventListener('click', handleToComplete);
  this.addEventListener('click', handleToIncomplete);
  handleListArray(parent.firstChild.innerText, 'complete');
}
// funcao para classe completein
function handleToIncomplete() {
  let parent = this.parentElement;
  parent.className = 'uncompleted';
  this.innerText = 'Complete';
  this.removeEventListener('click', handleToIncomplete);
  this.addEventListener('click', handleToComplete);

  handleListArray(parent.firstChild.innerText, 'incomplete');
}
//funcao para criar os itens pelo input/addbutton
function createItem(text, status) {
  let itemList = document.createElement('li');
  itemList.id = Math.floor(Math.random() * 100);
  UniqueIdArray.push(itemList.id);
  itemList.className = status == 'complete' ? 'completed' : 'uncompleted';

  let itemDiv = document.createElement('div');
  itemDiv.className = ' text-break';
  itemDiv.innerText = text;
  //itemList.innerText = text;
  // itemList.className = ' text-break';

  let itemCompleteBtn = document.createElement('button');
  itemCompleteBtn.className = 'btn btn-success float-end rounded-pill';
  itemCompleteBtn.innerText = status == 'complete' ? 'Incomplete' : 'Complete';
  if (status == 'incomplete') {
    itemCompleteBtn.addEventListener('click', handleToComplete);
  } else {
    itemCompleteBtn.addEventListener('click', handleToIncomplete);
  }

  let itemDeleteBtn = document.createElement('button');
  itemDeleteBtn.addEventListener('click', removeItem);
  itemDeleteBtn.innerText = 'Delete';
  itemDeleteBtn.className = 'btn btn-danger float-end rounded-pill';

  let itemEditBtn = document.createElement('button');
  itemEditBtn.addEventListener('click', editItem);
  itemEditBtn.innerText = 'Edit';
  itemEditBtn.className = 'btn btn-warning float-end rounded-pill';

  itemList.appendChild(itemDiv);
  itemList.appendChild(itemDeleteBtn);
  itemList.appendChild(itemEditBtn);
  itemList.appendChild(itemCompleteBtn);

  return itemList;
}
//funcao para remover item pelo delete button
function removeItem() {
  let confirm = window.confirm("Click 'Ok' to delete item.");
  if (confirm === true) {
    let parent = this.parentElement.parentElement;
    let content = this.parentElement.firstChild.innerText;
    parent.removeChild(this.parentElement);
    for (let i = 0; i < listArray.length; i++) {
      if (listArray[i].data === content) {
        listArray.splice(i, 1);
        checkLocal();
        break;
      }
    }
  }
  if (confirm === false) {
    return false;
  }
  checkLocal();
}
// funcao para editar item pelo edit button e no localstorage tb
function editItem(elem) {
  //alert(elem.target.parentNode.id) // com isso eu pego o id da array do pai

  var editValue = prompt('Insira sua edição');
  if (editValue === null) {
    return false;
  } else {
    let oldContent = this.parentElement.firstChild.innerText;
    for (let i = 0; i < listArray.length; i++) {
      if (listArray[i].data === oldContent) {
        var newStatus = listArray[i].status;
        listArray.splice(i, 1);
        checkLocal();
        break;
      }
    }
    let parent = elem.target.parentNode;
    parent.firstChild.innerText = editValue;

    let newItem = new itemListStorage();
    newItem.data = editValue;
    newItem.status = newStatus;
    listArray.push(newItem);
    checkLocal();
  }
  //UniqueIdArray array com ids
  //melhorar essa funcionalidade com input pop pegando por id, provavelmente mudar minha lógica(?).
}
// funcao para alterar status dos itens no local storage
function handleListArray(content, status) {
  for (let i = 0; i < listArray.length; i++) {
    if (listArray[i].data == content) {
      listArray[i].status = status;
      checkLocal();
      break;
    }
  }
}

//atualizar sempre o locastorage \/
function checkLocal() {
  let todos = listArray;
  localStorage.removeItem('toDoList');
  localStorage.setItem('toDoList', JSON.stringify(todos));
}
// funcao para o botao de limpar toda a lista, inclusive o localstorage
function clearList() {
  listArray = [];
  localStorage.removeItem('toDoList');
  toDoList.innerHTML = '';
}
clearBtn.addEventListener('click', clearList);
//function para fazer meu localstorage
function itemListStorage(data, status) {
  this.data = '';
  this.status = 'incomplete';
}
// funcao para adicionar item a lista array
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
