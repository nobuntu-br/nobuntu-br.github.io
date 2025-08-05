---
layout: default
title: LocationField
permalink: /angular/LocationField
css:
  - material-style.css
---
## `LocationFieldComponent`

### Descrição

Componente de campo customizado que permite ao usuário selecionar uma localização geográfica através de um mapa interativo em tela cheia (via `MatDialog`). Exibe o valor como texto formatado com latitude, longitude e quadrante. Pode ser configurado com visibilidade condicional com base em outros campos do formulário.

### Propriedades

| Propriedade             | Tipo                                              | Obrigatório | Descrição                                                                | Exemplo                                      |
| ----------------------- | ------------------------------------------------- | ----------- | ------------------------------------------------------------------------ | -------------------------------------------- |
| `label`                 | `string`                                          | Sim         | Rótulo do campo exibido no formulário.                                   | `"Localização do Evento"`                    |
| `isRequired`            | `boolean`                                         | Não         | Indica se o campo é obrigatório.                                         | `true`                                       |
| `className`             | `string`                                          | Sim         | Nome da entidade associada ao campo, usado para fins de tradução/estilo. | `"Evento"`                                   |
| `conditionalVisibility` | `{ field: string, values: string[] }`             | Não         | Controla a visibilidade com base em outro campo do formulário.           | `{ field: 'tipo', values: ['externo'] }`     |
| `resourceForm`          | `FormGroup<any>`                                  | Sim         | Formulário reativo pai onde o campo está inserido.                       | `FormBuilder.group({...})`                   |
| `locationMarker`        | `{ lat: number, lng: number, quadrant?: string }` | Não         | Valor inicial do marcador de localização.                                | `{ lat: -23.5, lng: -46.6, quadrant: 'SO' }` |

### Exemplo básico

```html
<app-location-field
  [label]="'Localização'"
  [className]="'Evento'"
  [isRequired]="true"
  [resourceForm]="form"
  [conditionalVisibility]="{ field: 'tipo', values: ['externo'] }"
  [locationMarker]="{ lat: -23.5, lng: -46.6 }"
>
</app-location-field>
```

### Observações

> - O campo é exibido como texto (inputValue) e preenchido após o usuário interagir com o mapa no diálogo LocationPickerDialogComponent.
> - O botão que abre o mapa exibe um MatDialog em tela cheia com o seletor de localização.
> - Após a seleção, o campo recebe um valor como:
>
> ```yaml
>  Lat: -23.55, Lng: -46.63, Quadrante: SO
> ```
>
> - A visibilidade condicional do campo é reativa: se o valor do campo especificado em conditionalVisibility.field estiver incluído em values, o campo é habilitado; caso contrário, é desabilitado.
> - Utiliza takeUntil com ngUnsubscribe para limpar assinaturas ao destruir o componente.

### Métodos
| Método | Descrição |
| -------------------- | ------------------------------------------------------------------------------ |
| `ngOnInit()` | Inicializa o componente e aplica a lógica de visibilidade condicional. |
| `checkConditional()` | Verifica e aplica dinamicamente a visibilidade com base em outro campo. |
| `getLocation()` | Abre o seletor de localização em tela cheia (`LocationPickerDialogComponent`). |
