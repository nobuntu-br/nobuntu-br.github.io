---
layout: default
title: Avalicao
permalink: /angular/Graphic
css:
  - material-style.css
---

# `DefaultGraphicComponent`

### Descrição

Componente visual para exibição de gráficos dinâmicos baseado em uma configuração (`IGraphic`). Permite buscar dados via API, aplicar filtros por data, capturar e copiar ou baixar o gráfico renderizado como imagem. Ideal para dashboards configuráveis.

### Propriedades

| Propriedade | Tipo               | Obrigatório | Descrição                                              | Exemplo                                          |
| ----------- | ------------------ | ----------- | ------------------------------------------------------ | ------------------------------------------------ |
| `config`    | `IDashboardConfig` | Sim         | Configuração geral do dashboard.                       | `{ ... }`                                        |
| `graphic`   | `IGraphic`         | Sim         | Configuração específica do gráfico a ser exibido.      | `{ charts: { apiUrl: 'dados/por-categoria' }}`   |
| `dateRange` | `IDateRange`       | Não         | Intervalo de datas selecionado para filtrar o gráfico. | `{ startDate: new Date(), endDate: new Date() }` |
| `target`    | `ViewContainerRef` | Sim         | Local onde o gráfico é instanciado dinamicamente.      | `@ViewChild(...)`                                |

### Exemplo básico

```html
<app-default-graphic [config]="configDashboard" [graphic]="graficoSelecionado">
</app-default-graphic>
```

### Observações

> - Usa `DinamicDashboardFieldFactory` para renderizar dinamicamente o componente de gráfico com os dados.
> - Os dados são buscados via `HttpClient` com base na URL da configuração `graphic.charts.apiUrl`.
> - Suporta filtragem por data usando o componente `ChartDateFilterComponent`.
> - Permite copiar o gráfico renderizado para a área de transferência ou baixar como imagem PNG, usando `html2canvas`.

### Métodos

- `ngAfterViewInit()` – Chama `constructGraphic()` após a view ser inicializada.
- `constructGraphic()` – Busca dados via API e instancia o gráfico dinamicamente.
- `requestAllValuesFromAPI(graphic)` – Faz requisição POST com os parâmetros da série.
- `filterData()` – Abre diálogo para selecionar intervalo de datas e aplica o filtro via nova requisição POST.
- `captureAndCopy()` – Copia o gráfico renderizado para a área de transferência.
- `captureAndDownload()` – Salva o gráfico renderizado como um arquivo de imagem (`graphic.png`).

### Interface `IDateRange`

```ts
interface IDateRange {
  startDate: Date;
  endDate: Date;
}
```

Usada para aplicar filtros por período ao gráfico.
