---
layout: default
title: SelectorField
permalink: /angular/SelectorField
css:
  - material-style.css
---
## `SelectorFieldComponent`

### Descrição

Componente de exibição de campo do tipo "seletor", utilizado para apresentar um ou mais valores selecionados a partir de uma lista (`valuesList`). O valor é apresentado de forma formatada e com suporte à tradução. É uma extensão do `BaseFieldComponent`.

---

### Propriedades

| Propriedade       | Tipo                                           | Obrigatório | Descrição                                                                       | Exemplo                           |
| ----------------- | ---------------------------------------------- | ----------- | ------------------------------------------------------------------------------- | --------------------------------- |
| `className`       | `string`                                       | Sim         | Nome da classe da entidade (usado para tradução de rótulos).                    | `'Produto'`                       |
| `label`           | `string`                                       | Sim         | Nome do campo que será traduzido e exibido como título.                         | `'nome'`                          |
| `value`           | `string \| ISelectorValue \| ISelectorValue[]` | Sim         | Valor atual do campo, que pode ser ID, objeto ou array de objetos selecionados. | `{ id: '1', value: 'Admin' }`     |
| `charactersLimit` | `number`                                       | Não         | Limite máximo de caracteres para o título do campo.                             | `100`                             |
| `valuesList`      | `ISelectorValue[]`                             | Sim         | Lista de valores possíveis para o campo.                                        | `[ { id: '1', value: 'Admin' } ]` |

---

### Exemplo básico

```html
<app-selector-field
  [className]="'Usuario'"
  [label]="'perfil'"
  [value]="{ id: '1', value: 'Admin' }"
  [charactersLimit]="30"
  [valuesList]="[
    { id: '1', value: 'Admin' },
    { id: '2', value: 'User' }
  ]"
>
</app-selector-field>
```

### Funcionalidades

> - Exibe um valor do tipo seletor, podendo ser único ou múltiplo.
> - Traduz o rótulo do campo (label) com base na className usando TranslocoService.
> - Aplica limite de caracteres no rótulo, se informado.
> - Determina o(s) valor(es) selecionado(s) com base em valuesList e atualiza a propriedade value.

### Métodos principais

| Método                | Descrição                                                                       |
| --------------------- | ------------------------------------------------------------------------------- |
| `ngOnInit()`          | Inicializa o componente, define rótulo traduzido e busca os itens exibidos.     |
| `setLabel()`          | Traduz o rótulo do campo. Se não houver tradução, formata o rótulo padrão.      |
| `getDisplayedItens()` | Verifica os itens selecionados em `valuesList` e atribui à propriedade `value`. |
| `ngOnDestroy()`       | Finaliza observadores ativos via `ngUnsubscribe`.                               |

### Observações

> - Este componente é de exibição (leitura) e não de entrada de dados.
> - Requer que a lista de valores (valuesList) esteja disponível e corretamente preenchida.
> - Suporta tradução de rótulos via TranslocoService, mas fornece fallback para exibição legível em caso de erro.
