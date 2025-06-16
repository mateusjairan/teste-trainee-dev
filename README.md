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

### 5.1. Bugs Corrigidos:
1. **Duplicação de tarefas ao salvar:** Ajustei o método de salvamento para evitar múltiplas inserções.
2. **Salvar apenas após atualizar a página:** Corrigi o estado do formulário para permitir múltiplos salvamentos sem necessidade de recarregar.
3. **Texto do botão de limpar tarefas:** Alterei o texto para português.
4. **Botões de exibir/ocultar tarefas concluídas:** Corrigi a lógica invertida dos botões.
5. **Confirmação ao limpar tarefas concluídas:** Adicionei uma confirmação utilizando a biblioteca SweetAlert.
6. **Remoção de tarefas não concluídas:** Ajustei o método para remover apenas tarefas concluídas.
7. **Funcionalidade do botão "Editar":** Implementado preenchimento do campo de texto e atualização da tarefa selecionada.
8. **Desalinhamento do botão "Editar":** Posicionei o botão ao lado do botão "Remover".
9. **Cor do botão "Remover":** Alterei a cor para vermelho.
10. **Itens em branco na lista:** Adicionei validações para impedir salvamento de itens vazios ou contendo apenas espaços.

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

---

**Contato:** mateusjairan@gmail.com
