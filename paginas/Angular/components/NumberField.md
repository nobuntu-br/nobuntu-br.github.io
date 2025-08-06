---
layout: default
title: NumberField
permalink: /angular/NumberField
css:
  - material-style.css
---

## `NumberFieldComponent`

### Descrição

Componente de campo de número customizado com funcionalidades avançadas como:

- máscaras e separador decimal;
- limite de caracteres;
- botão interativo com ícone (calculadora ou telefone);
- visibilidade condicional;
- integração com formulário reativo;
- arredondamento automático com casas decimais;
- diálogo de calculadora integrado (`CalculatorComponent`).

Estende o `BaseFieldComponent` para aproveitar comportamentos padrão de campos.

---

### Propriedades

| Propriedade             | Tipo                                  | Obrigatório | Descrição                                       | Exemplo                            |
| ----------------------- | ------------------------------------- | ----------- | ----------------------------------------------- | ---------------------------------- |
| `className`             | `string`                              | Sim         | Nome da entidade associada ao campo.            | `'Produto'`                        |
| `label`                 | `string`                              | Sim         | Rótulo do campo.                                | `'preco'`                          |
| `charactersLimit`       | `number`                              | Não         | Limite de caracteres visíveis no rótulo.        | `25`                               |
| `placeholder`           | `string`                              | Não         | Texto exibido no campo quando vazio.            | `'Digite um valor'`                |
| `mask`                  | `string`                              | Não         | Máscara para o valor do campo.                  | `'0.00'`                           |
| `maskType`              | `string`                              | Não         | Tipo de máscara usada (ex: `'phone'`).          | `'phone'`                          |
| `svgIcon`               | `string`                              | Não         | Ícone exibido no campo. Pode ser personalizado. | `'heroicons_solid:calculator'`     |
| `iconPosition`          | `'start' \| 'end'`                    | Não         | Posição do ícone.                               | `'end'`                            |
| `isRequired`            | `boolean`                             | Não         | Indica se o campo é obrigatório.                | `true`                             |
| `defaultValue`          | `string \| number \| null`            | Não         | Valor inicial do campo.                         | `10.5`                             |
| `actionOnClickInIcon`   | `() => void`                          | Não         | Ação ao clicar no ícone.                        | `() => alert('Clicado!')`          |
| `conditionalVisibility` | `{ field: string, values: string[] }` | Não         | Visibilidade baseada em outro campo.            | `{ field: 'tipo', values: ['P'] }` |
| `resourceForm`          | `FormGroup<any>`                      | Sim         | Formulário reativo onde o campo está.           | `this.form`                        |
| `limiteOfChars`         | `number`                              | Não         | Limite de dígitos inteiros.                     | `6`                                |
| `numberOfDecimals`      | `number`                              | Não         | Quantidade de casas decimais.                   | `2`                                |
| `decimalSeparator`      | `string`                              | Não         | Caractere separador decimal (`'.'` ou `','`).   | `','`                              |

---

### Exemplo básico

```html
<number-field
  [label]="'preco'"
  [className]="'Produto'"
  [isRequired]="true"
  [placeholder]="'Digite o valor'"
  [defaultValue]="10.5"
  [numberOfDecimals]="2"
  [decimalSeparator]="','"
  [resourceForm]="form"
>
</number-field>
```

### Funcionalidades

- Validação de limite de caracteres e casas decimais com verificação dinâmica.
- Máscara de telefone: muda o ícone para telefone e permite chamada.
- Separador decimal personalizável, com conversão automática.
- Arredondamento automático ao número de casas decimais.
- Visibilidade condicional baseada em outros campos do formulário.
- Ícone clicável com ação personalizada ou calculadora embutida.

Métodos
| Método | Descrição |
| ------------------------ | ------------------------------------------------------------------------------- |
| `ngOnInit()` | Inicializa o componente e configura suas propriedades. |
| `checkCharacterLimit()` | Valida o número de caracteres permitidos antes do separador. |
| `getDefaultValue()` | Define o valor padrão inicial do campo. |
| `setLabel()` | Traduz e formata o rótulo do campo com limite de caracteres. |
| `checkConditional()` | Aplica visibilidade condicional com base em outro campo do formulário. |
| `setIconPhone()` | Define ícone e ação com base no tipo de máscara. |
| `setupMaskAndListener()` | Configura máscara e monitora alterações de valor para formatar automaticamente. |
| `applyFinalFormatting()` | Aplica formatação final ao valor exibido. |
| `validateInput()` | Verifica validade do campo. |
| `setIconPosition()` | Define a posição do ícone (`start` ou `end`). |
| `openCalculatorDialog()` | Abre o `CalculatorComponent` como diálogo para inserir valores. |
| `ngOnDestroy()` | Encerra as assinaturas reativas. |

### Observações

> - O valueForSaving armazena o valor numérico formatado e pode ser usado para submissão do formulário.
> - A integração com CalculatorComponent permite entrada de valores via interface numérica.
> - O uso de FormControl separado (inputValue) possibilita lógica e validação mais refinadas.
