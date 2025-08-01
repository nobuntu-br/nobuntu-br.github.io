---
layout: default
title: Avalicao
permalink: /angular/EscalaLinearField
css:
  - material-style.css
---

# `EscalaLinearFieldComponent`

### Descrição

Componente de campo customizado para exibição de uma escala linear com opções de valor (`label` e `value`). Pode ser usado para representar avaliações em uma escala (por exemplo, 0 a 10). Os valores são passados como uma lista de opções, e o campo é vinculado a um `FormControl`.

### Propriedades

| Propriedade        | Tipo        | Obrigatório | Descrição                                                    | Exemplo                                                         |
| ------------------ | ----------- | ----------- | ------------------------------------------------------------ | --------------------------------------------------------------- |
| `label`            | `string`    | Sim         | Rótulo que será exibido como título do componente.           | `"Satisfação do cliente"`                                       |
| `valuesOptionList` | `IOption[]` | Sim         | Lista de opções que formam a escala linear (valor + rótulo). | `[ { value: 1, label: 'Ruim' }, { value: 5, label: 'Ótimo' } ]` |

### Exemplo básico

```html
<app-escala-linear-field
  [label]="'Avaliação do Atendimento'"
  [valuesOptionList]="[
    { value: 1, label: 'Muito Ruim' },
    { value: 2, label: 'Ruim' },
    { value: 3, label: 'Regular' },
    { value: 4, label: 'Bom' },
    { value: 5, label: 'Ótimo' }
  ]"
>
</app-escala-linear-field>
```

### Observações

> - A lista `valuesOptionList` determina as opções exibidas no componente, que provavelmente são renderizadas como botões ou radio buttons em escala.
> - O valor selecionado é armazenado em `inputValue`, um `FormControl<object[]>`, que pode ser usado para reatividade ou validação.
> - Utiliza o serviço `TranslocoService` para suporte a internacionalização, embora neste trecho não haja uso direto.
> - O componente implementa os ciclos de vida `OnInit` e `AfterViewInit`, mas sem lógica definida por padrão.

### Interface `IOption`

```ts
export interface IOption {
  value: number;
  label: string;
}
```
