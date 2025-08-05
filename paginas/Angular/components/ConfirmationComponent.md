---
layout: default
title: confirmação
permalink: /angular/confirmacao
css:
  - material-style.css
---


# `ConfirmChangeAppComponent`

### Descrição

Componente de diálogo (`MatDialog`) utilizado para confirmar a troca de aplicação ou contexto dentro do sistema. Recebe os dados da aplicação a ser trocada via injeção de dependência (`MAT_DIALOG_DATA`), exibe as informações relevantes e aguarda a ação do usuário (confirmar ou cancelar).

### Propriedades

| Propriedade | Tipo          | Obrigatório | Descrição                                                                  | Exemplo                               |
| ----------- | ------------- | ----------- | -------------------------------------------------------------------------- | ------------------------------------- |
| `app`       | `Application` | Sim         | Objeto da aplicação que será exibido na confirmação.                       | `{ name: 'App Teste', uid: '1' }`     |
| `data`      | `any`         | Sim         | Objeto injetado via `MAT_DIALOG_DATA`, deve conter ao menos a chave `app`. | `{ app: { name: 'CRM', uid: '99' } }` |

### Exemplo de uso

```ts
this.dialog.open(ConfirmChangeAppComponent, {
  data: { app: selectedApp },
});
```

### Observações

> - A injeção de dependência utiliza MAT_DIALOG_DATA para receber os dados necessários ao diálogo.
> - O componente exibe os dados da aplicação (Application) para que o usuário possa confirmar a troca.
> - Ao confirmar, o dialogRef.close(true) pode ser usado para notificar o componente pai.
> - O exemplo de código fonte está atualmente comentado, então o comportamento real deve ser implementado conforme necessidade.

### Ciclo de Vida

| Método       | Descrição                                                                            |
| ------------ | ------------------------------------------------------------------------------------ |
| `ngOnInit()` | Executa no carregamento do componente. Atualmente, apenas imprime `data` no console. |

### Interface esperada (Application)

```ts
interface Application {
  uid: string;
  name: string;
  // outros campos dependendo do serviço
}
```


# `ConfirmationDialogComponent`

### Descrição

Componente reutilizável de diálogo de confirmação baseado no `MatDialog`. Exibe uma mensagem fornecida e permite ao usuário confirmar ou cancelar uma ação. Retorna a escolha do usuário (`true` ou `false`) ao componente chamador.

### Propriedades

| Propriedade | Tipo     | Obrigatório | Descrição                                                                               | Exemplo                                 |
| ----------- | -------- | ----------- | --------------------------------------------------------------------------------------- | --------------------------------------- |
| `message`   | `string` | Sim         | Mensagem a ser exibida no corpo do diálogo. Pode vir via `@Input` ou `MAT_DIALOG_DATA`. | `"Deseja realmente excluir este item?"` |

### Exemplo básico

**Chamada do diálogo:**

```ts
this.dialog
  .open(ConfirmationDialogComponent, {
    data: { message: 'Tem certeza que deseja continuar?' },
  })
  .afterClosed()
  .subscribe((result) => {
    if (result === true) {
      // ação confirmada
    }
  });
```

### Template:

```html
<confirmation-dialog
  [message]="'Tem certeza que deseja sair?'"
></confirmation-dialog>
```

### Observações

> - A mensagem pode ser passada diretamente via @Input() ou via injeção de dependência com MAT_DIALOG_DATA.
> - O resultado do diálogo é retornado via dialogRef.close(option), onde option é um valor booleano representando a escolha do usuário.
> - Útil para confirmações de ações críticas como deleção, navegação, ou alterações persistentes.

### Métodos

| Método                         | Descrição                                                            |
| ------------------------------ | -------------------------------------------------------------------- |
| `closeDialog(option: boolean)` | Fecha o diálogo e envia a opção (`true` ou `false`) para o chamador. |

### Interface IConfirmationDialog

```ts
export interface IConfirmationDialog {
  message: string;
}
```

Perguntar ao ChatGPT
