---
layout: default
title: GeneratedStepperForm
permalink: /angular/GeneratedStepperForm
css:
  - material-style.css
---

## `GeneratedStepperFormComponent`

### Descrição

Componente responsável por gerar dinamicamente um formulário com múltiplos passos (stepper) a partir de uma estrutura JSON (`IPageStructure`). Suporta criação e edição de dados, uso em modais (`MatDialog`) ou rotas, com suporte a salvamento no `localStorage` e manipulação avançada via `FormGeneratorService`.

### Propriedades

| Propriedade              | Tipo                | Obrigatório | Descrição                                                                                   | Exemplo                                |
|--------------------------|---------------------|-------------|---------------------------------------------------------------------------------------------|----------------------------------------|
| `resourceForm`           | `FormGroup`         | Sim         | Formulário reativo que conterá todos os campos gerados.                                     | `FormBuilder.group({...})`            |
| `formIsReady`            | `EventEmitter<boolean>` | Sim     | Evento emitido ao final da geração do formulário.                                           | `(formIsReady)="onReady($event)"`     |
| `localStorageIsEnabled`  | `boolean`           | Não         | Habilita o salvamento de dados no `localStorage` durante o preenchimento.                   | `true`                                 |
| `dataToCreatePage`       | `IPageStructure`    | Sim         | Estrutura contendo os atributos e propriedades usados na geração do formulário.             | `{ attributes: [...] }`                |
| `submitFormFunction`     | `() => void`        | Sim         | Função que será chamada ao submeter o formulário.                                           | `() => this.salvar()`                  |
| `deleteFormFunction`     | `() => void`        | Não         | Função que será chamada ao excluir o registro.                                              | `() => this.excluir()`                 |
| `returnFormFunction`     | `() => void`        | Não         | Função chamada ao retornar à tela anterior.                                                 | `() => this.voltar()`                  |
| `currentFormAction`      | `string`            | Sim         | Define se o formulário está em modo `'new'` ou `'edit'`.                                    | `"edit"`                               |
| `formStepperStructure`   | `string[]`          | Sim         | Lista com os nomes de cada etapa do stepper.                                                | `['dadosPessoais', 'enderecos']`       |
| `className`              | `string`            | Sim         | Nome da classe da entidade usada para identificação e geração dos campos.                   | `"Produto"`                            |
| `config`                 | `any`               | Não         | Configurações adicionais (não utilizado diretamente ainda).                                 | `{}`                                   |
| `isLinear`               | `boolean`           | Não         | Define se todos os passos precisam ser preenchidos sequencialmente.                         | `true`                                 |

### Exemplo básico

```html
<generated-stepper-form
  [resourceForm]="form"
  [dataToCreatePage]="estrutura"
  [className]="'Cliente'"
  [formStepperStructure]="['dados', 'enderecos']"
  [submitFormFunction]="salvar"
  [currentFormAction]="'new'">
</generated-stepper-form>
```
### Observações
>* Os campos são organizados conforme o valor da propriedade formTab de cada atributo.
>* O componente é compatível tanto com navegação via rota quanto com uso em MatDialog.
>* Utiliza FormGeneratorService.createComponent() para instanciar dinamicamente os campos com base nos metadados.

### Métodos principais
| Método                      | Descrição                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------- |
| `ngAfterViewInit()`         | Chama `generateStepperFormList()` para construir o formulário após renderizar a view. |
| `generateStepperFormList()` | Itera pelos passos e atributos, criando os campos dinamicamente no local correto.     |
| `SeeFormData()`             | Exibe os dados atuais do formulário no console (usado para debug).                    |
| `return()`                  | Fecha o diálogo ou redireciona o usuário à rota anterior, conforme o modo de uso.     |
