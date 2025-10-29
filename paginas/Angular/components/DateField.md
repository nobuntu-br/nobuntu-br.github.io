
# Catálogo de Componente: `DateFieldComponent`

## Arquivos Fontes
| Arquivo | Descrição |
|----------|------------|
| `date-field.component.ts` | Lógica principal do componente (tradução, formatação e ciclo de vida). |
| `date-field.component.html` | Template HTML simples que exibe o rótulo e o valor formatado. |
| `date-field.component.scss` | Não presente. |

---

## Descrição

O componente **`DateFieldComponent`** é um campo de exibição de datas formatadas, que obtém o rótulo (label) a partir de traduções dinâmicas via `BaseFieldComponent`.  
Ele permite definir **máscara de formatação**, **limite de caracteres do rótulo**, e é ideal para exibir datas em modo somente leitura (visualização).

---

## Manual de Como Usar (Codando)

### Exemplo básico em template Angular

```html
<app-date-field
  [className]="'Product'"
  [label]="'createdAt'"
  [value]="produto.dataCriacao"
  [format]="'dd/MM/yyyy'">
</app-date-field>
```

### Exemplo com limite de caracteres no label

```html
<app-date-field
  [className]="'User'"
  [label]="'registrationDate'"
  [value]="usuario.dataCadastro"
  [charactersLimit]="15"
  [format]="'dd/MM/yyyy HH:mm'">
</app-date-field>
```

---

## Estrutura Interna

### Template HTML (`date-field.component.html`)
```html
<p style="width: 100%; margin: auto;">
  <strong>{{ displayedLabel }}: </strong>{{ value | date:format }}
</p>
```

### Lógica Principal (`date-field.component.ts`)
Utiliza `BaseFieldComponent` para herdar:

- Função de tradução dinâmica (`setTranslation`)
- Formatação de nome (`formatDefaultVariableName`)
- Limitação de caracteres (`setCharactersLimit`)
- Observa o ciclo de vida com `OnInit` e `OnDestroy`
- Traduz e exibe o label automaticamente com base em `className` e `label`

---

## Propriedades do Componente

| Propriedade | Tipo | Descrição | Exemplo / Valor padrão |
|--------------|------|------------|--------------------------|
| `className` | string | Nome da classe ou entidade associada. | `"Product"` |
| `label` | string | Nome do campo de data a ser exibido. | `"createdAt"` |
| `value` | Date | Valor de data a ser apresentado. | `new Date()` |
| `format` | string | Máscara de formatação Angular DatePipe. | `"dd-MM-YY"` (padrão) |
| `charactersLimit` | number | Limite de caracteres no rótulo traduzido. | `25` (padrão) |
| `displayedLabel` | string | Label exibido após tradução e formatação. | `"Data de Criação"` |

---

## Métodos Internos

| Método | Descrição |
|--------|------------|
| `ngOnInit()` | Inicializa o componente e define o label formatado. |
| `setLabel()` | Obtém a tradução e formata o texto de exibição. |
| `ngOnDestroy()` | Libera os observadores e encerra o Subject. |

---

## Como Usar no Mapa (JSON)

```json
{
  "name": "dataCriacao",
  "type": "date",
  "mask": "Data",
  "isRequired": false,
  "visibleCard": true,
  "visibleGrid": true,
  "visibleFilter": true,
  "visibleList": true,
  "visibleForm": true
}
```

⚙️ **Observação:**  
Certifique-se de que o tipo `"date"` esteja mapeado no gerador de formulários (`FormGeneratorService`) para usar o componente `DateFieldComponent`.

---

## Observações Importantes

- Usa o Angular DatePipe para formatação, respeitando o locale da aplicação.  
- Ideal para campos somente leitura de data/hora (visualização de registros).  
- Pode ser facilmente expandido para incluir um MatDatepicker se desejar torná-lo editável.  
- Suporte a tradução automática de labels via Transloco (ou serviço equivalente do BaseFieldComponent).  
