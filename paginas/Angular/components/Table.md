---
layout: default
title: Avalicao
permalink: /angular/Table
css:
  - material-style.css
---

# `DefaultTableComponent`

### Descrição

Componente de tabela customizada com suporte a seleção de itens, ordenação por colunas e emissão de eventos. Ideal para exibir listas dinâmicas com múltiplas colunas, com possibilidade de selecionar registros (um ou múltiplos) e aplicar limites na seleção.

### Propriedades

| Propriedade           | Tipo              | Obrigatório | Descrição                                                                                   | Exemplo                          |
|-----------------------|-------------------|-------------|---------------------------------------------------------------------------------------------|----------------------------------|
| `itemsDisplayed`      | `any[]`           | Sim         | Lista de objetos a serem exibidos na tabela.                                                | `[ { nome: 'Ana', idade: 20 } ]` |
| `displayedfieldsName` | `string[]`        | Sim         | Lista dos nomes dos campos que devem aparecer como colunas.                                | `['nome', 'idade']`              |
| `fieldsType`          | `string[]`        | Sim         | Tipos dos campos que serão exibidos (`'string'`, `'number'`, etc.).                         | `['string', 'number']`           |
| `isSelectable`        | `boolean`         | Não         | Indica se os itens da tabela são selecionáveis. Padrão: `true`.                             | `true`                           |
| `selectedItemsLimit`  | `number \| null`  | Não         | Limite de itens que podem ser selecionados. `null` para seleção ilimitada.                  | `2`                              |

### Eventos

| Evento                | Tipo                   | Descrição                                                         |
|------------------------|------------------------|-------------------------------------------------------------------|
| `eventSelectedValues` | `EventEmitter<any[]>`  | Emite a lista de itens selecionados sempre que a seleção muda.   |

### Exemplo básico

```html
<default-table
  [itemsDisplayed]="clientes"
  [displayedfieldsName]="['nome', 'idade']"
  [fieldsType]="['string', 'number']"
  [isSelectable]="true"
  [selectedItemsLimit]="3"
  (eventSelectedValues)="processarSelecionados($event)">
</default-table>
```
### Observações
> * O campo `"selectableField"` é automaticamente adicionado como primeira coluna para controle de seleção.
> * A ordenação por coluna é feita via método `sortByProperty(fieldName: string)`, que reordena a lista `itemsDisplayed` com base no campo clicado.
> * A seleção é feita usando `SelectionModel` da CDK do Angular, com suporte a múltiplas seleções.
> * A coluna clicada para ordenação é destacada visualmente via a propriedade `pressedColumn`.
> * O componente emite eventos de seleção em tempo real sempre que a seleção for alterada.
> * O ciclo de vida é corretamente tratado com `takeUntil(this.ngUnsubscribe)` para evitar vazamentos de memória.

### Métodos principais
* `sortByProperty(fieldName)` – Ordena os itens por um campo.
* `select(row)` – Alterna a seleção de uma linha.
* `isAllSelected()` – Verifica se todos os itens estão selecionados.
* `selectAll()` – Seleciona ou desseleciona todos os itens.
* `setPressedColumn(column)` – Define qual coluna foi pressionada (para efeito visual).
* `clearPressedColumn()` – Limpa a coluna pressionada.
* `ngOnDestroy()` – Finaliza as subscrições reativas corretamente.