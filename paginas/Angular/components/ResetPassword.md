---
layout: default
title: ResetPassword
permalink: /angular/ResetPassword
css:
  - material-style.css
---

## `ResetPasswordComponent`

### Descrição

Componente responsável pelo fluxo de **redefinição de senha via e-mail**. Contempla as seguintes etapas:

1. Enviar código de verificação para o e-mail informado.
2. (Comentado) Validar o código de verificação.
3. Redefinir a senha após confirmação de código.

Utiliza `AuthService` para envio do código e `MatSnackBar` para exibir mensagens ao usuário. Futuramente poderá integrar com `UserService` e `Router` (comentados).

---

### Propriedades

| Propriedade        | Tipo      | Obrigatório | Descrição                                                               |
| ------------------ | --------- | ----------- | ----------------------------------------------------------------------- |
| `email`            | `string`  | Sim         | Endereço de e-mail para o qual será enviado o código.                   |
| `verificationCode` | `string`  | Não         | Código digitado pelo usuário para validar identidade.                   |
| `password`         | `string`  | Sim         | Nova senha a ser definida.                                              |
| `confirmPassword`  | `string`  | Sim         | Confirmação da nova senha.                                              |
| `codeSent`         | `boolean` | Não         | Define se o código já foi enviado. Controla etapa no fluxo de UI.       |
| `codeVerified`     | `boolean` | Não         | Define se o código foi validado com sucesso (funcionalidade comentada). |

---

### Exemplo básico de uso (fluxo esperado)

```html
<form (ngSubmit)="onEmailSubmit()" *ngIf="!codeSent">
  <input [(ngModel)]="email" name="email" placeholder="Digite seu e-mail" />
  <button type="submit">Enviar código</button>
</form>

<form (ngSubmit)="onCodeSubmit()" *ngIf="codeSent && !codeVerified">
  <input
    [(ngModel)]="verificationCode"
    name="code"
    placeholder="Digite o código recebido"
  />
  <button type="submit">Verificar</button>
</form>

<form (ngSubmit)="onResetSubmit()" *ngIf="codeVerified">
  <input
    [(ngModel)]="password"
    type="password"
    name="password"
    placeholder="Nova senha"
  />
  <input
    [(ngModel)]="confirmPassword"
    type="password"
    name="confirmPassword"
    placeholder="Confirmar nova senha"
  />
  <button type="submit">Redefinir senha</button>
</form>
```

### Métodos

| Método            | Descrição                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------ |
| `onEmailSubmit()` | Envia requisição ao `AuthService` para envio do código de verificação. Exibe snackbar de erro/sucesso. |
| `onCodeSubmit()`  | (Comentado) Valida o código usando `UserService` e marca `codeVerified` como `true`.                   |
| `onResetSubmit()` | Compara `password` e `confirmPassword`. Envia requisição para redefinir senha (trecho comentado).      |

### Observações

> - A etapa de verificação do código (onCodeSubmit) e a redefinição final (onResetSubmit) ainda não estão implementadas no código — estão comentadas.
> - Para que o fluxo funcione corretamente, é necessário implementar:
>   - Validação do código de verificação.
>   - Redefinição da senha via serviço (applicationService.resetPassword(...)).
> - Para redirecionar o usuário após redefinir a senha, será necessário injetar e usar o Router.
