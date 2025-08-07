---
layout: default
title: TimeField
permalink: /angular/TimeField
css:
  - material-style.css
---
## `TimeFieldComponent`

### Descrição

Componente de formulário utilizado para **selecionar ou inserir um horário** no formato `HH:mm`. Suporta entrada manual com validação, formatação automática e seleção via modal (`TimePickerDialogComponent`). Permite também configuração de visibilidade condicional e valor padrão.

---

### Propriedades

| Propriedade             | Tipo                                  | Obrigatório | Descrição                                                                            | Exemplo                                 |
| ----------------------- | ------------------------------------- | ----------- | ------------------------------------------------------------------------------------ | --------------------------------------- |
| `label`                 | `string`                              | Sim         | Rótulo do campo exibido ao usuário.                                                  | `'Hora de entrada'`                     |
| `charactersLimit`       | `number`                              | Não         | Limita o número de caracteres exibidos no label.                                     | `20`                                    |
| `isRequired`            | `boolean`                             | Não         | Define se o campo é obrigatório.                                                     | `true`                                  |
| `className`             | `string`                              | Sim         | Nome da classe para tradução do label.                                               | `'Evento'`                              |
| `defaultValue`          | `string`                              | Não         | Valor padrão no formato `HH:mm`.                                                     | `'08:00'`                               |
| `conditionalVisibility` | `{ field: string, values: string[] }` | Não         | Define se o campo deve estar visível com base no valor de outro campo do formulário. | `{ field: 'turno', values: ['manhã'] }` |
| `resourceForm`          | `FormGroup`                           | Sim         | Formulário principal que contém o campo.                                             | —                                       |

---

### Exemplo básico

```html
<app-time-field
  [label]="'horaEntrada'"
  [charactersLimit]="30"
  [isRequired]="true"
  [defaultValue]="'08:00'"
  [resourceForm]="form"
  [className]="'Evento'"
>
</app-time-field>
```

### Funcionalidades

- Entrada de horário manual com validação e formatação automática (HH:mm).
- Seleção via diálogo de escolha de hora (TimePickerDialogComponent).
- Suporte a visibilidade condicional com base em outro campo.
- Tradução automática do rótulo com base em className e label.
- Possibilidade de definir valor padrão.
- Integração com FormGroup.

### Métodos principais

| Método                 | Descrição                                                                 |
| ---------------------- | ------------------------------------------------------------------------- |
| `ngOnInit()`           | Inicializa rótulo, valor padrão e visibilidade condicional.               |
| `checkConditional()`   | Monitora valor de outro campo para controlar visibilidade do campo atual. |
| `openDialog()`         | Abre o diálogo para selecionar hora manualmente.                          |
| `validateTimeFormat()` | Impede entrada de caracteres inválidos no input.                          |
| `formatTimeInput()`    | Formata a entrada conforme o usuário digita (`HH:mm`).                    |
| `isValidTime()`        | Valida se a string está no formato `HH:mm`.                               |
| `setLabel()`           | Aplica tradução e formatação ao label.                                    |
| `getDefaultValue()`    | Define o valor inicial do campo.                                          |

### Observações

> - O valor do campo é armazenado em inputValue: FormControl<string | null>.
> - O diálogo de seleção (TimePickerDialogComponent) permite ajuste fino de horas e minutos.
> - A visibilidade do campo pode ser controlada dinamicamente com base no valor de outro campo.
