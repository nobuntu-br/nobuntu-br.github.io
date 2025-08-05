---
layout: default
title: ListApps
permalink: /angular/ListApps
css:
  - material-style.css
---
## `ListAppsComponent`

### Descrição

Componente responsável por listar as aplicações disponíveis para o usuário e permitir a troca entre elas. Realiza a autenticação com o `AuthService`, consulta os dados com `ApplicationService`, e utiliza o componente `ConfirmChangeAppComponent` para confirmar a troca antes de redirecionar o usuário para outra aplicação.

### Propriedades

| Propriedade            | Tipo                  | Descrição                                                    | Exemplo                                |
| ---------------------- | --------------------- | ------------------------------------------------------------ | -------------------------------------- |
| `customData`           | `any`                 | Dados personalizados (não utilizados diretamente no código). | `null`                                 |
| `showAppMenu`          | `boolean`             | Controla a visibilidade do menu de aplicações.               | `false`                                |
| `selectedApp`          | `Application \| null` | Aplicativo atualmente selecionado.                           | `{ name: 'CRM', redirect_uri: '...' }` |
| `apps`                 | `Application[]`       | Lista de aplicativos disponíveis para o usuário.             | `[ { name: 'Financeiro', ... } ]`      |
| `userManagerParameter` | `UserManager`         | Instância (não utilizada diretamente no código atual).       | `new UserManager(...)`                 |

### Serviços Utilizados

- `ApplicationService` – Para buscar a lista de aplicativos.
- `AuthService` – Para verificar se o usuário está autenticado e obter o usuário atual.
- `MatDialog` – Para exibir o diálogo de confirmação (`ConfirmChangeAppComponent`).
- `Router` – (injetado, mas não utilizado diretamente).

### Métodos

| Método                 | Descrição                                                                              |
| ---------------------- | -------------------------------------------------------------------------------------- |
| `ngOnInit()`           | Inicializa o componente, verifica a autenticação e busca a lista de aplicações.        |
| `fetchApps()`          | Consulta os aplicativos disponíveis via `ApplicationService`.                          |
| `toggleAppMenu()`      | Alterna a visibilidade do menu de seleção de aplicações.                               |
| `openApp(app)`         | Abre o diálogo de confirmação e, se confirmado, redireciona o usuário para o novo app. |
| `saveRedirectURL(url)` | Armazena uma URL de redirecionamento no `localStorage`. (Não utilizado diretamente)    |
| `closeApp()`           | Limpa a seleção atual da aplicação.                                                    |

### Exemplo básico de uso

```html
<app-list-apps></app-list-apps>
```

### Fluxo de troca de aplicação

1. Usuário seleciona uma aplicação.
1. openApp(app) abre ConfirmChangeAppComponent.
1. Se o usuário confirmar:
   - Recupera o redirect_uri da aplicação.
   - Abre a nova aplicação em uma nova aba com window.open.

### Observações

> - O componente espera que a aplicação (Application) tenha a propriedade redirect_uri.
> - O componente ConfirmChangeAppComponent é usado como confirmação antes do redirecionamento.
> - O AuthService é usado para verificar a sessão do usuário e recuperar dados do usuário atual.
