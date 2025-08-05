---
layout: default
title: Campo
permalink: /angular/campo
css:
  - material-style.css
---


## `FieldComponent`

### Descrição

Componente de exibição de campo de texto, herdado de `BaseFieldComponent`. Apresenta um valor com rótulo traduzido ou formatado automaticamente, com suporte a limite de caracteres. Útil para visualização de dados em formulários ou páginas de detalhes.

### Propriedades

| Propriedade       | Tipo     | Obrigatório | Descrição                                                                 | Exemplo                          |
|-------------------|----------|-------------|---------------------------------------------------------------------------|----------------------------------|
| `className`       | `string` | Sim         | Nome da entidade associada ao campo, usada para tradução.                | `"Products"`                     |
| `label`           | `string` | Sim         | Nome do campo a ser exibido (usado como chave para tradução).            | `"Name"`                         |
| `value`           | `string` | Sim         | Valor real a ser exibido no campo.                                       | `"PlayStation 5"`               |
| `charactersLimit` | `number` | Não         | Limite de caracteres a ser exibido no valor e no rótulo.                 | `255`                            |

### Exemplo básico

```html
<app-field
  [className]="'Produto'"
  [label]="'nome'"
  [value]="'Notebook Lenovo 16GB'"
  [charactersLimit]="50">
</app-field>
```
### Observações
> * Utiliza um serviço de tradução para obter o rótulo (label) traduzido com base em className + "." + label. Exemplo: "Produto.nome".
> * Se não houver tradução disponível, o nome do campo (label) é formatado automaticamente (ex: firstName vira First Name).
> * O método setCharactersLimit() é utilizado para limitar tanto o valor quanto o rótulo.
> * A propriedade displayedLabel contém o valor final tratado para exibição do título.
> * Implementa OnDestroy para evitar vazamento de memória ao cancelar as assinaturas com takeUntil.

### Métodos
| Método          | Descrição                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------- |
| `ngOnInit()`    | Inicializa a lógica do rótulo exibido (`displayedLabel`) com base na tradução e formatação. |
| `setLabel()`    | Realiza a tradução do rótulo e aplica o limite de caracteres.                               |
| `getValue()`    | Getter que retorna o valor tratado com limite de caracteres.                                |
| `ngOnDestroy()` | Encerra as assinaturas RxJS para prevenir vazamentos de memória.                            |
