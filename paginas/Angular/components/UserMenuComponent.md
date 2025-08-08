---
layout: default
title: UserMenu
permalink: /angular/UserMenu
css:
  - material-style.css
---

## `UserMenuComponent`

### Descrição

Componente responsável por exibir e gerenciar o **menu de usuário** na aplicação. Permite visualizar sessões ativas e inativas, alternar entre usuários logados, gerenciar menus, acessar páginas de edição de perfil e efetuar logout individual ou geral. Também pode exibir a foto de perfil do usuário, quando disponível.

---

### Propriedades

| Propriedade               | Tipo                                 | Obrigatório | Descrição                                                  | Exemplo                                   |
| ------------------------- | ------------------------------------ | ----------- | ---------------------------------------------------------- | ----------------------------------------- |
| `panelOpenState`          | `boolean`                            | Não         | Controla a abertura do painel de dados do menu de usuário. | `true`                                    |
| `isLoggedIn`              | `boolean`                            | Não         | Indica se há usuário autenticado.                          | `true`                                    |
| `users`                   | `IUser[]`                            | Não         | Lista de usuários ativos na sessão.                        | `[ { UID: '1', name: 'João' } ]`          |
| `inactiveUsers`           | `IUser[]`                            | Não         | Lista de usuários inativos, mas com acesso.                | `[ { UID: '2', name: 'Maria' } ]`         |
| `currentUser`             | `IUser`                              | Sim         | Usuário atualmente ativo na sessão.                        | `{ UID: '1', name: 'João' }`              |
| `userProfilePhotoEnabled` | `boolean`                            | Não         | Define se a foto de perfil está habilitada.                | `true`                                    |
| `menus`                   | `{ id: string, fileName: string }[]` | Não         | Lista de menus disponíveis, obtida do `localStorage`.      | `[ { id: 'm1', fileName: 'menu.json' } ]` |
| `currentMenuId`           | `string`                             | Não         | ID do menu atualmente ativo, obtido do `localStorage`.     | `'m1'`                                    |

---

### Exemplo básico

```html
<user-menu></user-menu>
```

### Funcionalidades

- Lista usuários ativos e inativos da sessão.
- Alterna entre diferentes usuários logados.
- Efetua logout de um único usuário ou de todos.
- Navega para:
  - Página de login (signin)
  - Página de edição de perfil (editProfile)
- Permite trocar o menu ativo, recarregando a aplicação.
- Pode buscar e exibir foto de perfil do usuário.

Métodos principais
| Método | Descrição |
| -------------------------- | ------------------------------------------------------------------------ |
| `ngOnInit()` | Inicializa estado do usuário, obtendo dados de sessão. |
| `updateUserState()` | Verifica se há usuário autenticado (`isLoggedIn`). |
| `setCurrentMenu(menu)` | Define e salva o menu ativo no `localStorage`, recarregando a aplicação. |
| `goToSignInPage()` | Redireciona para a página de login. |
| `goToEditUserPage()` | Redireciona para a página de edição de perfil. |
| `isCurrentUser(user)` | Verifica se o usuário informado é o mesmo da sessão atual. |
| `switchCurrentUser(user)` | Alterna para outro usuário da sessão e recarrega a aplicação. |
| `signOutUser(user)` | Efetua logout de um usuário específico. |
| `signOutAllUsers()` | Efetua logout de todos os usuários. |
| `getUserProfilePhoto(uid)` | Obtém a foto de perfil do usuário pelo `UserService`. |

### Observações

> - As listas de usuários (users, inactiveUsers) e o currentUser vêm do AuthService.
> - A troca de menu é feita através do localStorage e exige recarregar a página.
> - O método checkUserExpired() está presente, mas ainda não implementado.
> - A busca pela foto de perfil (getUserProfilePhoto) só é feita sob demanda.
