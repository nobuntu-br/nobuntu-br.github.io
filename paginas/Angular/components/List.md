---
layout: default
title: Avalicao
permalink: /angular/List
css:
  - material-style.css
---

# `DefaultListComponent`

### Descrição

Componente genérico que renderiza uma lista de itens em cards (editáveis ou selecionáveis), com suporte a busca, paginação, criação, edição e exclusão de registros. Pode operar tanto em modo standalone quanto em `MatDialog`, e consumir dados diretamente via API ou por injeção direta.

### Propriedades

| Propriedade              | Tipo                                  | Obrigatório | Descrição                                                                                     | Exemplo                                       |
|--------------------------|----------------------------------------|-------------|-----------------------------------------------------------------------------------------------|-----------------------------------------------|
| `itemsDisplayed`         | `any[]`                                | Não         | Lista de itens a ser exibida. Pode ser usada diretamente ou preenchida via API.              | `[{"nome":"Maria","idade":30}]`               |
| `columnsQuantity`        | `number`                               | Não         | Número de colunas na visualização em grid.                                                    | `3`                                           |
| `displayedfieldsName`    | `string[]`                             | Sim         | Nomes dos campos a serem exibidos nos cards.                                                  | `['nome', 'idade']`                           |
| `fieldsType`             | `string[]`                             | Sim         | Tipos dos campos correspondentes a `displayedfieldsName`.                                     | `['string', 'number']`                        |
| `objectDisplayedValue`   | `string[]`                             | Não         | Para campos do tipo objeto, indica qual atributo deve ser exibido.                            | `['', '', 'name']`                            |
| `userConfig`             | `any`                                  | Não         | Configuração extra para personalização dos cards.                                             | `{ cor: 'azul' }`                             |
| `selectedItemsLimit`     | `number`                               | Não         | Número máximo de itens que podem ser selecionados.                                            | `5`                                           |
| `searchableFields`       | `ISearchableField[]`                   | Não         | Campos utilizados para busca.                                                                 | `[ { name: 'nome', type: 'string' } ]`        |
| `isSelectable`           | `boolean`                              | Não         | Habilita a seleção de múltiplos cards.                                                        | `true`                                        |
| `className`              | `string`                               | Sim         | Nome da classe usada para gerar o formulário dinâmico.                                        | `'Cliente'`                                   |
| `isAbleToCreate`         | `boolean`                              | Não         | Permite criação de novos itens.                                                               | `true`                                        |
| `isAbleToEdit`           | `boolean`                              | Não         | Permite edição de itens.                                                                      | `true`                                        |
| `isAbleToDelete`         | `boolean`                              | Não         | Permite exclusão de itens selecionados.                                                       | `true`                                        |
| `dataToCreatePage`       | `IPageStructure`                       | Sim         | Estrutura usada para criar ou editar itens dinamicamente.                                     | `{ attributes: [...] }`                       |
| `useFormOnDialog`        | `boolean`                              | Não         | Define se os formulários serão abertos em `Dialog` ou nova rota.                             | `true`                                        |
| `apiUrl`                 | `string`                               | Sim         | Endpoint da API para buscar os dados.                                                         | `"api/cliente"`                               |
| `route`                  | `string`                               | Não         | Caminho para a navegação (edição/criação).                                                    | `'clientes'`                                  |
| `maxDisplayedItems`      | `number`                               | Não         | Número máximo de itens por página.                                                            | `25`                                          |
| `title`                  | `ITitle`                               | Não         | Título com suporte a múltiplos idiomas.                                                       | `{ 'pt': 'Clientes', 'en': 'Customers' }`     |
| `menuIsFixedOnScreen`    | `boolean`                              | Não         | Se o menu deve ser fixado na tela.                                                            | `true`                                        |
| `isEnabledToGetDataFromAPI` | `boolean`                           | Não         | Define se a lista irá buscar dados automaticamente pela API.                                 | `true`                                        |

### Eventos

| Evento                   | Tipo             | Descrição                                                             |
|--------------------------|------------------|----------------------------------------------------------------------|
| `eventSelectedValues`    | `EventEmitter<any[]>` | Emite os itens selecionados.                                   |

### Exemplo básico

```html
<default-list
  [apiUrl]="'api/clientes'"
  [displayedfieldsName]="['nome', 'idade']"
  [fieldsType]="['string', 'number']"
  [objectDisplayedValue]="['', '']"
  [className]="'Cliente'"
  [dataToCreatePage]="estruturaCliente"
  [isSelectable]="true"
  [isAbleToEdit]="true"
  [isAbleToDelete]="true"
  [route]="'clientes'"
  [useFormOnDialog]="true">
</default-list>
```
### Observações
> * utilizado como diálogo (`MatDialog`) com configuração via `MAT_DIALOG_DATA`.
> * da lista podem ser renderizados como `SelectableCardComponent` ou `DefaultCardComponent`, dependendo do valor de `isSelectable`.
> * últiplas ações como: seleção múltipla, edição inline, criação e deleção de registros.
> * A interface `IDefaultListComponentDialogConfig` define todas as configurações possíveis para instanciar o componente via `dialog`.