---
layout: default
title: SelectorInputField
permalink: /angular/SelectorInputField
css:
  - material-style.css
---
## `SelectorInputFieldComponent`

### Descrição

Componente de campo de formulário do tipo seletor (dropdown ou multiselect), utilizado para seleção de um ou mais valores de uma lista. Permite configuração de valor padrão, visibilidade condicional com base em outro campo do formulário e limite de itens selecionáveis.

---

### Propriedades

| Propriedade             | Tipo                                  | Obrigatório | Descrição                                                                         | Exemplo                                 |
| ----------------------- | ------------------------------------- | ----------- | --------------------------------------------------------------------------------- | --------------------------------------- |
| `label`                 | `string`                              | Sim         | Texto que será exibido como rótulo do campo.                                      | `'Categoria'`                           |
| `valuesList`            | `ISelectorValue[]`                    | Sim         | Lista de opções disponíveis para seleção. Deve conter `id`, `pt` e `en`.          | `[ { id: '1', pt: 'Sim', en: 'Yes' } ]` |
| `selectItemsLimit`      | `number`                              | Não         | Quantidade máxima de itens que podem ser selecionados (aplicável em multiselect). | `2`                                     |
| `defaultValue`          | `string`                              | Não         | Valor padrão do campo.                                                            | `'1'`                                   |
| `conditionalVisibility` | `{ field: string, values: string[] }` | Não         | Define visibilidade condicional com base no valor de outro campo do formulário.   | `{ field: 'tipo', values: ['ativo'] }`  |
| `resourceForm`          | `FormGroup<any>`                      | Sim         | Formulário reativo onde o campo está inserido.                                    | `meuFormulario`                         |

---

### Exemplo básico

```html
<app-selector-input-field
  [label]="'Tipo de Usuário'"
  [valuesList]="[
    { id: '1', pt: 'Administrador', en: 'Administrator' },
    { id: '2', pt: 'Usuário', en: 'User' }
  ]"
  [defaultValue]="'1'"
  [selectItemsLimit]="1"
  [resourceForm]="formulario"
  [conditionalVisibility]="{ field: 'status', values: ['ativo'] }"
>
</app-selector-input-field>
```

### Funcionalidades

- Seleção única ou múltipla de valores de uma lista.
- Limitação da quantidade de seleções via selectItemsLimit.
- Definição de valor padrão com defaultValue.
- Visibilidade condicional do campo baseada no valor de outro campo do formulário.
- Internacionalização dos valores usando pt e en com TranslocoService.

### Métodos principais

| Método                 | Descrição                                                                       |
| ---------------------- | ------------------------------------------------------------------------------- |
| `ngAfterViewInit()`    | Inicializa valores padrão, aplica limites e configura visibilidade condicional. |
| `checkConditional()`   | Controla ativação/desativação do campo com base em outro campo do formulário.   |
| `limitSelectedItems()` | Aplica o limite de itens selecionados (em caso de multiselect).                 |
| `getDefaultValue()`    | Define o valor inicial se `defaultValue` estiver definido.                      |
| `getIdsFromValues()`   | Converte objetos de seleção para IDs simples.                                   |
| `getDataOnEdit()`      | Reinterpreta o valor atual e reatribui os objetos correspondentes.              |

### Observações

> - O valor selecionado é armazenado como ID(s), mas o componente exibe os textos traduzidos (pt ou en).
> - O componente é reativo e deve estar integrado com FormGroup.
> - O controle de visibilidade condicional depende do campo de referência estar corretamente integrado no mesmo FormGroup.
