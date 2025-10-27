layout: default
title: ImportCsvComponent
permalink: /angular/ImportCsvComponent
css:

material-style.css

ImportCsvComponent
Descrição

O ImportCsvComponent é um componente Angular responsável por importar arquivos CSV para dentro de um SubForm.
Ele permite que o usuário:

Carregar um arquivo CSV (via arrastar e soltar ou seleção manual)

Visualizar uma prévia dos dados

Selecionar quais colunas serão importadas

Processar os dados convertendo automaticamente os tipos conforme a configuração JSON da classe (definida via IPageStructure)

O componente também possui mecanismos de validação que garantem que o CSV corresponda aos campos configurados no JSON, incluindo:

Verificação de colunas obrigatórias

Conversão de tipos de dados (boolean, number, date, datetime)

Se o CSV contiver uma coluna id, o sistema atualizará os registros correspondentes em vez de criar novos.

Interfaces
ImportCsvDialogData

Define os dados recebidos pelo diálogo de importação:

export interface ImportCsvDialogData {
  className: string;
  jsonConfig: IPageStructure;
}

ImportCsvResult

Estrutura retornada após o processo de importação:

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

Funcionalidades Principais

Upload de arquivo CSV (arrastar e soltar ou seleção manual)

Detecção automática de delimitador (;, ,, |, \t)

Detecção de encoding (UTF-8, UTF-16LE, etc.)

Visualização prévia dos dados

Seleção de colunas para importação

Conversão de tipos de valores conforme JSON de configuração

Validação de campos obrigatórios

Geração automática de template CSV

Suporte a atualização via coluna id

Tratamento de erros e feedback visual (barra de progresso, tooltips, mensagens de erro)

Conversão de Tipos
Tipo no JSON	Conversão no CSV	Exemplos de Valores Válidos
boolean	Reconhece valores como true, 1, sim, on, ativo	Sim, false, 0
number	Remove formatações e converte para número	1.500, 2000, 3,14
date	Converte formatos comuns para ISO	25/12/2024, 2024-12-25
datetime	Similar ao date, incluindo hora se presente	25/12/2024 14:30
string	Mantém valor original	Texto livre
Propriedades
Propriedade	Tipo	Descrição
importForm	FormGroup	Formulário reativo que define as configurações de importação
selectedFile	File | null	Arquivo CSV atualmente selecionado
previewData	any[][]	Prévia das primeiras linhas do arquivo
colsToImport	boolean[]	Define quais colunas serão importadas
classAttributesNames	string[]	Lista de atributos da classe (usada para gerar o template)
Métodos

onFileSelected() – Lida com o upload manual do arquivo CSV selecionado pelo usuário

onDrop() – Permite arrastar e soltar o arquivo CSV diretamente na interface

processFile() – Processa o conteúdo do arquivo e gera a prévia dos dados

parseCSVContent() – Analisa o conteúdo e detecta a estrutura e tipos das colunas

convertValueByType() – Converte os valores com base no tipo do campo configurado no JSON

validateForRequiredColumns() – Garante que o CSV contenha todos os campos obrigatórios definidos no JSON

downloadTemplate() – Gera automaticamente um modelo CSV com base na estrutura JSON configurada

onImport() – Finaliza o processo e retorna os dados processados ao chamador do diálogo

Exemplo de Uso

O componente é aberto via MatDialog a partir de outro componente Angular:

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

Observações

O componente valida automaticamente se o arquivo CSV é compatível com o SubForm antes de importar

É possível desmarcar colunas que não devem ser importadas

Caso o CSV contenha a coluna id, os registros existentes serão atualizados, não criados novamente

Colunas não reconhecidas ou com tipos incompatíveis são tratadas e exibidas com avisos visuais (tooltips)

Exemplo de Template CSV

O botão “Baixar Template” gera automaticamente um modelo CSV com base nas colunas do JSON configurado:

id,nome,preco,ativo
exemplo_id,exemplo_nome,exemplo_preco,exemplo_ativo

Dependências

@angular/forms

@angular/material

@angular/common

app/shared/models/pageStructure

