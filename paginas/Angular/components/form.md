---
layout: default
title: Forms
permalink: /angular/forms
css:
  - material-style.css
---
## `GeneratedSimpleFormComponent`

### Descrição

O `GeneratedSimpleFormComponent` é um componente Angular responsável por gerar dinamicamente um formulário simples com base em uma estrutura de dados (`IPageStructure`). Ele utiliza um serviço gerador de componentes para criar os campos do formulário conforme a configuração recebida, facilitando a criação de formulários dinâmicos e reutilizáveis.

### Propriedades

| Propriedade   |  Tipo      | Obrigatório| Descrição | Exemplo|
| ------------- | ---------- | ---------- | --------- | ------ |
| `resourceForm`| `FormGroup`| Sim        | Formulário reativo onde os dados dos campos serão armazenados. | `new FormGroup({})`|
| `dataToCreatePage` | `IPageStructure`        | Sim         | Estrutura de dados que define os campos e configurações do formulário. | -                                     |
| `className`        | `string`                | Sim         | Nome da classe/modelo ao qual o formulário pertence.                   | `"Exemplo"`                           |
| `formIsReady`      | `EventEmitter<boolean>` | Não         | Evento emitido quando o formulário termina de ser gerado.              | `false` (emitido ao finalizar render) |

### Exemplo básico

```ts
meuFormGroup = this.fb.group({});
meuObjetoDeEstrutura: IPageStructure = {
  config: {
    modified: new Date(),
    description: 'Formulário de exemplo',
    name: 'Exemplo',
    limiteOfChars: 100,
    apiUrl: '/api/exemplo',
    route: '/exemplo',
    title: { pt: 'Exemplo', en: 'Example' },
    localStorage: false,
    filter: true,
    searchableFields: [{ name: 'nome', type: 'text' }],
    steps: [],
    addNew: true,
    edit: true,
    columnsQuantity: 1,
    delete: true,
    isFormStepper: false,
    isLinearFormStepper: false,
  },
  attributes: [
    {
      name: 'nome',
      type: 'text',
      limiteOfChars: 50,
      isRequired: true,
      className: 'Exemplo',
      many: false,
      apiUrl: '',
      fieldDisplayedInLabel: 'nome',
      visibleCard: true,
      visibleGrid: true,
      visibleFilter: true,
      visibleList: true,
      forageinKey: '',
      lookup: false,
      viewDetails: false,
      searchable: [],
      addNew: true,
      properties: [],
      visibleForm: true,
      formTab: '',
      defaultValue: '',
    },
  ],
};
```

```html
<generated-simple-form
  [resourceForm]="meuFormGroup"
  [dataToCreatePage]="meuObjetoDeEstrutura"
  [className]="'Exemplo'"
  (formIsReady)="onFormReady($event)"
>
</generated-simple-form>
```

### Observações

- O componente espera que o objeto `IPageStructure` esteja corretamente preenchido, especialmente o array attributes.
- O evento `(formIsReady)` pode ser utilizado para executar ações após a renderização do formulário.
- Certifique-se de importar o módulo que declara o `GeneratedSimpleFormComponent` no módulo onde ele será utilizado.
- O serviço` FormGeneratorService` é responsável por criar dinamicamente os campos do formulário com base nos atributos fornecidos.


___
## FormSpaceBuildComponent

### Descrição
O `FormSpaceBuildComponent` é um componente Angular responsável por construir formulários dinâmicos, simples ou em múltiplos passos (stepper), a partir de uma estrutura de dados (`IPageStructure`). Ele permite integração com localStorage, manipulação de formulários em diálogos (modais) e execução de funções customizadas para submissão, exclusão e retorno.
### Propriedades


|Propriedade|	Tipo|	Obrigatório|	Descrição|	Valor padrão / Exemplo|
|---|---|---|---|---|
|resourceForm|	`FormGroup`|	Sim|	Formulário reativo onde os dados dos campos serão armazenados.	|`new FormGroup({})`
|formIsReady|	`EventEmitter<boolean>`|	Não	|Evento emitido quando o formulário termina de ser gerado.	|`false` (emitido ao finalizar render)
|storeInLocalStorage|	`boolean`|	Não|	Indica se o formulário deve salvar dados no localStorage durante o preenchimento.|`true`
|dataToCreatePage|	`IPageStructure`|	Sim|	Estrutura de dados que define os campos e configurações do formulário.|	Ver exemplo abaixo
|submitFormFunction|	`() => void`	|Não|	Função chamada para submeter os dados do formulário à API.	|-
|deleteFormFunction|	`() => void`	|Não|	Função chamada para remover o item sendo editado.	|-
|returnFormFunction|	`() => void`	|Não|	Função chamada para retornar à página anterior.	|-
|currentFormAction|	`string`	|Sim|	Indica a ação atual do formulário: `"edit"` ou `"new"`.|	`"edit"` ou `"new"`
|formStepperStructure|	`ICreateSpaceStepper[]`	|Não|	Estrutura dos passos do formulário quando em modo stepper.	|`[]`
|className|	`string`	|Sim|	Nome da classe/modelo ao qual o formulário pertence.	|`"Produtos"`

### Métodos Principais

* `ngAfterViewInit()`: Inicializa o componente, configura dados de diálogo e determina o tipo de formulário (simples ou stepper).
* `checkTypeOfForm()`: Decide se o formulário será simples ou em etapas, chamando o método apropriado.
* `generateSimpleFormList()`: Gera o formulário simples dinamicamente.
* `generateStepFormList()`: Gera formulários em múltiplos passos (stepper).
* `getDataFromAPIFunction()`: Função auxiliar para finalizar carregamento e preencher dados em modo edição.
* `stayOnPageInCaseOfDialog()`: Gerencia o histórico do navegador para formulários abertos em diálogo/modal.
* `return()`: Fecha o diálogo ou navega para a página anterior, conforme o contexto.
* `isLastStep(stepper: MatStepper)`: Verifica se o passo atual é o último no stepper.
* `isFirstStep(stepper: MatStepper)`: Verifica se o passo atual é o primeiro no stepper.
* Métodos privados auxiliares para manipulação de estrutura de passos e atributos.

### Exemplo de Uso

```html
<app-form-space-build
  [resourceForm]="meuFormGroup"
  [dataToCreatePage]="meuObjetoDeEstrutura"
  [className]="'Produtos'"
  [currentFormAction]="'new'"
  (formIsReady)="onFormReady($event)"
  [submitFormFunction]="minhaFuncaoSubmit"
  [deleteFormFunction]="minhaFuncaoDelete"
  [returnFormFunction]="minhaFuncaoReturn">
</app-form-space-build>
```
```ts
meuFormGroup = this.fb.group({});
meuObjetoDeEstrutura = { /* objeto do tipo IPageStructure */ };
minhaFuncaoSubmit = () => { /* lógica de envio */ };
minhaFuncaoDelete = () => { /* lógica de exclusão */ };
minhaFuncaoReturn = () => { /* lógica de retorno */ };
```
### Observações

* O componente suporta tanto formulários simples quanto formulários em múltiplos passos (stepper), conforme a configuração em `dataToCreatePage.config.isFormStepper`.
* Permite integração com localStorage para persistência temporária dos dados do formulário.
* Pode ser utilizado tanto em páginas quanto em diálogos (modais).
* As funções de submit, delete e return são injetadas via `@Input` para maior flexibilidade.
* O evento `formIsReady` pode ser utilizado para executar ações após a renderização do formulário.


---
