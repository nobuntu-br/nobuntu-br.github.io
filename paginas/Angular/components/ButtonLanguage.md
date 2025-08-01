---
layout: default
title: Avalicao
permalink: /angular/ChangeLanguageButto
css:
  - material-style.css
---


# `ChangeLanguageButtonComponent`

### Descrição

Componente de botão responsável por alternar entre idiomas disponíveis utilizando o serviço `Transloco`. Exibe bandeiras e nomes dos idiomas disponíveis e atualiza dinamicamente o idioma da aplicação ao ser clicado.

### Propriedades

| Propriedade     | Tipo                         | Obrigatório | Descrição                                                                | Exemplo                            |
|-----------------|------------------------------|-------------|--------------------------------------------------------------------------|------------------------------------|
| `availableLangs`| `AvailableLangs`             | Sim         | Lista de idiomas disponíveis no Transloco.                              | `[{ id: 'pt' }, { id: 'en' }]`     |
| `activeLang`    | `string`                     | Sim         | Idioma atualmente ativo na aplicação.                                   | `"pt"`                             |
| `flagCodes`     | `{ [key: string]: string }`  | Sim         | Mapeamento entre idiomas e códigos ISO para bandeiras.                  | `{ pt: 'br', en: 'us' }`           |

### Exemplo básico

```html
<change-language-button></change-language-button>
```
### Observações
> * Os idiomas são extraídos diretamente do serviço `Transloco` via `getAvailableLangs()`.
> * Ao clicar em uma bandeira ou idioma, o método s`etActiveLang(lang: string)` atualiza o idioma ativo da aplicação.
> * O mapeamento de bandeiras (`flagCodes`) pode ser expandido para incluir outros idiomas.
> * O componente assina `langChanges$` para reagir a mudanças no idioma.

### Métodos
* `ngOnInit()` – Inicializa o componente carregando os idiomas disponíveis e configurando as bandeiras.
* `setActiveLang(lang: string)` – Define o idioma ativo no Transloco.
* `trackByFn(index: number, item: any)` – Função de otimização usada em ngFor.