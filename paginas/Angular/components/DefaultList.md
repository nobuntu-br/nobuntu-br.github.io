# Catálogo de Componente: `DefaultListComponent`

## Nome do Componente
- **Português:** Lista Padrão  
- **Inglês:** Default List

## Arquivos Fonte
| Arquivo | Descrição |
|----------|-----------|
| `default-list.component.ts` | Lógica principal do componente |
| `default-list.component.html` | Template do componente |
| `default-list.component.scss` | Estilos do componente |

### Dependências Importantes
- **SelectableCardComponent** → itens selecionáveis em layout de cards  
- **SelectableListItemComponent** → itens selecionáveis em layout de lista  
- **DefaultCardComponent** → itens não selecionáveis  
- **DinamicBaseResourceFormComponent** → abertura de formulário de criação/edição  
- **ConfirmationDialogComponent** → confirmação de exclusão  
- **SearchInputFieldComponent** → filtros de pesquisa  
- **ViewModeSelectorComponent** → alternância entre modos de exibição (cards/list)  
- **MatPaginator** → paginação  
- **Serviços:** HttpClient, TranslocoService, TitleService, FilterService, ViewToggleService

---

## Uso do Componente via Código
```html
<default-list
  [itemsDisplayed]="items"
  [columnsQuantity]="3"
  [fields]="fields"
  [displayedfieldsName]="['nome', 'idade']"
  [fieldsType]="['string', 'number']"
  [objectDisplayedValue]="['']"
  [userConfig]="userConfig"
  [selectedItemsLimit]="5"
  [apiUrl]="'api/usuarios'"
  [searchableFields]="searchableFields"
  [isSelectable]="true"
  [className]="'Usuario'"
  [isAbleToCreate]="true"
  [isAbleToEdit]="true"
  [isAbleToDelete]="true"
  [dataToCreatePage]="pageStructure"
  [useFormOnDialog]="true"
  [isEnabledToGetDataFromAPI]="true"
  (eventSelectedValues)="handleSelectedItems($event)">
</default-list>
```

---

## Uso do Componente via Mapa (JSON Config)
Você pode passar as propriedades como um JSON que siga a interface **IDefaultListComponentDialogConfig**:

```json
{
  "itemsDisplayed": [],
  "columnsQuantity": 3,
  "fields": [],
  "displayedfieldsName": ["nome", "idade"],
  "fieldsType": ["string", "number"],
  "objectDisplayedValue": [""],
  "userConfig": {},
  "selectedItemsLimit": 5,
  "apiUrl": "api/usuarios",
  "searchableFields": [{ "fieldName": "nome", "fieldType": "string" }],
  "isSelectable": true,
  "className": "Usuario",
  "isAbleToCreate": true,
  "isAbleToEdit": true,
  "isAbleToDelete": true,
  "dataToCreatePage": "pageStructure",
  "useFormOnDialog": true,
  "isEnabledToGetDataFromAPI": true
}
```

---

## Principais Propriedades do Componente
| Propriedade | Tipo | Descrição |
|--------------|------|-----------|
| `itemsDisplayed` | any[] | Itens que serão apresentados na lista |
| `columnsQuantity` | number | Quantidade de colunas no layout de cards |
| `fields` | IFieldProperty[] | Campos da entidade para exibição e filtro |
| `displayedfieldsName` | string[] | Campos a serem exibidos |
| `fieldsType` | string[] | Tipos dos campos |
| `objectDisplayedValue` | string[] | Caso o campo seja um objeto, o valor que será exibido |
| `userConfig` | any | Configuração personalizada do usuário |
| `selectedItemsLimit` | number | Limite de itens selecionáveis |
| `apiUrl` | string | Endpoint da API para busca de dados |
| `searchableFields` | ISearchableField[] \| null | Campos pesquisáveis |
| `isSelectable` | boolean | Se a lista permite seleção de itens |
| `className` | string | Nome da entidade da lista |
| `isAbleToCreate` | boolean | Permite criar novos itens |
| `isAbleToEdit` | boolean | Permite editar itens |
| `isAbleToDelete` | boolean | Permite deletar itens |
| `dataToCreatePage` | IPageStructure | Estrutura da página/formulário para criação/edição |
| `useFormOnDialog` | boolean | Se o formulário abre em dialog |
| `isEnabledToGetDataFromAPI` | boolean | Se os dados devem ser buscados da API |
| `maxDisplayedItems` | number | Número máximo de itens exibidos |
| `title` | ITitle | Título com traduções para o componente |

---

## Eventos Disponíveis
| Evento | Tipo | Descrição |
|--------|------|-----------|
| `eventSelectedValues` | EventEmitter<any[]> | Emite os itens selecionados |
| `removeAllComponentsOnViewFunction` | função | Remove todos os itens renderizados |
| `returnedItemsToCreate` | função | Retorna itens filtrados ou buscados para criar os cards |
| `returnFetchParameters` | função | Retorna parâmetros de busca do filtro |
| `sortOrderChanged` | função | Retorna os parâmetros de ordenação |
| `clearSearchInputEvent` | função | Limpa o filtro de busca |

---

## Funcionalidades Principais
- Renderização dinâmica de **cards** ou **lista** baseada em *viewMode*  
- Seleção de múltiplos itens, com limite configurável  
- Busca e filtro com integração à API via parâmetros customizados  
- Ordenação de itens (sort), incluindo envio de parâmetros para API  
- Paginação usando **MatPaginator**  
- **CRUD completo:**  
  - Criação (`createItem` / dialog ou rota)  
  - Edição (`editItem` / dialog ou rota)  
  - Exclusão (`deleteSelectedItens`) com confirmação  
- Exportação de dados para **CSV** ou **XLSX**  
- Compatível com **MatDialog** para seleção de itens e formulários
