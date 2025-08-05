---
layout: default
title: Languages
permalink: /angular/Languages
css:
  - material-style.css
---
## `LanguagesComponent`

### Descrição

Componente responsável por listar e alternar entre os idiomas disponíveis no sistema utilizando o `TranslocoService`. Exibe os idiomas com suas respectivas bandeiras e atualiza o idioma ativo ao ser selecionado pelo usuário. Também prevê a atualização da navegação (comentada no código).

### Propriedades

| Propriedade      | Tipo                        | Descrição                                                            | Exemplo                          |
| ---------------- | --------------------------- | -------------------------------------------------------------------- | -------------------------------- |
| `availableLangs` | `AvailableLangs`            | Lista de idiomas disponíveis retornados pelo Transloco.              | `[ { id: 'pt' }, { id: 'en' } ]` |
| `activeLang`     | `string`                    | Idioma atualmente ativo na aplicação.                                | `"pt"`                           |
| `flagCodes`      | `{ [key: string]: string }` | Mapeia o código do idioma para o código do país usado nas bandeiras. | `{ pt: 'br', en: 'us' }`         |

### Exemplo básico

```html
<languages></languages>
```

### Observações

> - O método setActiveLang(lang: string) define o idioma ativo usando o serviço Transloco.
> - A atualização visual (como a bandeira ou idioma selecionado) depende de bindings no HTML com base em activeLang.
> - A navegação poderia ser atualizada dinamicamente com base na linguagem, conforme previsto no método privado \_updateNavigation (atualmente comentado).
> - Pode ser usado em headers, sidebars ou qualquer área de configuração de idioma.

### Ciclo de Vida

| Método          | Descrição                                                               |
| --------------- | ----------------------------------------------------------------------- |
| `ngOnInit()`    | Inicializa os idiomas disponíveis, ouve mudanças e define `activeLang`. |
| `ngOnDestroy()` | Método presente mas não implementado (previsto para limpeza futura).    |

### Métodos Públicos

| Método                                | Descrição                                             |
| ------------------------------------- | ----------------------------------------------------- |
| `setActiveLang(lang: string)`         | Define o idioma ativo via Transloco.                  |
| `trackByFn(index: number, item: any)` | Otimização para _ngFor_. Retorna `item.id` ou índice. |
