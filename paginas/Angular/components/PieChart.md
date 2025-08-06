---
layout: default
title: PieChar
permalink: /angular/PieChar
css:
  - material-style.css
---

## `PieChartComponent`

### Descrição

Componente reutilizável para exibição de gráficos de pizza (pie chart), com diversas opções de personalização. Utiliza a biblioteca `ngx-charts` (presumivelmente) para renderização do gráfico. Suporta responsividade, rótulos, legenda, animações e filtragem de valores zero.

---

### Propriedades

| Propriedade      | Tipo      | Obrigatório | Descrição                                                                  | Exemplo                        |
| ---------------- | --------- | ----------- | -------------------------------------------------------------------------- | ------------------------------ |
| `data`           | `any[]`   | Sim         | Dados a serem exibidos no gráfico. Cada item deve conter `name` e `value`. | `[ { name: 'A', value: 30 } ]` |
| `title`          | `string`  | Não         | Título do gráfico.                                                         | `'Distribuição de Vendas'`     |
| `typeOfData`     | `string`  | Não         | Tipo dos dados (uso livre, apenas para exibição condicional).              | `'financeiro'`                 |
| `colorSchema`    | `string`  | Não         | Esquema de cores utilizado no gráfico.                                     | `'cool'`                       |
| `animations`     | `boolean` | Não         | Ativa/desativa animações.                                                  | `true`                         |
| `legendTitle`    | `string`  | Não         | Título da legenda.                                                         | `'Categorias'`                 |
| `legendPosition` | `string`  | Não         | Posição da legenda (ex: `'right'`, `'below'`).                             | `'right'`                      |
| `hideZeroValues` | `boolean` | Não         | Oculta itens cujo valor seja zero.                                         | `true`                         |
| `dataLabels`     | `boolean` | Não         | Exibe rótulos diretamente no gráfico.                                      | `true`                         |
| `gridLines`      | `boolean` | Não         | Não aplicável diretamente a gráficos de pizza (pode ser legado).           | `false`                        |
| `xAxisLabel`     | `string`  | Não         | Não aplicável em gráficos de pizza (uso genérico).                         | —                              |
| `yAxisLabel`     | `string`  | Não         | Não aplicável em gráficos de pizza (uso genérico).                         | —                              |

---

### Exemplo básico

```html
<app-pie-chart
  [data]="graficoDados"
  [title]="'Distribuição por Categoria'"
  [colorSchema]="'cool'"
  [animations]="true"
  [legendTitle]="'Categorias'"
  [legendPosition]="'right'"
  [hideZeroValues]="true"
  [dataLabels]="true"
>
</app-pie-chart>
```

### Funcionamento

- O gráfico é desenhado com um view fixo de [400, 200], que pode ser alterado futuramente para responsividade.
- Há manipulação do evento resize para recalcular a view, mas atualmente está desabilitada com valor fixo.
- Métodos de evento onSelect, onActivate e onDeactivate estão disponíveis, porém comentados.

### Métodos

| Método               | Descrição                                                                   |
| -------------------- | --------------------------------------------------------------------------- |
| `ngAfterViewInit()`  | Chama `onResize` após renderização para definir tamanho inicial do gráfico. |
| `onResize(event)`    | Ajusta a dimensão do gráfico (com valor fixo no momento).                   |
| `onSelect(data)`     | Manipula evento de clique em item do gráfico (comentado por padrão).        |
| `onActivate(data)`   | Manipula evento de ativação (hover ou foco).                                |
| `onDeactivate(data)` | Manipula evento de desativação.                                             |

### Observações

> - O componente pode ser facilmente integrado a dashboards e relatórios visuais.
> - Pode ser estendido para permitir redimensionamento real com base em event.target.innerWidth, se necessário.
> - A propriedade gridLines e os labels dos eixos (xAxisLabel, yAxisLabel) são mais adequados a gráficos de barra/linha.
