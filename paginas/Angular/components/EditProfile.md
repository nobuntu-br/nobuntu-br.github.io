---
layout: default
title: Avalicao
permalink: /angular/EditProfile
css:
  - material-style.css
---

# `EditProfileComponent`

### Descrição

Componente responsável pela edição do perfil do usuário logado. Permite atualizar nome, sobrenome e outros campos relacionados à identidade do usuário, salvando os dados via `ApplicationService` e atualizando o `localStorage`. Após a atualização, redireciona o usuário para a página inicial.

### Propriedades

| Propriedade   | Tipo     | Obrigatório | Descrição                                                                 | Exemplo                            |
|---------------|----------|-------------|---------------------------------------------------------------------------|------------------------------------|
| `currentUser` | `IUser`  | Sim         | Representa o usuário atual carregado do `localStorage`.                   | `{ UID: '123', userName: 'jdoe' }` |
| `user`        | `object` | Sim         | Objeto com os dados a serem editados no formulário.                       | `{ userId: '', displayName: '', ... }` |

### Exemplo básico

O componente é utilizado diretamente na rota `/edit-profile`, e seu template HTML deve conter campos reativos para `displayName`, `givenName`, `surname`, etc., ligados ao objeto `user`.

```html
<form (ngSubmit)="onSubmit()">
  <input [(ngModel)]="user.displayName" name="displayName" required>
  <input [(ngModel)]="user.givenName" name="givenName">
  <input [(ngModel)]="user.surname" name="surname">
  <!-- outros campos -->
  <button type="submit">Salvar</button>
</form>
```
### Observações
> * Os dados do usuário são obtidos do `localStorage` na inicialização (`ngOnInit`), populando o objeto `user`.
> * O método `onSubmit()` chama `ApplicationService.updateUserProfile`, exibindo mensagens de sucesso ou erro via `MatSnackBar`.
> * Após o sucesso, o `currentUser` também é atualizado no `localStorage` com os novos valores de nome, sobrenome e nome de usuário.
> * Redireciona automaticamente para a página inicial após o envio bem-sucedido.

### Métodos

| Método       | Descrição                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------ |
| `ngOnInit()` | Inicializa os dados do usuário a partir do `localStorage` e popula o formulário de edição. |
| `onSubmit()` | Envia os dados atualizados para o backend e atualiza o `localStorage` localmente.          |

### Interfaces relacionadas
`IUser`
```ts
interface IUser {
  UID: string;
  TenantUID: string;
  userName: string;
  firstName: string;
  lastName: string;
  isAdministrator: boolean;
  memberType: string;
}
```