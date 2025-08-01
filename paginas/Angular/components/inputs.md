---
layout: default
title: Gerador
permalink: /angular/inputs
css:
  - material-style.css
---

## `InputFieldComponent`

Componente de campo de entrada reutilizável para formulários.

### Descrição

Permite criar campos de texto customizáveis, com suporte a máscara, limite de caracteres, validação obrigatória e personalização de rótulo e placeholder.

### Modo de uso básico

```html
<input-field
  [className]=""
  [label]=""
  [charactersLimit]=""
  [placeholder]=""
  [isRequired]=""
>
</input-field>
```

### Propriedades / Atributos

| Propriedade     | Tipo    | Obrigatório | Descrição                                | Exemplo            |
| --------------- | ------- | ----------- | ---------------------------------------- | ------------------ |
| className       | string  | Não         | Classe CSS ou identificação do campo     | `'Products'`       |
| label           | string  | Sim         | Rótulo exibido acima do campo            | `'Nome'`           |
| charactersLimit | number  | Não         | Limite máximo de caracteres              | `30`               |
| placeholder     | string  | Não         | Texto exibido como placeholder           | `'Digite o nome'`  |
| isRequired      | boolean | Não         | Define se o campo é obrigatório          | `true` ou `false`  |
| mask            | string  | Não         | Máscara de entrada (ex: CPF, telefone)   | `'000.000.000-00'` |
| maskType        | string  | Não         | Tipo de máscara (ex: `'email'`, `'cpf'`) | `'email'`          |

### Exemplo com máscara

```html
<input-field
  [className]="'CPF'"
  [label]="'CPF'"
  [charactersLimit]="14"
  [placeholder]="'Digite o CPF'"
  [isRequired]="true"
  [mask]="'000.000.000-00'"
>
</input-field>
```

### Observações

- Para validação de email, use `[maskType]="'email'"`.
- Para campos obrigatórios, defina` [isRequired]="true"`.
- O visual pode ser customizado via` [className]`.
- Limite de caracteres é opcional.
- Máscaras aceitam apenas formatos suportados pelo projeto.

---

## `CheckboxFieldComponent`

Componente de checkbox reutilizável para formulários.

### Descrição

Permite criar um campo de seleção (checkbox) customizável, com suporte a rótulo, obrigatoriedade, valor padrão, limite de caracteres e integração com formulários reativos.

### Propriedades

| Propriedade           | Tipo      | Obrigatório | Descrição                                  | Valor padrão |
| --------------------- | --------- | ----------- | ------------------------------------------ | ------------ |
| className             | string    | Não         | Classe CSS ou identificação do campo       | `''`         |
| label                 | string    | Sim         | Rótulo exibido ao lado do checkbox         | -            |
| isRequired            | boolean   | Não         | Define se o campo é obrigatório            | `false`      |
| charactersLimit       | number    | Não         | Limite máximo de caracteres (se aplicável) | `null`       |
| defaultValue          | boolean   | Não         | Valor inicial do checkbox                  | `false`      |
| conditionalVisibility | objeto    | Não         | Define condição para exibir o campo        | `null`       |
| resourceForm          | FormGroup | Não         | Formulário reativo para integração         | `null`       |

### Exemplo básico

```html
<app-checkbox-field
  [className]="'user'"
  [label]="'Aceito os termos'"
  [isRequired]="true"
  [charactersLimit]="30"
  [defaultValue]="false"
>
</app-checkbox-field>
```

### Exemplo com formulário reativo

```html
<form [formGroup]="meuFormGroup">
  <app-checkbox-field
    [label]="'Receber novidades'"
    [resourceForm]="meuFormGroup"
    [defaultValue]="true"
  >
  </app-checkbox-field>
</form>
```

### Observações

- Para tornar o campo obrigatório, use `[isRequired]="true"`.
- O valor inicial pode ser definido com `[defaultValue]`.
- Para integração com formulários reativos, passe o FormGroup via `[resourceForm]`.
- O rótulo é obrigatório para melhor acessibilidade.

---

## `DateFieldComponent`

Componente Angular para exibir um campo de data formatada.

### Descrição

- O componente exibe o label traduzido (ou formatado) e a data no formato especificado.
- O label é limitado pelo número de caracteres definido.
- A tradução do label é feita automaticamente se disponível.

### inputs

- `className` (string): Nome da classe à qual o campo pertence (ex: "Products").
- `label` (string): Título do campo (ex: "Name").
- `value` (Date): Valor apresentado no campo.
- `format` (string, opcional): Máscara de formatação da data (padrão: "dd-MM-YY").
- `charactersLimit` (number, opcional): Limite máximo de caracteres para o label (padrão: 25).

---

### Exemplo de uso

```html
<app-date-field
  [className]="'Products'"
  [label]="'Name'"
  [value]="selectedDate"
  [format]="'dd/MM/yyyy'"
  [charactersLimit]="30"
>
</app-date-field>
```

---

## `InputDateFieldComponent`

### Descrição

- Exibe um campo de data com Material Design.
- O label é traduzido/formatado e limitado em caracteres.
- Permite valor padrão e controle de visibilidade condicional.
- Integrado a formulários reativos (FormGroup).

### Inputs

- `label` (string): Título do campo.
- `charactersLimit` (number): Limite máximo de caracteres para o label.
- `isRequired` (boolean, opcional): Se o campo é obrigatório (padrão: false).
- `className` (string): Nome da classe à qual o campo pertence.
- `resourceForm` (FormGroup): Formulário reativo ao qual o campo está vinculado.
- `defaultValue` (Date | null, opcional): Valor padrão do campo.
- `conditionalVisibility` ({ field: string, values: string[] }, opcional): Condição para exibir/habilitar o campo com base em outro campo do formulário.

### Exemplo

```html
<app-input-date-field
  [label]="'Data de Nascimento'"
  [className]="'User'"
  [charactersLimit]="30"
  [isRequired]="true"
  [resourceForm]="form"
  [defaultValue]="defaultDate"
>
</app-input-date-field>
```

---
