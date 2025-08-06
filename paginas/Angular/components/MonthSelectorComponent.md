---
layout: default
title: MonthSelector
permalink: /angular/MonthSelector
css:
  - material-style.css
---

## `MonthSelectorComponent`

### Descrição

Componente reutilizável para seleção de meses, com suporte a internacionalização usando `@ngneat/transloco`. Apresenta um `FormControl` com os meses do ano e emite o número do mês selecionado ao componente pai. A seleção inicial pode ser configurada via `@Input`.

### Propriedades

| Propriedade     | Tipo                   | Obrigatório | Descrição                                 | Exemplo |
| --------------- | ---------------------- | ----------- | ----------------------------------------- | ------- |
| `value`         | `number`               | Não         | Mês inicialmente selecionado (de 1 a 12). | `5`     |
| `monthSelected` | `EventEmitter<number>` | Não         | Evento emitido ao selecionar um novo mês. | `2`     |

### Propriedades internas

| Propriedade          | Tipo          | Descrição                                                |
| -------------------- | ------------- | -------------------------------------------------------- |
| `monthControl`       | `FormControl` | Controle reativo associado ao `select`.                  |
| `monthList`          | `string[]`    | Lista de meses em inglês usados como chaves de tradução. |
| `monthsTranslations` | `string[]`    | Traduções dos meses no idioma atual.                     |

### Exemplo básico

```html
<month-selector
  [value]="3"
  (monthSelected)="onMonthChange($event)"
></month-selector>
```

```ts
Copiar
Editar
onMonthChange(selectedMonth: number) {
  console.log('Mês selecionado:', selectedMonth); // exemplo: 3
}
```

### Funcionamento

- O componente inicializa a lista de meses traduzidos com base nas chaves (months.january, etc.).
- O valor inicial do mês é definido via value e convertido em uma chave (january, etc.) para preencher o FormControl.
- Ao alterar a seleção:
  - O componente converte a chave de volta para índice (1 a 12).
  - Emite o valor numérico via monthSelected.emit().

### Métodos

| Método              | Descrição                                                                     |
| ------------------- | ----------------------------------------------------------------------------- |
| `ngOnInit()`        | Inicializa o componente, carregando traduções e configurando o valor inicial. |
| `ngOnChanges()`     | Atualiza o valor do seletor se o `@Input() value` mudar.                      |
| `onMonthSelect()`   | Manipula a seleção de um mês e emite o valor.                                 |
| `emitSelectMonth()` | Converte a chave do mês para número (1 a 12) e emite via `monthSelected`.     |
| `setInitialValue()` | Define o valor inicial no `FormControl` com base no `value`.                  |
| `loadTranslate()`   | Traduz todos os meses utilizando o Transloco no escopo `components`.          |

### Observações

> - Usa validação Validators.required no campo, ideal para uso em formulários obrigatórios.
> - A tradução dos meses depende da configuração correta do TranslocoModule e do escopo components.
> - É compatível com formulários reativos (FormControl).
