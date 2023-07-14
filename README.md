# AppTodo

Este é um projeto de lista de tarefas construído com Angular. Permite ao usuário adicionar, marcar como concluído e excluir itens da lista. Os itens marcados como concluídos são movidos para o final da lista, enquanto os outros permanecem na mesma posição. Além disso, o estado da lista é persistido no navegador usando o LocalStorage, o que permite que os itens sejam mantidos mesmo após recarregar a página.

## Recursos

- Adicionar novos itens à lista
- Marcar itens como concluídos
- Excluir itens individualmente
- Excluir todos os itens de uma vez
- Persistência dos itens usando o LocalStorage

## Instalação

Siga estas etapas para executar o projeto localmente:

1. Clone este repositório para o seu ambiente de desenvolvimento:
git clone <URL do repositório>

2. Navegue até o diretório do projeto:
cd nome-do-projeto


3. Instale as dependências do projeto usando o npm:
npm install


4. Inicie o servidor de desenvolvimento:
ng serve --open

5. Abra o navegador e acesse `http://localhost:4200` para ver o projeto em execução.

## Uso

1. Digite um novo item no campo de entrada e pressione "Enter" ou clique no botão "Adicionar" para adicioná-lo à lista.

2. Para marcar um item como concluído, clique na caixa de seleção ao lado do item.

3. Para excluir um item individualmente, clique no botão "Excluir" ao lado do item.

4. Para excluir todos os itens da lista, clique no botão "Excluir Todos".

5. Você pode recarregar a página e os itens da lista serão restaurados automaticamente a partir do LocalStorage.