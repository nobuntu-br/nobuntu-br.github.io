# Catálogo de Componente: `VideoFieldComponent`

## Arquivos fontes
| Arquivo | Descrição |
|---------|-----------|
| `video-field.component.ts` | Componente principal (TypeScript) |
| `video-field.component.html` | Template HTML (botão, câmera, gravação, preview) |
| `video-field.component.scss` | Estilos SCSS (layout, responsividade, botões) |

## Manual de como usar codando

### 1. Usando dentro de um formulário reativo
```ts
import { FormBuilder, FormGroup } from '@angular/forms';
import { VideoFieldComponent } from 'caminho/do/componente';

this.form: FormGroup = this.fb.group({
  meuVideo: [null] // valor inicial
});
```

### 2. Template
```html
<app-video-field
  [className]="'MinhaClasse'"
  [label]="'Gravar Vídeo'"
  [isRequired]="true"
  [conditionalVisibility]="{ field: 'tipo', values: ['1','2'] }"
  [resourceForm]="form">
</app-video-field>
```

### 3. JSON
```json
{
  "name": "nome",
  "type": "video",
  "mask": "Video",
  "isRequired": true,
  "visibleCard": true,
  "visibleGrid": true,
  "visibleFilter": true,
  "visibleList": true,
  "visibleForm": true
}
```

## Estrutura e seções do componente
O componente VideoField contém:

- **Botão de captura**
  - `input-like-button` → abre a câmera para gravação
  - Label exibido com asterisco se obrigatório

- **Câmera**
  - `camera-container` → vídeo ao vivo
  - Botões:
    - `startRecording()` → iniciar gravação
    - `stopRecording()` → parar gravação
    - `toggleCamera()` → alternar entre câmeras frontal e traseira

- **Preview de vídeo**
  - Mostra vídeo gravado (`savedVideoUrl`)
  - Botões:
    - `saveVideo()` → salva vídeo local e envia para backend
    - `clearVideo()` → limpa vídeo gravado

- **FormControl**
  - `inputValue: FormControl` → mantém URL do vídeo gravado

- **Condicional de visibilidade**
  - Habilita/desabilita o campo baseado em outro campo do FormGroup

## Funcionalidades
- Gravação via **MediaRecorder**
- Alternância de câmeras
- Upload do vídeo via **FileService**
- Armazenamento temporário via **localStorage**
- Responsivo para dispositivos móveis

## Propriedades do componente
| Propriedade | Tipo | Descrição |
|-------------|------|-----------|
| `label` | string | Label exibido no botão |
| `isRequired` | boolean | Indica se o campo é obrigatório |
| `className` | string | Classe CSS do componente |
| `conditionalVisibility` | { field: string, values: string[] } | Condição de visibilidade baseada em outro campo |
| `resourceForm` | FormGroup | Formulário reativo associado |
| `inputValue` | FormControl | Valor do vídeo gravado (URL) |
| `isCameraOpen` | boolean | Indica se a câmera está aberta |
| `videoStream` | MediaStream \| null | Stream da câmera atual |
| `isFrontCamera` | boolean | Define se a câmera frontal está ativa |
| `mediaRecorder` | MediaRecorder \| null | Objeto para gravar vídeo |
| `recordedChunks` | Blob[] | Armazena os chunks da gravação |
| `savedVideoUrl` | SafeUrl \| null | URL sanitizada do vídeo gravado |
| `showVideoUrl` | boolean | Exibe ou não o vídeo gravado |
| `isVideoSaved` | boolean | Indica se o vídeo foi salvo |

## Ações principais / métodos
- `ngOnInit()` → inicializa condicional de visibilidade
- `checkConditional()` → habilita/desabilita input com base em outro campo
- `openCamera()` → abre a câmera
- `startCamera()` → inicia a captura do vídeo
- `startRecording()` → inicia gravação
- `stopRecording()` → para gravação e salva chunks
- `toggleCamera()` → alterna câmera frontal/traseira
- `saveVideo()` → salva vídeo localmente e envia para backend
- `clearVideo()` → limpa vídeo gravado
- `closeCamera()` → fecha a câmera
- `ngUnsubscribe` → cancela observables do formulário

## Observações importantes
- Suporta gravação e preview de vídeos diretamente no formulário
- Permite alternar câmeras e controlar gravação
- Botões e layout responsivos para desktop e mobile
- Integração com **FileService** para upload automático
- Condicional de visibilidade com observables do FormGroup
- Armazena temporariamente o vídeo no **localStorage**
- Estilo SCSS flexível com centralização e botões redondos
