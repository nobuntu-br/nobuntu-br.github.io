
# Catálogo de Componente: `CheckboxFieldComponent`

## Arquivos Fontes
| Arquivo | Descrição |
|----------|------------|
| `checkbox-field.component.ts` | Componente principal (TypeScript) |
| `checkbox-field.component.html` | Template HTML (`mat-checkbox`) |
| `checkbox-field.component.scss` | Estilos SCSS (centralização e ajustes visuais) |

---

## Manual de Como Usar (Codando)

### 1. Usando dentro de um formulário reativo

```ts
import { FormBuilder, FormGroup } from '@angular/forms';
import { CheckboxFieldComponent } from 'caminho/do/componente';

this.form: FormGroup = this.fb.group({
  aceitaTermos: [false] // valor inicial
});
```

### 2. Template

```html
<app-checkbox-field
  [className]="'MinhaClasse'"
  [label]="'Aceita os Termos?'"
  [isRequired]="true"
  [defaultValue]="true"
  [conditionalVisibility]="{ field: 'tipo', values: ['1','2'] }"
  [resourceForm]="form">
</app-checkbox-field>
```

---

## Estrutura e Seções do Componente

O componente checkbox contém:

- **FormControl interno**
  - `inputValue: FormControl<boolean>` → mantém o valor do checkbox
  - Inicializa com `defaultValue` ou `false`
- **Label**
  - `displayedLabel` → label exibido com tradução (Transloco) e limite de caracteres (`charactersLimit`)
  - Renderizado dentro do `<mat-checkbox>`
- **Visibilidade condicional**
  - Habilita/desabilita checkbox baseado em outro campo do `FormGroup`
  - Observa alterações do formulário via `valueChanges`
- **Eventos**
  - `onChange(event)` → captura mudanças no checkbox
- **Estilos**
  - Centraliza checkbox horizontal e verticalmente no host
  - Remove margens padrão do `mat-checkbox`

---

## Propriedades do Componente

| Propriedade | Tipo | Descrição |
|--------------|------|------------|
| `className` | string | Nome da classe do campo |
| `label` | string | Label do checkbox |
| `isRequired` | boolean | Indica se o campo é obrigatório |
| `charactersLimit` | number | Limite de caracteres no label |
| `defaultValue` | boolean | Valor inicial do checkbox |
| `conditionalVisibility` | `{ field: string, values: string[] }` | Define se o campo deve ser habilitado ou desabilitado |
| `resourceForm` | FormGroup | Formulário reativo ao qual pertence |
| `displayedLabel` | string | Label final exibido após tradução e formatação |
| `inputValue` | `FormControl<boolean>` | Valor atual do checkbox |

---

## Ações Principais / Métodos

| Método | Descrição |
|--------|------------|
| `ngOnInit()` | Inicializa valor padrão, label e condicional |
| `ngOnDestroy()` | Cancela subscriptions |
| `getDefaultValue()` | Define valor inicial do checkbox |
| `setLabel()` | Traduz e aplica limite de caracteres no label |
| `checkConditional()` | Habilita/desabilita baseado em outro campo |
| `onChange(event)` | Atualiza valor do checkbox |

---

## Observações Importantes

- Suporta tradução dinâmica de labels  
- Pode ser usado em formulários reativos (`FormGroup` / `FormControl`)  
- Permite condição de visibilidade baseada em outro campo  
- Estilo SCSS centraliza o checkbox e remove margens padrões do `mat-checkbox`  
- Valor inicial pode ser `true` ou `false` via `defaultValue`  
