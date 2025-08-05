---
layout: default
title: LineChart
permalink: /angular/LineChart
css:
  - material-style.css
---
## `LineChartComponent`

### Descrição

Componente visual responsável por renderizar gráficos de linha customizados com base em dados recebidos por `@Input`. Suporta múltiplas opções de configuração como título, esquema de cores, rótulos, legendas, grade e formatação do eixo Y (valores monetários). Reage a redimensionamento da janela para ajustar o tamanho do gráfico automaticamente.

### Propriedades

| Propriedade      | Tipo      | Obrigatório | Descrição                                                          | Exemplo                                |
| ---------------- | --------- | ----------- | ------------------------------------------------------------------ | -------------------------------------- |
| `data`           | `any[]`   | Sim         | Dados a serem renderizados no gráfico.                             | `[ { name: 'Janeiro', value: 1000 } ]` |
| `title`          | `string`  | Não         | Título do gráfico.                                                 | `"Vendas Mensais"`                     |
| `typeOfData`     | `string`  | Não         | Tipo de dados representados (ex: monetário, percentual).           | `"monetário"`                          |
| `colorSchema`    | `string`  | Não         | Nome do esquema de cores a ser aplicado.                           | `"esquemaVerde"`                       |
| `animations`     | `boolean` | Não         | Ativa ou desativa animações no gráfico.                            | `true`                                 |
| `legendTitle`    | `string`  | Não         | Título exibido acima da legenda.                                   | `"Produtos"`                           |
| `legendPosition` | `string`  | Não         | Posição da legenda (`'right'`, `'below'`, etc.).                   | `"right"`                              |
| `hideZeroValues` | `boolean` | Não         | Esconde valores zerados (implementação depende de lógica externa). | `true`                                 |
| `dataLabels`     | `boolean` | Não         | Mostra ou oculta os valores sobre os pontos da linha.              | `true`                                 |
| `gridLines`      | `boolean` | Não         | Mostra ou oculta as linhas de grade.                               | `false`                                |
| `xAxisLabel`     | `string`  | Não         | Rótulo do eixo X.                                                  | `"Mês"`                                |
| `yAxisLabel`     | `string`  | Não         | Rótulo do eixo Y.                                                  | `"Valor em R$"`                        |

### Propriedades internas (default)

| Propriedade      | Valor padrão        | Descrição                               |
| ---------------- | ------------------- | --------------------------------------- |
| `legend`         | `true`              | Mostra a legenda.                       |
| `showLabels`     | `true`              | Mostra rótulos nos pontos.              |
| `xAxis`, `yAxis` | `true`              | Ativa os eixos.                         |
| `showXAxisLabel` | `true`              | Mostra rótulo do eixo X.                |
| `showYAxisLabel` | `true`              | Mostra rótulo do eixo Y.                |
| `timeline`       | `true`              | Habilita visualização temporal.         |
| `colorScheme`    | `{ domain: [...] }` | Esquema de cores padrão (6 cores fixas) |

### Exemplo básico

```html
<app-line-chart
  [data]="dadosVendas"
  [title]="'Vendas Mensais'"
  [typeOfData]="'monetário'"
  [colorSchema]="'esquemaVerde'"
  [xAxisLabel]="'Mês'"
  [yAxisLabel]="'Valor (R$)'"
>
</app-line-chart>
```

### Observações

> - O gráfico se ajusta automaticamente ao tamanho da janela com base no evento resize.
> - O eixo Y utiliza a formatação monetária brasileira com R$ e duas casas decimais (pt-BR).
> - Eventos onSelect, onActivate e onDeactivate estão disponíveis para captura de interação com o gráfico (log no console por padrão).
> - A visualização (view) é recalculada dinamicamente com base em window.innerWidth / 1.3.

### Métodos

| Método                       | Descrição                                                       |
| ---------------------------- | --------------------------------------------------------------- |
| `ngAfterViewInit()`          | Dispara o ajuste de tamanho ao renderizar o componente.         |
| `onResize(event)`            | Recalcula o tamanho do gráfico baseado nas dimensões da janela. |
| `onSelect(data)`             | Loga o item clicado no gráfico.                                 |
| `onActivate(data)`           | Loga ativação de item (ex: hover).                              |
| `onDeactivate(data)`         | Loga desativação de item.                                       |
| `yAxisTickFormatting(value)` | Formata os valores do eixo Y como moeda brasileira.             |
