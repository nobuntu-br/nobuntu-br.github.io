---
layout: default
title: Avalicao
permalink: /angular/Graphic
css:
  - material-style.css
---

## `SearchInputFieldComponent`

### Descrição

Componente de campo de busca com filtro dinâmico. Permite realizar buscas por múltiplos campos (`searchableFields`) em uma API REST. Realiza chamadas automáticas à API com debounce, e pode abrir um diálogo com filtros avançados. Suporta eventos para limpar resultados e retornar os itens filtrados.

---

### Propriedades

| Propriedade                      | Tipo                          | Obrigatório | Descrição                                                                 | Exemplo                                          |
|----------------------------------|-------------------------------|-------------|---------------------------------------------------------------------------|--------------------------------------------------|
| `displayedfieldsName`           | `string[] \| null`            | Sim         | Campos que serão exibidos no filtro personalizado.                        | `['nome', 'idade']`                             |
| `fieldsType`                    | `string[]`                    | Sim         | Tipos dos campos (ex: `string`, `number`). Deve corresponder a `displayedfieldsName`. | `['string', 'number']`                         |
| `apiUrl`                        | `string`                      | Sim         | Endpoint da API que será consultada.                                      | `'api/carros'`                                  |
| `searchableFields`             | `ISearchableField[] \| null`  | Não         | Campos que serão utilizados como base para a busca no campo de texto.     | `[ { name: 'marca', type: 'string' } ]`         |
| `removeAllComponentsOnViewFunction` | `EventEmitter<any>`      | Sim         | Evento emitido para limpar os componentes visuais atuais.                 |                                                  |
| `returnedItemsToCreate`        | `EventEmitter<any>`           | Sim         | Evento emitido com os itens retornados da API após busca.                |                                                  |

---

### Interface `ISearchableField`

```ts
interface ISearchableField {
  name: string; // Nome do campo
  type: string; // Tipo do campo
}
Exemplo básico
html
Copiar
Editar
<search-input-field
  [displayedfieldsName]="['nome', 'idade']"
  [fieldsType]="['string', 'number']"
  [apiUrl]="'api/pessoas'"
  [searchableFields]="[{ name: 'nome', type: 'string' }]"
  (removeAllComponentsOnViewFunction)="limparResultados()"
  (returnedItemsToCreate)="receberResultados($event)">
</search-input-field>
Funcionalidades
Realiza busca automática com debounce de 1 segundo.

Emite resultados através do EventEmitter.

Possui filtro avançado via modal (BaseResourceFilterComponent).

Busca múltiplos termos em múltiplos campos com operadores OR.

Suporte a limpeza do campo de busca e reset da lista.

Cancelamento automático de observáveis com takeUntil.

Métodos
| Método                                                 | Descrição                                                                       |
| ------------------------------------------------------ | ------------------------------------------------------------------------------- |
| `ngAfterViewInit()`                                    | Inicia a escuta de alterações no input de busca.                                |
| `searchOnAPIEachInputFieldValueChanges()`              | Inscreve o campo com debounce e realiza chamadas à API conforme digitação.      |
| `search()`                                             | Realiza busca por campos definidos com o termo digitado.                        |
| `createSeachParameters()`                              | Cria o objeto de filtro com operadores `contains` e `or` para múltiplos campos. |
| `splitStringIntoArray()`                               | Divide o termo digitado em palavras, ignorando espaços extras.                  |
| `clearSearchInput()`                                   | Limpa o campo e emite a lista completa novamente.                               |
| `openFilter()`                                         | Abre diálogo com o componente de filtro com base nos campos definidos.          |
| `searchFindCustom()`                                   | Realiza busca com parâmetros personalizados vindos do diálogo de filtro.        |
| `requestAllValuesFromAPI()`                            | Obtém todos os registros da API.                                                |
| `requestValuesFromAPIWithSearchParametersFromFilter()` | Envia requisição `POST` com parâmetros de filtro customizado.                   |
| `ngOnDestroy()`                                        | Finaliza as assinaturas reativas para evitar vazamentos de memória.             |

Observações
O campo de busca é reativo e funciona com FormControl.

O filtro personalizado usa MatDialog e permite buscas avançadas.

Requisições são feitas com HttpClient, utilizando os métodos GET (lista completa) e POST (filtro).

Ideal para listas com grande volume de dados, onde a busca deve ser feita via API.

