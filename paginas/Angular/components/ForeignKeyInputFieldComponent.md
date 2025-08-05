---
layout: default
title: ForeignKeyInputField
permalink: /angular/foreignKeyInputField
css:
  - material-style.css
---

## `ForeignKeyInputFieldComponent`

### Descrição

Componente utilizado para seleção e inserção de dados relacionados por chave estrangeira. Permite busca, seleção, edição e criação de registros referenciados. Integra-se com formulários reativos (`FormGroup`) e exibe de forma amigável os dados selecionados, ocultando IDs.

### Propriedades

| Propriedade               | Tipo                          | Obrigatório | Descrição                                                                 | Exemplo                                       |
|---------------------------|-------------------------------|-------------|---------------------------------------------------------------------------|-----------------------------------------------|
| `label`                   | `string`                      | Sim         | Rótulo exibido acima do campo.                                           | `"Cliente"`                                   |
| `charactersLimit`         | `number`                      | Não         | Limite máximo de caracteres exibidos.                                    | `255`                                         |
| `placeholder`             | `string`                      | Não         | Texto exibido quando o campo está vazio.                                 | `"Selecione um cliente"`                      |
| `svgIcon`                 | `string`                      | Não         | Ícone SVG exibido no campo.                                              | `"person"`                                    |
| `isRequired`              | `boolean`                     | Não         | Define se o campo é obrigatório.                                         | `true`                                        |
| `fieldDisplayedInLabel`  | `string`                      | Sim         | Nome do atributo do objeto referenciado a ser exibido.                   | `"nome"`                                      |
| `className`               | `string`                      | Não         | Nome da classe relacionada.                                              | `"Clientes"`                                  |
| `fieldName`               | `string`                      | Não         | Nome da variável no formulário.                                          | `"cliente"`                                   |
| `dataToCreatePage`        | `IPageStructure`              | Não         | Metadados da estrutura da página para criação de novo item.              | `objeto com config e atributos`               |
| `value`                   | `any`                         | Não         | Estrutura com atributos e configurações da entidade.                     | `{ apiUrl: '/api/clientes', propertiesAttributes: [...] }` |
| `index`                   | `number`                      | Não         | Índice do campo atual no array `attributes`.                             | `0`                                           |
| `conditionalVisibility`   | `{ field: string, values: string[] }` | Não         | Define condições para exibir ou ocultar o campo.                         | `{ field: 'tipo', values: ['interno'] }`      |
| `resourceForm`            | `FormGroup<any>`              | Sim         | Formulário reativo do qual o campo faz parte.                            | `FormGroup`                                   |

### Exemplo básico

```html
<app-foreign-key-input-field
  [label]="'Cliente'"
  [placeholder]="'Selecione um cliente'"
  [fieldDisplayedInLabel]="'nome'"
  [className]="'Cliente'"
  [fieldName]="'cliente'"
  [value]="{ apiUrl: '/api/clientes', propertiesAttributes: [...] }"
  [resourceForm]="meuFormulario"
  [index]="0">
</app-foreign-key-input-field>
```
### Observações
> * Os dados são exibidos usando displayedValue, ocultando os IDs.
> * Suporta múltiplas seleções, com limite controlado por selectedItemsLimit.
> * Pode abrir um diálogo de seleção (DefaultListComponent) ou de criação (FormSpaceBuildComponent) de novos itens.
> * Integra lógica de visibilidade condicional com base em outros campos do formulário (conditionalVisibility).
> * Permite edição inline de itens selecionados via diálogo de lista.
> * Permite limpar os itens selecionados com removeItensOnInputField().

Métodos principais
| Método                           | Descrição                                                                               |
| -------------------------------- | --------------------------------------------------------------------------------------- |
| `setDisplayedValue()`            | Define quais dados do objeto serão exibidos no campo, com base no atributo configurado. |
| `openDefaultListToSelectItems()` | Abre diálogo para seleção de itens.                                                     |
| `openFormDialogToCreateItem()`   | Abre formulário para criação de novo item relacionado.                                  |
| `selectItems()`                  | Controla seleção de itens respeitando o limite.                                         |
| `setNewValueToInput()`           | Atualiza `inputValue` e os valores exibidos.                                            |
| `objectTratament()`              | Substitui objetos aninhados no form por seus respectivos IDs antes de salvar.           |
| `checkConditional()`             | Habilita ou desabilita o campo com base em condições configuradas.                      |
| `getFirstNonIdKey()`             | Retorna o primeiro atributo do objeto que não seja `id` ou `_id`.                       |
