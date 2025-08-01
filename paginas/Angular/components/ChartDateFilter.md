---
layout: default
title: Avalicao
permalink: /angular/ChartDateFilter
css:
  - material-style.css
---

# `ChartDateFilterComponent`

### Descrição

Componente de diálogo para seleção de intervalo de datas, utilizado como filtro em gráficos ou relatórios. Permite ao usuário informar data inicial e final, realizando validações básicas antes de retornar os dados ao componente pai.

### Propriedades

| Propriedade   | Tipo             | Obrigatório | Descrição                                                                 | Exemplo                                  |
|---------------|------------------|-------------|---------------------------------------------------------------------------|------------------------------------------|
| `filterForm`  | `FormGroup`      | Sim         | Formulário reativo com os campos `startDate` e `endDate`.                 | `this.fb.group({ startDate: ..., endDate: ... })` |
| `data`        | `IDateRange`     | Sim         | Objeto injetado contendo `startDate` e `endDate` para preencher o formulário. | `{ startDate: '2023-01-01', endDate: '2023-12-31' }` |

### Exemplo básico

```ts
this.dialog.open(ChartDateFilterComponent, {
  data: {
    startDate: '2024-01-01',
    endDate: '2024-12-31'
  }
}).afterClosed().subscribe((dateRange) => {
  if (dateRange) {
    // aplicar filtro com dateRange.startDate e dateRange.endDate
  }
});
```
### Observações
O componente é exibido como um diálogo (MatDialog) e retorna o intervalo selecionado via dialogRef.close().

A função validateDate() impede que o usuário selecione uma data inicial maior que a final.

Caso nenhuma data seja fornecida ao abrir o componente, a data atual (Date.now()) é usada como padrão para ambos os campos.

O formulário só é enviado (onSearch) se estiver válido e com datas coerentes.

Métodos
ngOnInit() – Inicializa o formulário com os dados injetados ou com a data atual.

onSearch() – Valida e envia os dados do formulário ao componente pai.

onCancel() – Fecha o diálogo sem retornar dados.

validateDate() – Verifica se a data inicial é maior que a final.