---
layout: default
title: VerticalBarChart
permalink: /angular/VerticalBarChart
css:
  - material-style.css
---

## `VerticalBarChartComponent`

### Descrição

Componente responsável por renderizar um **gráfico de barras verticais**. Oferece diversas opções de personalização, como cores, animações, legendas, rótulos, e ajuste automático de tamanho conforme a janela do navegador. Utilizado para visualização de dados categóricos com valores numéricos.

---

### Propriedades

| Propriedade      | Tipo      | Obrigatório | Descrição                                                            | Exemplo                                                  |
| ---------------- | --------- | ----------- | -------------------------------------------------------------------- | -------------------------------------------------------- |
| `data`           | `any[]`   | Sim         | Conjunto de dados para o gráfico.                                    | `[ { name: 'A', value: 10 }, { name: 'B', value: 20 } ]` |
| `title`          | `string`  | Não         | Título do gráfico.                                                   | `'Vendas Mensais'`                                       |
| `typeOfData`     | `string`  | Não         | Tipo de dado exibido (ex.: `'quantitativo'`).                        | `'quantitativo'`                                         |
| `colorSchema`    | `string`  | Não         | Esquema de cores utilizado no gráfico.                               | `'vivid'`                                                |
| `animations`     | `boolean` | Não         | Define se animações estarão habilitadas.                             | `true`                                                   |
| `legendTitle`    | `string`  | Não         | Título da legenda.                                                   | `'Produtos'`                                             |
| `legendPosition` | `string`  | Não         | Posição da legenda (`'right'`, `'below'`, etc.).                     | `'right'`                                                |
| `hideZeroValues` | `boolean` | Não         | Oculta valores iguais a zero.                                        | `false`                                                  |
| `dataLabels`     | `boolean` | Não         | Exibe rótulos de valores sobre as barras.                            | `true`                                                   |
| `gridLines`      | `boolean` | Não         | Exibe linhas de grade no gráfico.                                    | `true`                                                   |
| `xAxisLabel`     | `string`  | Não         | Texto exibido como rótulo do eixo X.                                 | `'Mês'`                                                  |
| `yAxisLabel`     | `string`  | Não         | Texto exibido como rótulo do eixo Y.                                 | `'Vendas'`                                               |
| `view`           | `any[]`   | Não         | Dimensões do gráfico `[largura, altura]`, ajustadas automaticamente. | `[800, 600]`                                             |

---

### Exemplo básico

```html
<app-vertical-bar-chart
  [data]="[{ name: 'Janeiro', value: 50 }, { name: 'Fevereiro', value: 75 }]"
  [title]="'Vendas por Mês'"
  [colorSchema]="'vivid'"
  [animations]="true"
  [legendTitle]="'Meses'"
  [legendPosition]="'right'"
  [dataLabels]="true"
  [gridLines]="true"
  [xAxisLabel]="'Mês'"
  [yAxisLabel]="'Quantidade'"
>
</app-vertical-bar-chart>
```

### Funcionalidades

- Ajuste automático do tamanho do gráfico com base na janela (window resize).
- Suporte a personalização de cores, legendas e rótulos.
- Possibilidade de ocultar valores zero.
- Exibição opcional de rótulos e linhas de grade.
- Captura de eventos de interação: seleção, ativação e desativação de itens.

Métodos principais
| Método | Descrição |
| -------------------- | ---------------------------------------------------------------------------------------- |
| `ngAfterViewInit()` | Executa após a inicialização da view, ajustando o tamanho do gráfico e logando os dados. |
| `onResize(event)` | Ajusta dinamicamente as dimensões do gráfico de acordo com o tamanho da janela. |
| `onSelect(data)` | Dispara ao clicar em um item do gráfico. |
| `onActivate(data)` | Dispara quando um item do gráfico é ativado (hover ou foco). |
| `onDeactivate(data)` | Dispara quando um item do gráfico é desativado. |

### Observações

> - O componente não faz a renderização do gráfico sozinho; espera que o template (vertical-bar-chart.component.html) use uma biblioteca de gráficos compatível com as propriedades fornecidas.
> - O log de dados no ngAfterViewInit é útil para depuração, mas pode ser removido em produção.
> - O ajuste de tamanho é proporcional (largura / 1.3, altura / 1.3) para manter espaçamento e legibilidade.
