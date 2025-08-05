---
layout: default
title: Consulta
permalink: /angular/Consulta
css:
  - material-style.css
---

# `DefaultConsultaComponent`

### Descrição

Componente genérico de consulta que permite ao usuário preencher parâmetros em um formulário dinâmico, buscar dados em uma API, exibir os resultados em forma de cards e exportar os dados em `.xlsx` ou `.fro`. Ideal para construção de páginas de busca e relatórios reutilizáveis.

### Propriedades

| Propriedade  | Tipo                        | Obrigatório | Descrição                                                                   | Exemplo                                               |
| ------------ | --------------------------- | ----------- | --------------------------------------------------------------------------- | ----------------------------------------------------- |
| `name`       | `string`                    | Sim         | Nome da consulta (usado como identificador e no nome do arquivo exportado). | `"ConsultaYelum"`                                     |
| `descricao`  | `string`                    | Não         | Descrição textual da consulta.                                              | `"Consulta de clientes por faixa etária"`             |
| `apiUrl`     | `string`                    | Sim         | URL (sufixo) da API para realizar a consulta.                               | `"clientes/porIdade"`                                 |
| `parameters` | `IPageStructureAttribute[]` | Sim         | Parâmetros esperados pela API (estrutura do formulário).                    | `[ { name: 'idadeMin', type: 'number' } ]`            |
| `return`     | `IPageStructureAttribute[]` | Sim         | Campos esperados no retorno, usados na visualização e exportação.           | `[ { name: 'nome', fieldDisplayedInLabel: 'Nome' } ]` |

### Exemplo básico

```html
<app-default-consulta
  [name]="'ConsultaClientes'"
  [descricao]="'Consulta por faixa etária'"
  [apiUrl]="'clientes/porIdade'"
  [parameters]="params"
  [return]="retorno"
>
</app-default-consulta>
```

### Observações

> - Ao iniciar, abre um `MatDialog` com o componente `ConsultaFormComponent`, gerando dinamicamente os campos do formulário a partir de `parameters`.
> - Após o envio dos parâmetros válidos, os dados da API são buscados via `HttpClient` e renderizados dinamicamente como `DefaultCardComponent`.
> - O modo de visualização padrão é `"card"`.
> - Suporta exportação dos dados visualizados:
>   - `.fro`: formato especial para a consulta `"ConsultaYelum"`
>   - `.xlsx`: formato Excel padrão para as demais consultas

### Métodos

- `getParameters()` – Abre o diálogo de parâmetros.
- `getDataFromAPI(parameters, resourceForm)` – Realiza a chamada HTTP para buscar os dados.
- `getUrlWithParameters(parameters)` – Constrói a URL final de consulta com os parâmetros.
- `createItemsOnList(items)` – Cria dinamicamente os componentes DefaultCardComponent para cada item retornado.
- `removeAllComponentsOnView()` – Limpa os componentes criados anteriormente.
- `onNewButtonClick()` – Exporta os dados visualizados em `.xlsx` ou `.fro`, conforme o tipo de consulta.

### Exportação `.fro`

```plaintext

[2.0.3.2]
valor1;valor2;valor3
valor4;valor5;valor6
```

### Exportação .xlsx

Gera uma planilha com os rótulos definidos em `fieldDisplayedInLabel` ou os nomes dos campos como colunas.
