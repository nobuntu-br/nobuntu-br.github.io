# ImportCsvComponent

## Descrição

O **ImportCsvComponent** é um componente Angular responsável por **importar arquivos CSV** para dentro de um **SubForm**.  
Ele oferece uma interface intuitiva para carregar, visualizar e processar arquivos CSV, garantindo compatibilidade total com a estrutura configurada via `IPageStructure`.

---

## Funcionalidades Principais

- Upload de arquivo CSV (arrastar e soltar ou seleção manual)  
- Detecção automática de delimitador (`;`, `,`, `|`, `\t`)  
- Detecção automática de encoding (UTF-8, UTF-16LE, etc.)  
- Visualização prévia das primeiras linhas  
- Seleção de colunas que serão importadas  
- Conversão automática de tipos conforme JSON de configuração  
- Validação de campos obrigatórios  
- Geração automática de **template CSV**  
- Atualização de registros existentes via coluna `id`  
- Tratamento de erros e feedback visual (mensagens, tooltips e barra de progresso)

---

## Conversão de Tipos

| Tipo no JSON | Conversão no CSV | Exemplos de Valores Válidos |
|---------------|------------------|------------------------------|
| **boolean**   | Reconhece valores como `true`, `1`, `sim`, `on`, `ativo` | `Sim`, `false`, `0` |
| **number**    | Remove formatações e converte para número | `1.500`, `2000`, `3,14` |
| **date**      | Converte formatos comuns para ISO | `25/12/2024`, `2024-12-25` |
| **datetime**  | Similar ao date, incluindo hora se presente | `25/12/2024 14:30` |
| **string**    | Mantém valor original | `Texto livre` |

---

## Interfaces

### `ImportCsvResult`

Estrutura retornada após o processo de importação:

```ts
export interface ImportCsvResult {
  data: any[];
  settings: {
    delimiter: string;
    encoding: string;
    hasHeader: boolean;
    skipEmptyLines: boolean;
    skipEmptyColumns: boolean;
  };
}
```

---

## Propriedades

| Propriedade | Tipo | Descrição |
|--------------|------|------------|
| **importForm** | `FormGroup` | Formulário reativo que define as configurações de importação |
| **selectedFile** | `File \| null` | Arquivo CSV atualmente selecionado |
| **previewData** | `any[][]` | Prévia das primeiras linhas do arquivo |
| **colsToImport** | `boolean[]` | Define quais colunas serão importadas |
| **classAttributesNames** | `string[]` | Lista de atributos da classe (usada para gerar o template) |

---

## Métodos

| Método | Descrição |
|---------|------------|
| **onFileSelected()** | Lida com o upload manual do arquivo CSV selecionado pelo usuário |
| **onDrop()** | Permite arrastar e soltar o arquivo CSV diretamente na interface |
| **processFile()** | Processa o conteúdo do arquivo e gera a prévia dos dados |
| **parseCSVContent()** | Analisa o conteúdo e detecta a estrutura e tipos das colunas |
| **convertValueByType()** | Converte os valores com base no tipo do campo configurado no JSON |
| **validateForRequiredColumns()** | Garante que o CSV contenha todos os campos obrigatórios definidos no JSON |
| **downloadTemplate()** | Gera automaticamente um modelo CSV com base na estrutura JSON configurada |
| **onImport()** | Finaliza o processo e retorna os dados processados ao chamador do diálogo |

---

## Exemplo de Uso

```ts
const dialogRef = this.dialog.open(ImportCsvComponent, {
  data: {
    className: 'Produto',
    jsonConfig: this.pageStructure
  }
});

dialogRef.afterClosed().subscribe((result: ImportCsvResult | undefined) => {
  if (result) {
    console.log('Dados importados:', result.data);
  }
});
```

---

## Observações

- O componente valida automaticamente se o arquivo CSV é compatível com o **SubForm** antes de importar.  
- É possível **desmarcar colunas** que não devem ser importadas.  
- Caso o CSV contenha a coluna `id`, os registros existentes serão **atualizados**, e não criados novamente.  
- Colunas não reconhecidas ou com tipos incompatíveis são tratadas e exibidas com **avisos visuais (tooltips)**.

---

## Exemplo de Template CSV

```csv
id,nome,preco,ativo
exemplo_id,exemplo_nome,exemplo_preco,exemplo_ativo
```

---

## Dependências

- `@angular/forms`  
- `@angular/material`  
- `@angular/common`  
- `app/shared/models/pageStructure`

---

## Estrutura de Pastas Recomendada

```
src/
├── app/
│   ├── shared/
│   │   ├── components/
│   │   │   ├── import-csv/
│   │   │   │   ├── import-csv.component.ts
│   │   │   │   ├── import-csv.component.html
│   │   │   │   ├── import-csv.component.scss
│   │   │   │   └── import-csv.component.spec.ts
│   │   └── models/
│   │       └── pageStructure.ts
```

---

## Autor / Responsável Técnico

**Componente:** `ImportCsvComponent`  
**Desenvolvido por:** Equipe de Desenvolvimento Angular  
**Última atualização:** Outubro de 2025

---

> *Este componente foi desenvolvido para simplificar o processo de importação de dados em SubForms, garantindo robustez, validação e flexibilidade para diferentes formatos de CSV.*
