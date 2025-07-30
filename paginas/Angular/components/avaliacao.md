---
layout: default
title: Avalicao
permalink: /angular/avaliacao
css:
  - material-style.css
---

## `AvaliacaoFieldComponent`

### Descrição

Componente de avaliação visual baseado em ícones (ex: estrelas) para seleção de nota ou pontuação. É um campo de formulário reativo customizado que permite limitar caracteres, definir obrigatoriedade, condicionar visibilidade e configurar a quantidade de ícones exibidos.

### Propriedades

| Propriedade             | Tipo                                               | Obrigatório | Descrição                                                              | Exemplo                                  |
| ----------------------- | -------------------------------------------------- | ----------- | ---------------------------------------------------------------------- | ---------------------------------------- |
| `label`                 | `string`                                           | Não         | Rótulo do campo de avaliação.                                          | `"Avaliação do serviço"`                 |
| `charactersLimit`       | `number`                                           | Não         | Limite de caracteres permitido (não utilizado diretamente).            | `100`                                    |
| `isRequired`            | `boolean`                                          | Não         | Define se o campo é obrigatório.                                       | `true`                                   |
| `className`             | `string`                                           | Não         | Classe CSS customizada para estilização.                               | `"avaliacao-custom"`                     |
| `icones`                | `IconOption[]` (`{ nome: string, valor: number }`) | Não         | Lista de ícones com nome e valor associados.                           | `[ { nome: "estrela", valor: 1 }, ... ]` |
| `numberOfIcons`         | `number[]`                                         | Não         | Define a quantidade de ícones exibidos. Padrão: 5.                     | `[1, 2, 3, 4, 5]`                        |
| `conditionalVisibility` | `{ field: string, values: string[] }`              | Não         | Define visibilidade condicional com base em outro campo do formulário. | `{ field: "tipo", values: ["sim"] }`     |
| `resourceForm`          | `FormGroup<any>`                                   | Sim         | Formulário pai ao qual o campo está vinculado.                         | `formGroupInstance`                      |

### Exemplo básico

```html
<app-avaliacao-field
  [label]="'Satisfação geral'"
  [isRequired]="true"
  [icones]="[
    { nome: 'star', valor: 1 },
    { nome: 'star', valor: 2 },
    { nome: 'star', valor: 3 },
    { nome: 'star', valor: 4 },
    { nome: 'star', valor: 5 }
  ]"
  [numberOfIcons]="[1,2,3,4,5]"
  [resourceForm]="meuForm"
  [conditionalVisibility]="{ field: 'tipoServico', values: ['completo'] }"
>
</app-avaliacao-field>
```

### Observações

> - Caso numberOfIcons não seja definido, o componente exibirá 5 ícones por padrão.
> - A visibilidade condicional (conditionalVisibility) habilita ou desabilita o campo conforme o valor de outro campo no FormGroup.
> - O valor selecionado pode ser acessado via inputValue do FormControl.
> - O campo é desabilitado automaticamente se os critérios da visibilidade condicional não forem atendidos.

\_\_

## `AvaliacaoUnicaFieldComponent`

### Descrição

Componente de avaliação com seleção única entre ícones (ex: estrelas, carinhas, etc.). Ideal para representar satisfação ou nota única. Permite configuração de visibilidade condicional e uso com formulários reativos.

### Propriedades

| Propriedade             | Tipo                                               | Obrigatório | Descrição                                                              | Exemplo                                                     |
| ----------------------- | -------------------------------------------------- | ----------- | ---------------------------------------------------------------------- | ----------------------------------------------------------- |
| `label`                 | `string`                                           | Não         | Rótulo do campo.                                                       | `"Nota geral"`                                              |
| `isRequired`            | `boolean`                                          | Não         | Define se o campo é obrigatório.                                       | `true`                                                      |
| `className`             | `string`                                           | Não         | Classe CSS customizada para estilização.                               | `"avaliacao-unica"`                                         |
| `icones`                | `IconOption[]` (`{ nome: string, valor: number }`) | Não         | Lista de ícones com nome e valor associados.                           | `[ { nome: "bom", valor: 1 }, { nome: "ruim", valor: 0 } ]` |
| `conditionalVisibility` | `{ field: string, values: string[] }`              | Não         | Define visibilidade condicional com base em outro campo do formulário. | `{ field: "mostrarNota", values: ["sim"] }`                 |
| `resourceForm`          | `FormGroup<any>`                                   | Sim         | Formulário pai ao qual o campo está vinculado.                         | `formGroupInstance`                                         |

### Exemplo básico

```html
<app-avaliacao-unica-field
  [label]="'Como você se sentiu?'"
  [isRequired]="true"
  [icones]="[
    { nome: 'feliz', valor: 3 },
    { nome: 'neutro', valor: 2 },
    { nome: 'triste', valor: 1 }
  ]"
  [resourceForm]="meuForm"
  [conditionalVisibility]="{ field: 'avaliarHumor', values: ['sim'] }"
>
</app-avaliacao-unica-field>
```

### Observações

> - O componente permite apenas uma seleção entre os ícones informados.
> - Ao selecionar um ícone, o valor (valor) é armazenado no FormControl.
> - A visibilidade do campo pode ser controlada dinamicamente com conditionalVisibility.
> - O campo é desabilitado automaticamente se os critérios da visibilidade condicional não forem atendidos.
