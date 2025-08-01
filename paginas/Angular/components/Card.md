---
layout: default
title: Avalicao
permalink: /angular/Card
css:
  - material-style.css
---

# `DefaultCardComponent`

### Descrição

Componente de cartão reutilizável para exibição de dados estruturados com suporte a renderização dinâmica de campos, visualização condicional, tipos variados (texto, data, objeto, subformulário), customização por classe, e ações de clique, seleção e edição. Ideal para visualização de registros em listas e dashboards.

### Propriedades

| Propriedade             | Tipo               | Obrigatório | Descrição                                                                                          | Exemplo                          |
|-------------------------|--------------------|-------------|------------------------------------------------------------------------------------------------------|----------------------------------|
| `itemDisplayed`         | `any`              | Sim         | Objeto com os dados a serem exibidos no card.                                                       | `{ name: 'João', age: 30 }`      |
| `className`             | `string`           | Sim         | Nome da classe do formulário para fins de tradução ou estilização.                                 | `"usuario"`                      |
| `columnsQuantity`       | `number`           | Não         | Quantidade de colunas exibidas no layout do card.                                                   | `2`                              |
| `displayedfieldsName`   | `string[]`         | Sim         | Lista dos nomes dos campos a serem exibidos.                                                        | `['name', 'email']`              |
| `fieldsType`            | `string[]`         | Sim         | Tipos dos campos (`'text'`, `'date'`, `'foreignKey'`, `'subform'`, etc).                            | `['text', 'date']`               |
| `visibleList`           | `boolean[]`        | Não         | Lista que define se cada campo está visível.                                                        | `[true, false]`                  |
| `objectDisplayedValue`  | `string \| null`   | Não         | Nome do campo a ser exibido quando o valor é um objeto.                                             | `"name"`                         |
| `userConfig`            | `any`              | Não         | Objeto de configuração do usuário, especialmente para datas.                                        | `{ dateFormat: 'YYYY-MM-DD' }`   |
| `isEditable`            | `boolean`          | Não         | Indica se o card pode ser editado.                                                                  | `true`                           |
| `isSelectable`          | `boolean`          | Não         | Indica se o card pode ser selecionado.                                                              | `false`                          |

### Eventos

| Evento                 | Emissor                      | Descrição                                                    |
|------------------------|------------------------------|--------------------------------------------------------------|
| `eventClick`           | `@Output()`                  | Emitido ao clicar no card.                                   |
| `eventOnSelect`        | `@Output()`                  | Emitido ao selecionar o card.                                |
| `eventClickToEdit`     | `@Output()`                  | Emitido ao clicar no botão de editar (se aplicável).         |

### Exemplo básico

```html
<app-default-card
  [itemDisplayed]="usuario"
  [className]="'usuario'"
  [columnsQuantity]="2"
  [displayedfieldsName]="['nome', 'email', 'dataNascimento']"
  [fieldsType]="['text', 'text', 'date']"
  [objectDisplayedValue]="'name'"
  [visibleList]="[true, true, true]"
  [userConfig]="{ dateFormat: 'dd/MM/yyyy' }"
  (eventClick)="abrirDetalhes($event)"
  (eventClickToEdit)="editarItem($event)">
</app-default-card>
```
### Observações
> * Os componentes visuais são criados dinamicamente com base nas propriedades fornecidas.
> * Campos do tipo `date` utilizam `DateFieldComponent` e seguem o formato definido em `userConfig`.
> * Campos com objetos ou arrays utilizam `createObjectField` e extraem o valor de `objectDisplayedValue`, com fallback automático para o primeiro campo disponível.
> * O layout do card é definido com `grid-template-columns`, baseado em `columnsQuantity`.

### Métodos internos
* `createComponentsOnView()` – Cria os componentes com base nas listas de campos, tipos e visibilidade.
* `createComponent()` – Cria dinamicamente cada campo no template conforme seu tipo.
* `createObjectField()` – Renderiza um valor de objeto ou lista de objetos, extraindo uma propriedade específica.
* `getFormatDateFromUserConfig()` – Retorna o formato de data com base em userConfig.
* `onClick()`, `onClickToEdit()`, `selectItem()` – Manipulam interações do usuário.