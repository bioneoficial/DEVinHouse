
  # Todo List in React
This is a project of todo list in react, using Material Ui to Styled, this app uses Local Storage to save the List items.

## Features 
ARRUMAR
 - [X] Um menu superior contendo o conteúdo centralizado.
 - [X] Um formulário de cadastro de nova tarefa contendo campo de descrição, cor de post-it e botão para adicionar a nova tarefa (use o localStorage).
 - [X] Uma listagem com duas divisões: a) Itens concluídos e b) Itens pendentes. Listando cada post-it com sua descrição e cor previamente cadastrada.
 - [X] Um botão para limpar as listas. Ao ser clicado, deverá apagar todas as tarefas armazenadas, e mostrar o novo estado (vazio) na página.
 - [X] Interação duplo-click nos post-its, para mudar o estado da tarefa, sendo itens concluídos (done = true) e itens pendentes (done = false).
 - [X] O usuário pode editar a task.
 - [X] O usuário pode clicar para ver titulo e descrição da task
 - [X] O usuário pode deletar task unitária.

 ## Known Bugs
 - [X] a interação duplo-click nos post-its pela tabela de somente 'itens concluidos' ou com a lixeira da mesma, faz os itens do array com
  check === false serem deletados, o item em questão passa pra false normalmente e os outros trues continuam a existir.
	Esse mesmo tipo de interação pela tabela de 'Itens pendentes' não tem este BUG, por causa disso deixei a tabela de pendentes aparecendo tanto done = false e done = true
	Mas se não fosse por este bug que  ainda não consegui corrigir, era só passar um ternário no listItems retornando filter só os check ===false, o oposto que faço na tabela dos true,
	que mostraria só os pendentes normalmente.
	Pensei em fazer 3 tabelas, 1 com todas tasks, 1 com false outra com true e deixar as interações possíveis somente na tabela com todas para mascarar o bug e ainda teria
	uma ''funcionalidade a mais'' mas decidi não fazer isso pois não acho ético.

## How run this Project
  
In the project directory, you can run:
### `npm install`
### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.


