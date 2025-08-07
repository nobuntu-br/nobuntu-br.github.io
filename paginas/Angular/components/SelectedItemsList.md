---
layout: default
title: SelectedItemsList
permalink: /angular/SelectedItemsList
css:
  - material-style.css
---
## `SelectedItemsListComponent`

### Descrição

Componente utilizado para exibir uma lista de cartões com itens selecionáveis. Permite criar, editar, excluir e selecionar itens com limite configurável. Pode ser utilizado tanto diretamente em páginas quanto em diálogos (`MatDialog`).

---

### Propriedades

| Propriedade           | Tipo                 | Obrigatório | Descrição                                                                        | Exemplo                                      |
| --------------------- | -------------------- | ----------- | -------------------------------------------------------------------------------- | -------------------------------------------- |
| `itemsDisplayed`      | `any[]`              | Sim         | Lista de objetos a serem exibidos na lista.                                      | `[{'nome': 'Maria', 'idade': 44}]`           |
| `columnsQuantity`     | `number`             | Sim         | Número de colunas que os cartões ocuparão (1 em mobile).                         | `3`                                          |
| `displayedfieldsName` | `string[]` \| `null` | Sim         | Campos a serem exibidos de cada item.                                            | `['nome', 'idade']`                          |
| `fieldsType`          | `string[]`           | Sim         | Tipos de dados dos campos, na mesma ordem de `displayedfieldsName`.              | `['string', 'number']`                       |
| `userConfig`          | `any`                | Não         | Configurações do usuário (ex: formato de data).                                  | `{ dateFormat: 'dd/MM/yyyy' }`               |
| `isSelectable`        | `boolean`            | Não         | Define se os cartões são selecionáveis.                                          | `true`                                       |
| `selectedItemsLimit`  | `number` \| `null`   | Não         | Número máximo de itens que podem ser selecionados. `null` permite seleção total. | `2`                                          |
| `apiUrl`              | `string`             | Sim         | URL da API usada para editar os itens.                                           | `https://api.site.com/clientes`              |
| `searchableFields`    | `ISearchableField[]` | Não         | Campos nos quais a busca será realizada.                                         | `[{ field: 'nome' }, { field: 'telefone' }]` |
| `maxDisplayedItems`   | `number`             | Não         | Quantidade máxima de itens a serem renderizados.                                 | `25`                                         |
| `className`           | `string`             | Sim         | Nome da classe/entidade usada para construção dinâmica de componentes.           | `'Cliente'`                                  |
| `isAbleToCreate`      | `boolean`            | Não         | Exibe botão de criação de novos itens.                                           | `true`                                       |
| `isAbleToEdit`        | `boolean`            | Não         | Permite editar itens da lista.                                                   | `true`                                       |
| `isAbleToDelete`      | `boolean`            | Não         | Permite remover itens da lista.                                                  | `true`                                       |
| `dataToCreatePage`    | `IPageStructure`     | Sim         | Estrutura usada para criar dinamicamente a página de edição/criação.             | `IPageStructure`                             |

---

### Eventos

| Evento                | Tipo                  | Descrição                                      |
| --------------------- | --------------------- | ---------------------------------------------- |
| `eventSelectedValues` | `EventEmitter<any[]>` | Emitido ao confirmar a seleção ou ao cancelar. |

---

### Exemplo básico

```html
<app-selected-items-list
  [itemsDisplayed]="clientes"
  [columnsQuantity]="3"
  [displayedfieldsName]="['nome', 'idade']"
  [fieldsType]="['string', 'number']"
  [isSelectable]="true"
  [selectedItemsLimit]="2"
  [className]="'Cliente'"
  [apiUrl]="'https://api.site.com/clientes'"
  [dataToCreatePage]="estruturaPagina"
  (eventSelectedValues)="receberSelecionados($event)"
>
</app-selected-items-list>
```

### Observações

> - Permite paginação, seleção individual ou múltipla de itens, e interação com formulários dinâmicos para edição.
> - Utiliza dinamicamente os componentes SelectableCardComponent e DefaultCardComponent.
> - Suporte total a MatDialog, sendo capaz de operar dentro de diálogos com retorno via .close().
> - A lista é paginada manualmente com controle total sobre quais itens são exibidos.
> - O método deselectItens() remove os selecionados da lista e retorna os restantes.
