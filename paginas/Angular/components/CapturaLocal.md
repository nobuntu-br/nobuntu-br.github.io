---
layout: default
title: Avalicao
permalink: /angular/CaptureLocation
css:
  - material-style.css
---

# `CaptureLocationFieldComponent`

### Descrição

Componente de formulário customizado para captura da localização atual do usuário via navegador (geolocalização). Pode ser configurado para exibir ícone, aplicar máscara, controlar visibilidade condicional e traduzir o rótulo dinamicamente com Transloco.

### Propriedades

| Propriedade             | Tipo                                        | Obrigatório | Descrição                                                                 | Exemplo                                         |
|-------------------------|---------------------------------------------|-------------|---------------------------------------------------------------------------|-------------------------------------------------|
| `label`                 | `string`                                    | Sim         | Rótulo do campo.                                                          | `"localAtual"`                                  |
| `charactersLimit`       | `number`                                    | Não         | Limite de caracteres exibidos no rótulo.                                 | `30`                                            |
| `isRequired`            | `boolean`                                   | Não         | Define se o campo é obrigatório.                                          | `true`                                          |
| `className`             | `string`                                    | Não         | Nome da classe para uso com i18n e estilos.                              | `"endereco"`                                    |
| `placeholder`           | `string`                                    | Não         | Texto exibido quando o campo está vazio.                                 | `"Clique para capturar localização"`            |
| `mask`                  | `string`                                    | Não         | Máscara para formatar o valor (não utilizada diretamente).               | `null`                                          |
| `svgIcon`               | `string \| null`                            | Não         | Ícone SVG exibido no campo. Padrão: `'my_location'`.                     | `"pin_drop"`                                    |
| `actionOnClickInIcon`  | `() => void \| null`                         | Não         | Ação personalizada ao clicar no ícone.                                   | `() => alert('Clicou no ícone')`                |
| `conditionalVisibility`| `{ field: string, values: string[] }`        | Não         | Define visibilidade condicional com base em outro campo do formulário.   | `{ field: 'tipo', values: ['externo'] }`        |
| `resourceForm`          | `FormGroup<any>`                            | Sim         | Formulário pai ao qual o campo está vinculado.                           | `formGroupInstance`                             |

### Exemplo básico

```html
<app-capture-location-field
  [label]="'localizacaoAtual'"
  [charactersLimit]="40"
  [isRequired]="true"
  [className]="'usuario'"
  [svgIcon]="'location_on'"
  [resourceForm]="formulario"
  [conditionalVisibility]="{ field: 'tipoEndereco', values: ['campo'] }">
</app-capture-location-field>
```

### Observações
> * Ao clicar no campo ou no ícone, a localização atual (latitude, longitude e quadrante) será capturada e exibida no formato:
> `Lat: -23.5, Lng: -46.6, Quadrante: SO (Sudoeste)`
> * O quadrante geográfico é calculado com base nos sinais de latitude e longitude.
> * A visibilidade condicional desabilita ou habilita o campo conforme o valor de outro campo no formulário.
> * O rótulo é traduzido automaticamente com suporte ao `Transloco`, caindo para um nome formatado caso a tradução não exista.
> * O componente escuta mudanças no formulário (`valueChanges`) para aplicar as regras de visibilidade reativa.

