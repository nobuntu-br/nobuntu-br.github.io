---
layout: default
title: Avalicao
permalink: /angular/BaseField
css:
  - material-style.css
---

# `BaseFieldComponent`

### Descrição

Classe base abstrata para componentes de formulário. Fornece funcionalidades reutilizáveis como tradução com o Transloco e controle de limite de caracteres para campos de texto.

### Propriedades

| Propriedade        | Tipo               | Obrigatório | Descrição                                                         | Exemplo                                |
| ------------------ | ------------------ | ----------- | ----------------------------------------------------------------- | -------------------------------------- |
| `translocoService` | `TranslocoService` | Sim         | Serviço de internacionalização utilizado para tradução de textos. | `this.translocoService.translate(...)` |

### Métodos

- `setTranslation(className: string, value: string): Observable<string>` Retorna um observable com a tradução de um valor baseado na chave.
- `setCharactersLimit(value: string, charactersLimit: number = 40): string` Aplica limite de caracteres a um valor string, truncando e adicionando reticências se necessário.
- `formatDefaultVariableName(variableName: string): string` Formata uma variável camelCase para um nome amigável com espaços.

###Exemplo básico

```ts
this.setCharactersLimit('texto muito longo para ser exibido', 20);
// Retorna: "texto muito longo p..."
```

### Observações

> - Esta classe deve ser estendida por outros componentes de campo (extends `BaseFieldComponent`).
> - Útil para padronizar traduções e formatações de texto nos campos.

---

# `BaseUpoadFieldComponent`

### Descrição

Classe base abstrata estendida de `BaseFieldComponent` que fornece funcionalidades relacionadas a upload de arquivos, como conversão para base64, validação de tamanho/extensão e envio via `FileService`.

### Propriedades

| Propriedade   | Tipo          | Obrigatório | Descrição                              | Exemplo                      |
| ------------- | ------------- | ----------- | -------------------------------------- | ---------------------------- |
| `fileService` | `FileService` | Sim         | Serviço de upload de arquivos.         | `this.fileService.upload()`  |
| `matSnackBar` | `MatSnackBar` | Sim         | Componente para exibição de mensagens. | `this.matSnackBar.open(...)` |

### Métodos

- `saveFile(file: File | File[], maxFileSize: number, allowedExtensions?: string[]): Promise<string>`
  Valida e envia arquivos. Suporta múltiplos arquivos e verifica tamanho e extensão.
  saveUploadFile(file: IFieldFile): Promise<string>
  Realiza o envio do arquivo para o backend.

- `fileToFieldFile(file: File): Promise<IFieldFile>`
  Converte um único arquivo em formato `IFieldFile`.

- `filesToFieldFiles(files: File[]): Promise<IFieldFile>`
  Converte múltiplos arquivos em um único `IFieldFile`.

- `fileToBase64(file: File): Promise<string>
Converte arquivo para base64.
`
- `dataURItoBlob(dataURI: string): Blob`
  Converte string base64 em objeto Blob.

### Exemplo básico

```ts
await this.saveFile(meuArquivo, 10_000_000, ['pdf', 'jpg']);
```

### Observações

> - O método `saveFile` mostra mensagens de erro automaticamente via `MatSnackBar` em caso de falha na extensão ou tamanho.
>
> - Os arquivos enviados são encapsulados em objetos do tipo `IFieldFile`.
