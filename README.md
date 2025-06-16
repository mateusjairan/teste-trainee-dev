# Relatório Técnico - Mateus Jairan

## 1. Visão Geral da Solução

Este relatório documenta as correções realizadas no projeto de Gerenciador de Tarefas desenvolvido em Angular. O objetivo foi transformar uma aplicação incompleta e instável em uma solução funcional, atendendo aos requisitos técnicos fornecidos.

## 2. Como Executar a Aplicação

Para executar a aplicação, siga os passos abaixo:

1. Clone o repositório para sua máquina local:
    ```bash
    git clone <https://github.com/mateusjairan/teste-trainee-dev>
    ```
2. Instale as dependências do projeto:
    ```bash
    npm install
    ```
3. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```

## 3. Correção dos Erros Iniciais (`npm start`)

### Erros Identificados:
1. Dependências desatualizadas ou incompatíveis.
2. Configuração incorreta no arquivo `angular.json`.
3. Falhas em módulos ou componentes que impediam a inicialização.

### Soluções Implementadas:
- Atualizei as dependências do projeto para versões compatíveis utilizando `npm audit fix` e ajustes manuais.
- Corrigi configurações no arquivo `angular.json` para garantir que os caminhos e scripts necessários fossem carregados corretamente.
- Revisei os módulos e componentes para corrigir importações e declarações incorretas.

Após essas correções, a aplicação passou a iniciar corretamente com o comando `npm start`.

## 4. Relatório de Correção de Bugs

### 5.1. Bugs Corrigidos

1. **Duplicação de tarefas ao salvar:**
   - **Razão:** O método de salvamento estava sendo chamado múltiplas vezes devido a eventos duplicados.
   - **Solução Técnica:** Adicionei uma verificação para garantir que o método de salvamento seja executado apenas uma vez por evento.

2. **Salvar apenas após atualizar a página:**
   - **Razão:** O estado do formulário não estava sendo atualizado corretamente após o salvamento.
   - **Solução Técnica:** Ajustei o ciclo de vida do componente para atualizar o estado do formulário após cada operação de salvamento.

3. **Texto do botão de limpar tarefas:**
   - **Razão:** O texto estava em inglês, dificultando a compreensão para usuários brasileiros.
   - **Solução Técnica:** Alterei o texto diretamente no arquivo de template HTML para "Limpar Tarefas".

4. **Botões de exibir/ocultar tarefas concluídas:**
   - **Razão:** A lógica dos botões estava invertida, exibindo tarefas quando deveria ocultá-las e vice-versa.
   - **Solução Técnica:** Corrigi a lógica condicional no arquivo TypeScript para garantir o comportamento correto.

5. **Confirmação ao limpar tarefas concluídas:**
   - **Razão:** Não havia uma confirmação antes de limpar as tarefas concluídas, o que poderia causar exclusões acidentais.
   - **Solução Técnica:** Implementei uma confirmação utilizando a biblioteca SweetAlert para exibir um diálogo antes de executar a ação.

6. **Remoção de tarefas não concluídas:**
   - **Razão:** O método de remoção estava excluindo todas as tarefas, independentemente do estado de conclusão.
   - **Solução Técnica:** Ajustei o método para filtrar e remover apenas as tarefas marcadas como concluídas.

7. **Funcionalidade do botão "Editar":**
   - **Razão:** O botão "Editar" não estava preenchendo o campo de texto com os dados da tarefa selecionada.
   - **Solução Técnica:** Adicionei lógica para carregar os dados da tarefa no campo de texto ao clicar no botão "Editar".

8. **Desalinhamento do botão "Editar":**
   - **Razão:** O botão "Editar" estava desalinhado em relação ao botão "Remover".
   - **Solução Técnica:** Ajustei o CSS para posicionar o botão "Editar" ao lado do botão "Remover".

9. **Cor do botão "Remover":**
   - **Razão:** A cor do botão "Remover" não estava destacando sua função de exclusão.
   - **Solução Técnica:** Alterei a cor do botão para vermelho no arquivo CSS.

10. **Itens em branco na lista:**
    - **Razão:** Não havia validações para impedir o salvamento de itens vazios ou contendo apenas espaços.
    - **Solução Técnica:** Adicionei validações no método de salvamento para verificar se o campo de texto contém conteúdo válido antes de salvar.

### Bug Não Corrigido:
11. **Barra de rolagem na lista de tarefas:** Não foi possível implementar devido ao tempo limitado.

## 5. Relatório de Implementação de Melhorias

Nenhuma melhoria foi implementada devido ao tempo limitado.

## 6. Relatório de Débito Técnico

### Itens Não Implementados:
- **Barra de rolagem na lista de tarefas:** A implementação foi inviável devido ao tempo limitado de dois dias.

### Dificuldades:
- Tempo insuficiente para corrigir todos os bugs e implementar melhorias.
- Conhecimento limitado em Angular, o que exigiu auxílio do GitHub Copilot para algumas soluções.

## 7. Relatório de Melhorias

### Sugestões para Evolução:
1. Implementar autenticação de usuários para personalização de tarefas.
2. Adicionar suporte para categorias de tarefas.
3. Melhorar a responsividade da aplicação para dispositivos móveis.
4. Implementar testes automatizados para garantir maior estabilidade.

## 8. Decisões e Considerações

Apesar do curto prazo de dois dias, consegui corrigir quase todos os bugs solicitados. Utilizei o GitHub Copilot como apoio devido ao meu conhecimento limitado em Angular, mas revisei e entendi cada solução implementada. A barra de rolagem na lista de tarefas foi o único item que não consegui corrigir.

Além disso, utilizei uma branch separada para realizar testes e validar as correções antes de integrá-las ao projeto principal.

## 9. Deploy da Aplicação

A aplicação foi implantada na plataforma Vercel e pode ser acessada através do seguinte link:

[Gerenciador de Tarefas - Deploy Vercel](https://teste-trainee-debdxs7d7-mateusjairans-projects.vercel.app/#/todo)

---

**Contato:** mateusjairan@gmail.com
