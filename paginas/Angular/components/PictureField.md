---
layout: default
title: PictureField
permalink: /angular/PictureField
css:
  - material-style.css
---

## `PictureFieldComponent`

### Descrição

Componente de campo personalizado para captura de imagem via câmera, exibição e upload. Estende o `BaseFieldComponent` e integra-se ao `FormGroup`. Permite condicionar a visibilidade do campo com base em outro campo do formulário. Após capturar a imagem, o componente realiza upload automático para o servidor usando `FileService`.

---

### Propriedades

| Propriedade             | Tipo                                  | Obrigatório | Descrição                                                         | Exemplo                            |
| ----------------------- | ------------------------------------- | ----------- | ----------------------------------------------------------------- | ---------------------------------- |
| `label`                 | `string`                              | Sim         | Rótulo do campo.                                                  | `'Foto do perfil'`                 |
| `isRequired`            | `boolean`                             | Não         | Define se o campo é obrigatório.                                  | `true`                             |
| `className`             | `string`                              | Sim         | Nome da classe do recurso ao qual o campo pertence.               | `'Usuario'`                        |
| `conditionalVisibility` | `{ field: string, values: string[] }` | Não         | Define visibilidade condicional com base no valor de outro campo. | `{ field: 'tipo', values: ['F'] }` |
| `resourceForm`          | `FormGroup<any>`                      | Sim         | Formulário reativo principal onde o campo está inserido.          | `formGroup`                        |

---

### Exemplo básico

```html
<app-picture-field
  [label]="'Foto'"
  [isRequired]="true"
  [className]="'Usuario'"
  [resourceForm]="form"
  [conditionalVisibility]="{ field: 'tipo', values: ['F'] }"
>
</app-picture-field>
```

### Funcionalidades

- Abertura da câmera usando getUserMedia().
- Captura de imagem como data:image/png;base64,....
- Upload automático da imagem para o servidor via FileService.
- Armazenamento temporário no localStorage.
- Suporte à troca entre câmera frontal e traseira (mobile).
- Visualização da imagem capturada.
- Visibilidade condicional com base em outro campo.
- Botão de limpar imagem.

Métodos
| Método | Descrição |
| -------------------- | ------------------------------------------------------------------------------ |
| `ngOnInit()` | Inicializa a visibilidade condicional. |
| `checkConditional()` | Aplica e observa regras de visibilidade com base em outro campo do formulário. |
| `openCamera()` | Abre a câmera e inicia o stream de vídeo. |
| `startCamera()` | Solicita permissão da câmera e conecta o stream ao elemento `<video>`. |
| `captureImage()` | Captura um frame do vídeo como imagem. |
| `saveImage()` | Salva a imagem capturada, converte em `File`, e envia via `FileService`. |
| `closeCamera()` | Encerra o stream da câmera. |
| `clearImage()` | Limpa a imagem capturada e oculta a visualização. |
| `toggleCamera()` | Alterna entre câmera frontal e traseira (mobile). |

### Observações

> - Para funcionar corretamente, o componente requer permissão de acesso à câmera.
> - Utiliza ViewChild para manipular diretamente o <video> da câmera.
> - Após o upload, o campo é limpo para evitar reenvio acidental.
> - Recomendado para uso em ambientes com suporte a navegador moderno (Chrome, Edge, Firefox).
> - A captura é feita em canvas para gerar a imagem em base64 antes da conversão para File.
