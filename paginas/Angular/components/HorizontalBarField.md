---
layout: default
title: HorizontalBarField
permalink: /angular/HorizontalBarField
css:
  - material-style.css
---

## `HorizontalBarField`

### Descrição

Classe responsável por instanciar dinamicamente o componente `HorizontalBarChartComponent` dentro de um `ViewContainerRef`, com base nos dados fornecidos pela estrutura do dashboard (`IGraphic`). Implementa a interface `DashboardField`, permitindo sua integração em dashboards dinâmicos.

### Método

#### `createDashboardField(createComponentData: IGraphic, data: any, target: ViewContainerRef): HorizontalBarChartComponent`

Cria dinamicamente o componente `HorizontalBarChartComponent` com os dados e configurações visuais necessárias.

##### Parâmetros

| Parâmetro             | Tipo               | Descrição                                              |
| --------------------- | ------------------ | ------------------------------------------------------ |
| `createComponentData` | `IGraphic`         | Objeto contendo os metadados do gráfico a ser exibido. |
| `data`                | `any`              | Dados a serem plotados no gráfico.                     |
| `target`              | `ViewContainerRef` | Container onde o componente será criado.               |

##### Retorno

- Instância do `HorizontalBarChartComponent` já criada e configurada.

### Exemplo básico de uso

```ts
const chartField = new HorizontalBarField();
const instance = chartField.createDashboardField(grafico, dados, viewContainer);
```

### Observações

> - Os seguintes atributos do gráfico são configurados diretamente na instância criada:
>   - title
>   - typeOfData
>   - colorSchema
>   - animations
>   - legendTitle
>   - legendPosition
>   - hideZeroValues
>   - dataLabels
>   - gridLines
>   - xAxisLabel
>   - yAxisLabel
> - A classe funciona como parte do sistema dinâmico de dashboards e é compatível com DinamicDashboardFieldFactory.

### Dependências

- HorizontalBarChartComponent – Componente real do gráfico.
- DashboardField – Interface que define o contrato para campos de dashboard.
- IGraphic – Interface com os dados de configuração do gráfico.
- IDashboardOptions – Interface auxiliar para opções de gráficos.
- ViewContainerRef – Local de injeção dinâmica do componente.
