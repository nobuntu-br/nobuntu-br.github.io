---
layout: default
title: Avalicao
permalink: /angular/avaliacao
css:
  - material-style.css
---

## `BaseResourceFormComponent<T>`

### Descrição

Componente base abstrato que implementa a lógica padrão para criação e edição de formulários com integração à API, armazenamento local (`localStorage`), e suporte à persistência de entidades filhas. Serve como base para componentes de formulário específicos.

### Propriedades

| Propriedade             | Tipo        | Obrigatório | Descrição                                               | Exemplo          |
| ----------------------- | ----------- | ----------- | ------------------------------------------------------- | ---------------- |
| `currentAction`         | `string`    | Sim         | Define a ação atual do formulário: `"new"` ou `"edit"`. | `"new"`          |
| `resourceForm`          | `FormGroup` | Sim         | Formulário reativo que representa os dados do recurso.  | `FormGroup`      |
| `pageTitle`             | `string`    | Sim         | Título da página, definido dinamicamente.               | `"Novo Cliente"` |
| `submittingForm`        | `boolean`   | Sim         | Define se o formulário está sendo submetido.            | `true`           |
| `formSaved`             | `boolean`   | Sim         | Indica se o formulário foi salvo.                       | `false`          |
| `localStorageIsEnabled` | `boolean`   | Não         | Habilita armazenamento temporário no `localStorage`.    | `true`           |
| `serverErrorMessages`   | `string[]`  | Não         | Lista de mensagens de erro recebidas da API.            | `["Erro X"]`     |

### Exemplo básico

```ts
@Component({ ... })
export class ClienteFormComponent extends BaseResourceFormComponent<Cliente> {
  constructor(...) {
    super(...);
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      nome: [null, Validators.required],
      // ...
    });
  }
}
```

### Observações

> - O método abstrato buildResourceForm() deve ser implementado pelas subclasses para configurar os controles do formulário.
> - Suporta armazenamento temporário de dados no localStorage com LocalStorageFormService.
> - Lida automaticamente com a criação e atualização de entidades, incluindo persistência de dados filhos.
> - Utiliza TranslocoService para mensagens de alerta multilíngue.
> - Se houver arrays no FormGroup, verifica se são filhos com fatherName para salvar corretamente com vínculo ao pai.
> - Realiza patch nos dados do formulário com loadResource() no modo de edição.
> - A navegação após a submissão redireciona à rota base da entidade.

### Métodos principais

| Método                     | Descrição                                                         |
| -------------------------- | ----------------------------------------------------------------- |
| `submitForm()`             | Valida e envia o formulário conforme a ação (`new` ou `edit`).    |
| `submitFormWithChild()`    | Persiste o recurso e suas entidades filhas.                       |
| `updateFormWithChild()`    | Atualiza o recurso e suas entidades filhas.                       |
| `loadResource()`           | Carrega os dados do recurso atual (modo edição).                  |
| `createResource()`         | Envia requisição de criação para a API.                           |
| `updateResource()`         | Envia requisição de atualização para a API.                       |
| `objectTratament()`        | Substitui objetos por seus respectivos `id` antes do envio à API. |
| `deleteResource()`         | Envia requisição de exclusão do recurso.                          |
| `actionsForSuccess()`      | Trata ações após sucesso na submissão.                            |
| `actionsForError()`        | Trata erros recebidos da API.                                     |
| `verifyFormValueChanges()` | Marca o formulário como não salvo ao detectar mudanças.           |
| `alertToReturn()`          | Exibe alerta se o usuário tentar sair sem salvar.                 |

### Interfaces esperadas

BaseResourceModel

```ts
export abstract class BaseResourceModel {
  id?: number;
}
```
