
# Catálogo de Componente: `ImportCsvComponent`

## Nome do Componente
- `ImportCsvComponent`

## Nome em Inglês
- `ImportCsvComponent`

## Arquivos Fontes
| Arquivo | Descrição |
|----------|------------|
| `import-csv.component.ts` | Componente principal |
| `import-csv.component.html` | Template HTML completo (diálogo de importação, upload, preview, erros) |
| `import-csv.component.scss` | Estilos SCSS detalhados com responsividade, animações e cores por tipo de coluna |

---

## Manual de Como Usar (Codando)

### 1. Abrindo o Diálogo

```ts
import { MatDialog } from '@angular/material/dialog';
import { ImportCsvComponent, ImportCsvDialogData } from 'caminho/do/componente';

const dialogRef = this.dialog.open(ImportCsvComponent, {
  width: '800px',
  data: {
    className: 'NomeDaClasse',
    jsonConfig: jsonConfigDaClasse
  } as ImportCsvDialogData
});

dialogRef.afterClosed().subscribe((result) => {
  if (result) {
    console.log('Dados importados:', result.data);
    console.log('Configurações:', result.settings);
  }
});
```

---



## Estrutura e Seções do Componente

O diálogo de importação contém as seguintes **seções visuais**, todas com SCSS detalhado:

1. **Cabeçalho do Diálogo**
   - `.dialog-title` → Ícone (`upload_file`) + título
   - Cor principal: `#1976d2`

2. **Área de Upload**
   - `.upload-section > .upload-card > .upload-area`
   - Suporta **Drag & Drop** com animação
   - Exibe arquivo selecionado com nome e tamanho
   - Botão para remover arquivo (`mat-icon-button`)

3. **Configurações de Importação**
   - `.import-settings`
   - Campos:
     - Separador (`delimiter`)
     - Codificação (`encoding`)
     - Checkboxes: cabeçalho, ignorar linhas/colunas vazias

4. **Preview de Dados**
   - `.preview-section`
   - Tabela (`.preview-table`) com colunas dinâmicas
   - Tipo de coluna destacado (`string`, `number`, `boolean`, `date`) com cores
   - Colunas selecionáveis via checkbox
   - Valores inválidos destacados (`.invalid-value`)
   - Informações de total de registros e linhas exibidas

5. **Mensagens de Erro**
   - `.error-section > .error-card`
   - Ícone de erro + texto

6. **Progress Bar**
   - `.progress-section` → Barra de progresso indeterminada e texto de processamento

7. **Ações**
   - `.dialog-actions`
   - Botões: Cancelar, Baixar Modelo, Importar
   - Responsivo para telas menores (100% largura)

8. **Responsividade**
   - Ajustes para telas <= 768px
   - Colunas e botões se reorganizam verticalmente

---

## Propriedades do Componente

### Via Código (TypeScript)
| Propriedade | Tipo | Descrição |
|--------------|------|------------|
| `data` | `ImportCsvDialogData` | Contém `className` e `jsonConfig` |
| `importForm` | `FormGroup` | Formulário com campos `delimiter`, `encoding`, `hasHeader`, `skipEmptyLines`, `skipEmptyColumns` |
| `selectedFile` | `File \| null` | Arquivo CSV selecionado |
| `previewData` | `any[][]` | Dados de pré-visualização |
| `colsToImport` | `boolean[]` | Colunas marcadas para importação |
| `displayedColumns` | `string[]` | Cabeçalhos das colunas |
| `columnTypes` | `string[]` | Tipos de dados detectados |
| `totalRows` | `number` | Total de linhas no arquivo |
| `classAttributesNames` | `string[]` | Nomes dos atributos esperados da classe |
| `isProcessing` | `boolean` | Indica se o processo de importação está em andamento |
| `errorMessage` | `string` | Mensagem de erro exibida na interface |

---

## Ações Principais / Métodos

| Método | Descrição |
|--------|------------|
| `onFileSelected(event)` | Captura arquivo selecionado pelo input |
| `onDragOver/Leave/Drop` | Gerencia eventos de drag & drop |
| `removeFile()` | Remove arquivo carregado |
| `downloadTemplate()` | Gera e baixa modelo CSV |
| `onImport()` | Inicia processo de importação |
| `toggleColuna(index)` | Seleciona/deseleciona coluna |
| `getColumnTypeInfo(index)` | Retorna informações do tipo da coluna |
| `getColumnTypeClass(index)` | Retorna classe CSS baseada no tipo |
| `getTypeIcon(index)` | Ícone de tipo (string, number, boolean, date) |
| `isValidValueForColumn(value, index)` | Valida valor conforme tipo da coluna |
| `convertValueByType()` | Converte valores conforme tipo detectado |
| `convertToBoolean()` | Converte strings/valores para boolean |
| `convertToNumber()` | Converte strings para número |
| `convertToDate()` | Converte strings para `Date` |

---

## Observações Importantes

- Inclui **HTML e SCSS completos**, detalhando layout e comportamento visual  
- Tipos de coluna (`string`, `number`, `boolean`, `date`) possuem cores distintas e ícones  
- Preview de dados com validação inline e tooltips de erro  
- Responsividade para dispositivos móveis  
- Área de upload com **drag & drop** e feedback visual  
