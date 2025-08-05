---
layout: default
title: filtros
permalink: /angular/filtros
css:
  - material-style.css
---


## `BaseResourceFilterComponent`

### Descrição

Componente que permite a criação dinâmica de múltiplos filtros sobre recursos, baseado em tipos de campos (`string`, `number`, `boolean`, `Date`). Cada filtro é renderizado com um componente correspondente, e os resultados são retornados ao chamador por meio de um `MatDialog`.

### Propriedades

| Propriedade                    | Tipo         | Obrigatório | Descrição                                                                             | Exemplo                                   |
| ------------------------------ | ------------ | ----------- | ------------------------------------------------------------------------------------- | ----------------------------------------- |
| `dialogData.itemBaseStructure` | `ItemBase[]` | Sim         | Lista de campos (variáveis) que o usuário poderá filtrar.                             | `[ { name: 'status', type: 'boolean' } ]` |
| `dialogData.submitFindCustom`  | `Function`   | Sim         | Função que será chamada ao aplicar os filtros, com os dados filtrados como argumento. | `submitFindCustom(data)`                  |

### Exemplo básico

```ts
this.dialog.open(BaseResourceFilterComponent, {
  data: {
    itemBaseStructure: [
      { name: 'nome', type: 'string' },
      { name: 'dataCriacao', type: 'Date' },
    ],
    submitFindCustom: (params) => {
      console.log('Filtros aplicados:', params);
    },
  },
});
```

### Observações

> - Ao clicar em "Adicionar filtro", o componente cria um novo filtro com base no tipo da variável selecionada.
> - Os tipos suportados e seus componentes correspondentes:
>   - string → FilterTextComponent
>   - number → FilterNumberWithConditionsComponent
>   - boolean → FilterBooleanComponent
> - Date → FilterPeriodComponent
> - Cada filtro pode ser configurado com uma condição lógica (and / or).
> - O método getAllSearchParameters() gera os filtros e condições que serão enviados para o backend.
> - Os valores de cada filtro são recebidos por meio do método getChildData(), que é chamado por eventos dos componentes filhos.

### Métodos

| Método                    | Descrição                                                                   |
| ------------------------- | --------------------------------------------------------------------------- |
| `addNewFilter()`          | Adiciona um novo filtro baseado no primeiro item da estrutura de variáveis. |
| `removeFilter()`          | Remove o último filtro adicionado.                                          |
| `onSelectedFieldChange()` | Altera o tipo de filtro exibido conforme o tipo da variável selecionada.    |
| `applyFilters()`          | Chama a função `submitFindCustom` com os dados filtrados.                   |
| `getChildData()`          | Atualiza o valor do filtro no índice correspondente.                        |
| `closeThisDialog()`       | Fecha o diálogo retornando os parâmetros de filtragem.                      |

### Interfaces

SelectedFilter

```ts
interface SelectedFilter {
  index: number;
  value: string;
  selectedFilterOption: number;
  condition: FormControl<Condition>;
  filterValue: any;
}
```

Condition

```ts
enum Condition {
  and = 'and',
  or = 'or',
}
```

FilterTypes

```ts
enum FilterTypes {
  filterNumberWithConditions,
  filterDate,
  filterTextWithConditions,
  filterBoolean,
}
```
