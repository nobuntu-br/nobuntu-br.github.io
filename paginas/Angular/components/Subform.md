---
layout: default
title: Subform
permalink: /angular/Subform
css:
  - material-style.css
---
## `SubformComponent`

### Descrição

Componente responsável por renderizar e gerenciar subformulários dinâmicos. Permite visualização, criação, edição e exclusão de itens vinculados a um formulário principal. Pode funcionar tanto em tela quanto via `Dialog`, com integração à API ou operação local (offline).

### Propriedades

| Propriedade                 | Tipo                         | Obrigatório | Descrição                                                                        | Exemplo                       |
| --------------------------- | ---------------------------- | ----------- | -------------------------------------------------------------------------------- | ----------------------------- |
| `itemsDisplayed`            | `any[]`                      | Não         | Lista de itens atualmente exibidos no subform.                                   | `[{"id":1,"nome":"Item A"}]`  |
| `columnsQuantity`           | `number`                     | Não         | Quantidade de colunas para exibir os campos.                                     | `2`                           |
| `displayedfieldsName`       | `string[] \| null`           | Não         | Nomes dos campos que devem ser exibidos.                                         | `["nome", "idade"]`           |
| `fieldsType`                | `string[]`                   | Sim         | Tipos de campos de cada atributo do item (ex: `"string"`, `"number"`).           | `["string", "number"]`        |
| `objectDisplayedValue`      | `string[]`                   | Sim         | Lista de atributos utilizados como valor principal para exibição de cada item.   | `["nome"]`                    |
| `userConfig`                | `any`                        | Não         | Objeto com configurações definidas pelo usuário.                                 | `{"theme": "dark"}`           |
| `isSelectable`              | `boolean`                    | Não         | Define se os itens podem ser selecionados (checkbox).                            | `true`                        |
| `selectedItemsLimit`        | `number \| null`             | Não         | Limite máximo de itens que podem ser selecionados.                               | `3`                           |
| `index`                     | `number`                     | Sim         | Índice atual do subform na estrutura geral do formulário.                        | `0`                           |
| `apiUrl`                    | `string`                     | Sim         | Endpoint base da API usada para buscar/editar/deletar os dados.                  | `"pessoas"`                   |
| `searchableFields`          | `ISearchableField[] \| null` | Não         | Campos que podem ser pesquisados no subform.                                     | `[{"name": "nome"}]`          |
| `maxDisplayedItems`         | `number`                     | Não         | Número máximo de itens exibidos na lista.                                        | `25`                          |
| `className`                 | `string`                     | Sim         | Nome da classe associada à estrutura do subform.                                 | `"Pessoa"`                    |
| `isAbleToCreate`            | `boolean`                    | Não         | Define se é permitido criar novos itens.                                         | `true`                        |
| `isAbleToEdit`              | `boolean`                    | Não         | Define se é permitido editar itens.                                              | `true`                        |
| `isAbleToDelete`            | `boolean`                    | Não         | Define se é permitido deletar itens.                                             | `true`                        |
| `dataToCreatePage`          | `IPageStructure`             | Sim         | Objeto de estrutura que define o comportamento e aparência da página do subform. | —                             |
| `route`                     | `string`                     | Sim         | Rota de navegação para edição/criação de itens.                                  | `"/usuarios"`                 |
| `isEnabledToGetDataFromAPI` | `boolean`                    | Não         | Define se o componente irá buscar os dados da API ou operar localmente.          | `true`                        |
| `menuIsFixedOnScreen`       | `boolean`                    | Não         | Define se o menu permanece fixo na tela.                                         | `true`                        |
| `useFormOnDialog`           | `boolean`                    | Não         | Define se o formulário será aberto dentro de um `Dialog`.                        | `true`                        |
| `eventSelectedValues`       | `EventEmitter<any[]>`        | Não         | Emissor de evento com os itens selecionados.                                     | `[(1, "João"), (2, "Maria")]` |

### Exemplo básico

````html
<app-subform
  [itemsDisplayed]="listaDeItens"
  [fieldsType]="['string', 'number']"
  [objectDisplayedValue]="['nome']"
  [columnsQuantity]="2"
  [className]="'Pessoa'"
  [index]="0"
  [dataToCreatePage]="estruturaDaPagina"
  [apiUrl]="'pessoas'"
>
</app-subform>
Observações Os sub-itens são renderizados como SelectableCardComponent, com base
nas configurações do JSON da classe. O componente pode operar totalmente offline
(sem API) ou com comunicação via HTTP. É possível criar, editar e deletar itens
em Dialog. A propriedade inputValue é do tipo FormControl<object[]>
  e armazena os valores selecionados. Ideal para casos onde o formulário
  principal depende de múltiplas entradas relacionadas de outra entidade. Deseja
  que eu gere a documentação .md consolidada para todos os componentes que já
  fizemos até agora? Você disse: tenant-menu.component.ts TypeScript O ChatGPT
  disse: Aqui está a documentação em Markdown para o componente
  TenantMenuComponent: markdown Copiar código ## `TenantMenuComponent` ###
  Descrição Componente responsável por exibir e gerenciar a troca de **Tenant
  (ambiente)** na aplicação. Permite ao usuário visualizar os ambientes
  disponíveis, alternar entre eles e navegar para páginas de gerenciamento de
  Tenant, como adicionar ou editar. --- ### Propriedades | Propriedade | Tipo |
  Obrigatório | Descrição | Exemplo |
  |------------------|------------------------|-------------|----------------------------------------------------------------------------------------|-----------------------------|
  | `tenants` | `ITenant[]` | Sim | Lista de tenants disponíveis para o usuário,
  obtida do localStorage. | `[ { id: '1', name: 'XPTO' } ]` | | `currentTenant`
  | `DatabasePermission` | Sim | Tenant atualmente ativo, usado para indicar
  qual ambiente está em uso. | `{ id: '1', name: 'XPTO' }` | --- ### Exemplo
  básico ```html <tenant-menu></tenant-menu
></object[]>
````

### Funcionalidades

- Lista os tenants disponíveis para o usuário.
- Permite trocar de tenant (com reload automático).
- Acessa a página de criação de novo tenant.
- Acessa a página de gerenciamento de tenants existentes.

### Métodos principais

| Método                | Descrição                                                                  |
| --------------------- | -------------------------------------------------------------------------- |
| `ngOnInit()`          | Inicializa o componente e carrega o tenant atual e a lista de tenants.     |
| `getTenants()`        | Recupera os tenants disponíveis do `localStorage`.                         |
| `goToAddTenantPage()` | Redireciona para a rota de criação de novo tenant (`/tenant/add`).         |
| `goToTenantPage()`    | Redireciona para a listagem/gerenciamento de tenants (`/tenant`).          |
| `changeTenant(id)`    | Troca o tenant ativo e recarrega a aplicação (`window.location.reload()`). |

### Observações

> - O componente utiliza TenantService para acessar e trocar o tenant ativo.
> - A lista de tenants vem do localStorage, portanto precisa estar previamente armazenada.
> - Após a troca de tenant, a página é recarregada para aplicar o novo contexto.
