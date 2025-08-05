---
layout: default
title: InputImageField
permalink: /angular/InputImageField
css:
  - material-style.css
---
## `InputImageFieldComponent`

### Descrição

Componente visual simples utilizado para exibir uma imagem com uma descrição (legenda). Pode ser usado em formulários, páginas informativas ou como parte de componentes mais complexos.

### Propriedades

| Propriedade        | Tipo     | Obrigatório | Descrição                              | Exemplo                       |
| ------------------ | -------- | ----------- | -------------------------------------- | ----------------------------- |
| `imagePath`        | `string` | Sim         | Caminho (URL) da imagem a ser exibida. | `"assets/images/exemplo.png"` |
| `imageDescription` | `string` | Não         | Texto descritivo ou legenda da imagem. | `"Logo da empresa"`           |

### Exemplo básico

```html
<app-input-image-field
  [imagePath]="'assets/images/logo.png'"
  [imageDescription]="'Logo institucional da empresa'"
>
</app-input-image-field>
```

### Observações

> - O componente espera que imagePath seja uma URL válida ou caminho relativo acessível pela aplicação.
> - A descrição é opcional e pode ser usada para acessibilidade (ex: alt tag) ou para exibir uma legenda visual.
> - Ideal para uso em formulários, pré-visualizações de imagem ou áreas descritivas de conteúdo.
