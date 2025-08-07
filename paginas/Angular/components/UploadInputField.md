---
layout: default
title: UploadInputField
permalink: /angular/UploadInputField
css:
  - material-style.css
---
## `UploadInputFieldComponent`

### Descrição

Componente de formulário para **seleção e upload de arquivos**, com suporte a validação de extensão, tamanho, visibilidade condicional e tradução automática do rótulo. Permite salvar arquivos via `FileService` e armazena o caminho no `FormControl`.

---

### Propriedades

| Propriedade             | Tipo                                  | Obrigatório | Descrição                                                             | Exemplo                            |
| ----------------------- | ------------------------------------- | ----------- | --------------------------------------------------------------------- | ---------------------------------- |
| `label`                 | `string`                              | Sim         | Rótulo do campo, utilizado para tradução e exibição.                  | `'documento'`                      |
| `selectItemsLimit`      | `number`                              | Não         | Limita a quantidade de arquivos que podem ser selecionados.           | `1`                                |
| `allowedExtensions`     | `string[]`                            | Não         | Lista de extensões de arquivos permitidas.                            | `['pdf', 'jpg', 'png']`            |
| `className`             | `string`                              | Sim         | Nome da classe usada para tradução do label.                          | `'Pessoa'`                         |
| `maxFileSize`           | `number`                              | Não         | Tamanho máximo permitido do arquivo (em bytes).                       | `1048576`                          |
| `conditionalVisibility` | `{ field: string, values: string[] }` | Não         | Define a visibilidade do campo com base em outro campo do formulário. | `{ field: 'tipo', values: ['1'] }` |
| `resourceForm`          | `FormGroup<any>`                      | Sim         | Formulário principal ao qual o campo pertence.                        | —                                  |

---

### Exemplo básico

```html
<app-upload-input-field
  [label]="'documento'"
  [className]="'Pessoa'"
  [allowedExtensions]="['pdf']"
  [maxFileSize]="2097152"
  [resourceForm]="form"
  [selectItemsLimit]="1"
>
</app-upload-input-field>
```

### Funcionalidades

- Upload de arquivo com validação de extensão e tamanho.
- Exibição de nome do arquivo selecionado.
- Tradução do rótulo baseada em className + label.
- Suporte a visibilidade condicional, ativando ou desativando o campo dinamicamente.
- Armazena o caminho do arquivo no formulário com FormControl<string>.

### Métodos principais

| Método                 | Descrição                                                                  |
| ---------------------- | -------------------------------------------------------------------------- |
| `ngOnInit()`           | Verifica a visibilidade condicional ao inicializar.                        |
| `ngAfterViewInit()`    | Define o rótulo traduzido e formatado.                                     |
| `checkConditional()`   | Ativa ou desativa o campo conforme o valor de outro campo do formulário.   |
| `onFileSelected()`     | Lida com o evento de seleção de arquivo, valida e salva via `FileService`. |
| `limitSelectedItems()` | Limita a quantidade de arquivos conforme `selectItemsLimit`.               |
| `setLabel()`           | Realiza a tradução ou formatação do label para exibição.                   |
| `setIconPosition()`    | Retorna a posição do ícone (`start` ou `end`).                             |

### Observações

> - O caminho do arquivo salvo é armazenado no inputValue: FormControl<string>.
> - O campo usa internamente o FileService para enviar o arquivo ao backend.
> - Mesmo que a limitação de múltiplos arquivos exista, este componente trabalha melhor com um único arquivo por vez.
> - O ícone padrão exibido é "upload", mas pode ser customizado no template.
