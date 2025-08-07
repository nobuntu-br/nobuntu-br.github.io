---
layout: default
title: SelectableCard
permalink: /angular/SelectableCard
css:
  - material-style.css
---
## `SelectableCardComponent`

### Descrição

Componente visual reutilizável que exibe um cartão (`card`) com campos renderizados dinamicamente, com suporte a seleção via checkbox ou clique. Usado para listar itens com múltiplos campos, renderizando componentes específicos como `DateFieldComponent`, `SelectorFieldComponent`, `FieldComponent`, entre outros.

---

### Propriedades

| Propriedade            | Tipo             | Obrigatório | Descrição                                                                                   | Exemplo                        |
| ---------------------- | ---------------- | ----------- | ------------------------------------------------------------------------------------------- | ------------------------------ |
| `itemDisplayed`        | `any`            | Sim         | Objeto com os dados a serem apresentados no card.                                           | `{ nome: 'Maria', idade: 44 }` |
| `className`            | `string`         | Sim         | Nome da classe da entidade a ser exibida.                                                   | `'Produto'`                    |
| `columnsQuantity`      | `number`         | Sim         | Quantidade de colunas do grid. Em mobile será 1.                                            | `3`                            |
| `displayedfieldsName`  | `string[]`       | Sim         | Lista com os nomes dos campos a serem exibidos.                                             | `['nome', 'idade']`            |
| `fieldsType`           | `string[]`       | Sim         | Tipos dos campos, na mesma ordem de `displayedfieldsName`.                                  | `['string', 'number']`         |
| `userConfig`           | `any`            | Não         | Objeto com configurações do usuário (ex: formato de data).                                  | `{ dateFormat: 'dd/MM/yyyy' }` |
| `isCheckBox`           | `boolean`        | Não         | Exibe checkbox de seleção no card.                                                          | `true`                         |
| `isSingleOption`       | `boolean`        | Não         | Define se o card será usado em seleção única.                                               | `false`                        |
| `attributes`           | `any`            | Não         | Lista de atributos (usado por `selector` para preencher opções).                            |                                |
| `isSelectable`         | `boolean`        | Não         | Define se o card é selecionável.                                                            | `true`                         |
| `isEditable`           | `boolean`        | Não         | Define se o card possui ação de edição (botão).                                             | `false`                        |
| `visibleList`          | `boolean[]`      | Não         | Define visibilidade de cada campo por índice.                                               | `[true, false, true]`          |
| `classFather`          | `string`         | Não         | Nome da classe "pai", usado em subformulários para evitar redundância.                      | `'Pessoa'`                     |
| `isSubForm`            | `boolean`        | Não         | Define se está dentro de um subformulário.                                                  | `false`                        |
| `objectDisplayedValue` | `string \| null` | Não         | Nome da propriedade a ser exibida caso o campo seja um objeto (ex: `foreignKey`, `object`). | `'nome'`                       |
| `isSelected`           | `boolean`        | Não         | Define se o item está marcado como selecionado.                                             | `false`                        |

---

### Eventos

| Evento             | Tipo                 | Descrição                                               |
| ------------------ | -------------------- | ------------------------------------------------------- |
| `eventClick`       | `EventEmitter<void>` | Emite evento ao clicar no card.                         |
| `eventOnSelect`    | `EventEmitter<void>` | Emite evento ao selecionar (checkbox ou clique).        |
| `eventClickToEdit` | `EventEmitter<void>` | Emite evento ao clicar no botão de editar (se visível). |

---

### Exemplo básico

```html
<selectable-card
  [itemDisplayed]="produto"
  [className]="'Produto'"
  [columnsQuantity]="3"
  [displayedfieldsName]="['nome', 'preco']"
  [fieldsType]="['string', 'number']"
  [isCheckBox]="true"
  [objectDisplayedValue]="'nome'"
  (eventClick)="abrirDetalhes($event)"
  (eventOnSelect)="selecionarProduto($event)"
>
</selectable-card>
```

### Funcionalidades

- Cria dinamicamente os componentes necessários para renderizar cada campo com base no tipo (date, foreignKey, boolean, selector, etc).
- Suporte completo a campos do tipo objeto, arrays e valores nulos.
- Adapta estilo automaticamente com grid CSS baseado na quantidade de colunas informada.
- Pode ser utilizado em subformulários, evitando exibir campos redundantes com classFather.

### Métodos principais

| Método                          | Descrição                                                                         |
| ------------------------------- | --------------------------------------------------------------------------------- |
| `createComponentsOnView()`      | Percorre os campos e instancia dinamicamente os componentes apropriados.          |
| `createComponent(...)`          | Cria um componente para um campo individual com base no tipo.                     |
| `createObjectField(...)`        | Gera o conteúdo de um campo `object` ou `foreignKey`, exibindo um valor amigável. |
| `getFormatDateFromUserConfig()` | Retorna o formato de data do usuário, com fallback para `dd/MM/YY`.               |
| `onClick()`                     | Emite o evento `eventClick`.                                                      |
| `selectItem()`                  | Emite o evento `eventOnSelect`.                                                   |
| `onClickToEdit()`               | Emite o evento `eventClickToEdit`.                                                |

### Observações

> - Ideal para visualizações dinâmicas de itens em listas com vários campos.
> - Os campos são criados após o AfterViewInit para garantir o carregamento correto do ViewContainerRef.
> - Se um campo não for visível (visibleList com false), ele será ignorado.
