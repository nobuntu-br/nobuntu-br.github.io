---
layout: default
title: SideNav
permalink: /angular/SideNav
css:
  - material-style.css
---
## `SideNavComponent`

### Descrição

Componente responsável por exibir a **navegação lateral (SideNav)** da aplicação. Apresenta o menu de opções conforme o perfil do usuário, controla o título da aplicação, verifica permissões de logout e troca de ambiente (Tenant). É responsivo e integra com `MatDialog` para permitir a escolha de menu quando o usuário possui múltiplos ambientes.

---

### Propriedades

| Propriedade            | Tipo                  | Obrigatório | Descrição                                                        | Exemplo                    |
| ---------------------- | --------------------- | ----------- | ---------------------------------------------------------------- | -------------------------- |
| `navListOptions`       | `INavListOption[]`    | Sim         | Lista de opções de navegação carregadas do backend/localStorage. | `[ { name: 'Home', ...} ]` |
| `applicationTitle`     | `string`              | Sim         | Título da aplicação exibido no topo da interface.                | `'Meu App'`                |
| `menuTitle`            | `string`              | Sim         | Título do menu lateral, pode mudar conforme o ambiente.          | `'Menu Principal'`         |
| `sideNavBarIsOpened`   | `boolean`             | Sim         | Define se o SideNav está visível.                                | `true`                     |
| `canCloseNavBar`       | `boolean`             | Não         | Define se o usuário pode fechar o SideNav.                       | `false`                    |
| `canShowLogOutButton`  | `boolean`             | Sim         | Controla exibição do botão de logout.                            | `true`                     |
| `canUserControlTenant` | `boolean`             | Sim         | Define se o usuário pode trocar de ambiente (Tenant).            | `true`                     |
| `selectedView`         | `string`              | Não         | Tipo de visualização ativa (ex: `'card'`, `'table'`).            | `'card'`                   |
| `currentUser`          | `User`                | Sim         | Usuário logado atualmente, obtido do localStorage.               |                            |
| `isHandset$`           | `Observable<boolean>` | Não         | Detecta se o dispositivo é mobile (CDK Layout).                  |                            |

---

### Exemplo básico

```html
<side-nav></side-nav>
```

### Funcionalidades

- Carrega menu do usuário com base em permissões.
- Suporte a múltiplos ambientes (menus diferentes).
- Armazena e restaura configurações do menu via localStorage.
- Responsivo com Breakpoints (Angular CDK).
- Exibe botão de logout apenas se autorizado.
- Integração com MatDialog para troca de ambiente (MenuChoiceComponent).

### Métodos principais

| Método                        | Descrição                                                              |
| ----------------------------- | ---------------------------------------------------------------------- |
| `ngOnInit()`                  | Inicializa o menu, usuário atual e detecta ambiente via query params.  |
| `getDataToMenu()`             | Busca menu via serviço ou localStorage.                                |
| `getDataToMenuLocalStorage()` | Busca menu específico a partir dos dados salvos localmente.            |
| `menuAccessible()`            | Gera navegação baseada nos menus disponíveis e configura localStorage. |
| `showLogOutButton()`          | Verifica autorização e exibe botão de logout se permitido.             |
| `redirectToSignInPage()`      | Redireciona o usuário para a página de login.                          |
| `onViewChange(view: string)`  | Altera visualização ativa (ex: de `'card'` para `'list'`).             |
| `ngOnDestroy()`               | Cancela observadores ativos com `takeUntil`.                           |

### Observações

> - O componente utiliza localStorage para persistir seleção de menu e usuário.
> - Pode trabalhar com diferentes layouts dependendo do menu carregado.
> - O botão de troca de ambiente é exibido somente se canUserControlTenant = true.
> - O componente associado para escolha de ambiente é o MenuChoiceComponent.
