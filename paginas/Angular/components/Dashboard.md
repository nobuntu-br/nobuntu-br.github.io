---
layout: default
title: Avalicao
permalink: /angular/Dashboard
css:
  - material-style.css
---

# `DefaultDashboardComponent`

### Descrição

Componente genérico responsável por renderizar dashboards de forma dinâmica a partir de um arquivo `.json` de configuração. Utiliza um serviço de fábrica (`DashboardFactoryService`) para gerar visualizações baseadas em gráficos, com base nos dados definidos via rota.

### Propriedades

| Propriedade | Tipo               | Obrigatório | Descrição                                                                | Exemplo           |
| ----------- | ------------------ | ----------- | ------------------------------------------------------------------------ | ----------------- |
| `target`    | `ViewContainerRef` | Sim         | Referência ao container onde o dashboard será dinamicamente renderizado. | `@ViewChild(...)` |

### Exemplo de uso

Este componente é usado com base em rota, por exemplo: `/dashboard/estoque`
Irá carregar: `src/assets/dicionario/dashboard/estoque.json`

### Observações

> - Espera que o segundo segmento da URL da rota contenha o nome do arquivo `.json` do dashboard.
> - O arquivo JSON deve estar localizado em:  
>   `src/assets/dicionario/dashboard/{idDashboard}.json`
> - A lógica de renderização é delegada ao `DashboardFactoryService`, que interpreta o JSON e cria os gráficos.

### Interface `ICardOptions`

```ts
interface ICardOptions {
  name: string;
  value: any;
}
```

Usado para definir valores resumidos que aparecem em cards no dashboard.

### Interface IDashboardOptions

```ts
interface IDashboardOptions {
  card?: ICardOptions;
  type: string;
  title: string;
  typeOfData: string;
  apiUrl: string;
  colorSchema: string;
  animations: boolean;
  legendTitle: string;
  legendPosition: string;
  hideZeroValues: boolean;
  dataLabels: boolean;
  gridLines: boolean;
  xAxisLabel: string;
  yAxisLabel: string;
}
```

Utilizada para configurar os gráficos exibidos, podendo incluir:

- `type`: Tipo do gráfico (`bar`, `pie`, `line`, etc.)
- `title`: Título do gráfico
- `apiUrl`: Endpoint para buscar os dados
- `colorSchema`, `animations`, `dataLabels`, entre outros: controlam estilo e comportamento

### Métodos

- `ngAfterViewInit()` – Chama o método getDashboard() logo após a renderização da view.
- `getDashboard()` – Obtém o ID do dashboard a partir da rota, carrega o JSON correspondente e chama o serviço de fábrica para renderizá-lo.
