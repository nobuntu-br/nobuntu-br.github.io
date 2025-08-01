---
layout: default
title: Avalicao
permalink: /angular/DinamicBaseResource
css:
  - material-style.css
---

# `DinamicBaseResourceFormComponent`

### Descrição

Componente dinâmico para criação e edição de recursos com base em estrutura JSON (`IPageStructure`). Pode funcionar tanto em modo de diálogo quanto como parte de uma rota. Suporta salvamento no `localStorage`, carregamento e envio de dados para API, e criação de formulários reativos dinamicamente.

### Propriedades

| Propriedade             | Tipo               | Obrigatório | Descrição                                                                      | Exemplo                   |
| ----------------------- | ------------------ | ----------- | ------------------------------------------------------------------------------ | ------------------------- |
| `currentAction`         | `string`           | Sim         | Define se o formulário está em modo de criação (`'new'`) ou edição (`'edit'`). | `'new'`                   |
| `dataToCreatePage`      | `IPageStructure`   | Sim         | Estrutura da página usada para gerar os campos dinamicamente.                  | `{ attributes: [...] }`   |
| `className`             | `string`           | Sim         | Nome da entidade principal para buscar dados e gerar formulário.               | `'Produto'`               |
| `resourceForm`          | `FormGroup`        | Sim         | Formulário reativo criado com os campos do JSON.                               | `FormBuilder.group(...)`  |
| `pageTitle`             | `string`           | Não         | Título dinâmico da página (e.g., "Novo", "Edição").                            | `'Novo'`                  |
| `localStorageIsEnabled` | `boolean`          | Não         | Habilita o salvamento automático dos dados no `localStorage`.                  | `true`                    |
| `formSaved`             | `boolean`          | Não         | Indica se o formulário teve mudanças salvas.                                   | `false`                   |
| `serverErrorMessages`   | `string[] \| null` | Não         | Mensagens de erro recebidas do servidor.                                       | `["Nome é obrigatório."]` |
| `submittingForm`        | `boolean`          | Não         | Indica se o formulário está sendo enviado.                                     | `true`                    |
| `target`                | `ViewContainerRef` | Não         | Referência ao container onde o formulário será renderizado dinamicamente.      | `@ViewChild(...)`         |

### Exemplo básico

```html
<dinamic-base-resource-form
  [dataToCreatePage]="estrutura"
  [currentAction]="'new'"
  [className]="'Produto'"
>
</dinamic-base-resource-form>
```

Ou via MatDialog:

```ts
this.dialog.open(DinamicBaseResourceFormComponent, {
  data: {
    dataToCreatePage: estrutura,
    currentAction: 'edit',
    className: 'Cliente',
    itemId: '123',
    target: viewRef,
  },
});
```

Observações
Se aberto em modo dialog, espera MAT_DIALOG_DATA do tipo IDinamicBaseResourceFormComponent.

Os dados do formulário são salvos no localStorage (se habilitado) enquanto o usuário edita.

Suporta criação, edição e exclusão de recursos via DinamicBaseResourceService.

A estrutura do formulário é gerada dinamicamente com GeneratedFormFactoryService.

Carrega estrutura JSON para o formulário a partir de FormGeneratorService se necessário.

Emite alertas de sucesso e erro com suporte a internacionalização (TranslocoService).

Métodos principais

| Método                 | Descrição                                                                |
| ---------------------- | ------------------------------------------------------------------------ |
| `ngAfterViewInit()`    | Inicializa o formulário com base na origem (diálogo ou rota).            |
| `createPageOnDialog()` | Gera o formulário a partir de JSON se chamado via diálogo.               |
| `loadForm()`           | Carrega os dados do formulário (API ou `localStorage`).                  |
| `submitForm()`         | Envia o formulário para criação ou edição conforme a ação atual.         |
| `loadResource()`       | Busca o recurso a ser editado pela API usando o `id`.                    |
| `createResource()`     | Cria um novo recurso na API.                                             |
| `updateResource()`     | Atualiza recurso existente na API.                                       |
| `deleteResource()`     | Exclui recurso da API.                                                   |
| `actionsForSuccess()`  | Ações após operação bem-sucedida (navega, fecha diálogo, mostra alerta). |
| `actionsForError()`    | Trata erros de envio (exibe mensagens de erro).                          |
| `setCurrentAction()`   | Define se é criação ou edição, com base na rota.                         |
| `buildResourceForm()`  | Inicializa o `FormGroup` com campos básicos (`id`, `updatedAt`).         |

### Interface `IDinamicBaseResourceFormComponent`

```ts
interface IDinamicBaseResourceFormComponent {
  dataToCreatePage: IPageStructure;
  className: string;
  itemId: string;
  currentAction: string;
  target?: ViewContainerRef;
}
```
