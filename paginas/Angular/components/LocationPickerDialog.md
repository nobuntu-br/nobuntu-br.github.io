---
layout: default
title: LocationPickerDialog
permalink: /angular/LocationPickerDialog
css:
  - material-style.css
---

## `LocationPickerDialogComponent`

### Descrição

Componente de diálogo (`MatDialog`) que exibe um mapa interativo (via Leaflet) para que o usuário selecione uma localização. Ao clicar no mapa, é marcado um ponto com latitude, longitude e quadrante. Ao confirmar, essa informação é retornada ao componente pai.

### Propriedades

| Propriedade        | Tipo                                              | Descrição                                              | Exemplo                                      |
| ------------------ | ------------------------------------------------- | ------------------------------------------------------ | -------------------------------------------- |
| `selectedLocation` | `{ lat: number, lng: number, quadrant?: string }` | Objeto com latitude, longitude e quadrante geográfico. | `{ lat: -23.5, lng: -46.6, quadrant: 'SW' }` |

### Dependências Injetadas

| Injeção            | Tipo                                          | Descrição                                        |
| ------------------ | --------------------------------------------- | ------------------------------------------------ |
| `dialogRef`        | `MatDialogRef<LocationPickerDialogComponent>` | Referência para o controle do diálogo.           |
| `translocoService` | `TranslocoService`                            | Serviço de tradução (não utilizado diretamente). |
| `data`             | `any`                                         | Dados opcionais passados para o diálogo.         |

### Exemplo de uso (chamada via MatDialog)

```ts
const dialogRef = this.dialog.open(LocationPickerDialogComponent, {
  width: '100%',
  height: '100%',
  data: {},
});

dialogRef.afterClosed().subscribe((result) => {
  if (result) {
    console.log('Localização selecionada:', result);
  }
});
```

### Funcionamento

- O mapa é renderizado com foco em São Paulo (-23.5505, -46.6333), usando OpenStreetMap.
- Ao clicar no mapa:
  - A posição é capturada e exibida com um marcador.
  - O quadrante (NE, NW, SE, SW) é calculado com base nos sinais de latitude e longitude.
  - O valor é armazenado em selectedLocation.
- Um marcador padrão é adicionado inicialmente em São Paulo.
- O botão de confirmação fecha o diálogo e retorna o local selecionado.

### Métodos

| Método              | Descrição                                                                  |
| ------------------- | -------------------------------------------------------------------------- |
| `ngAfterViewInit()` | Chama `initMap()` para inicializar o mapa após renderização.               |
| `initMap()`         | Configura o mapa, camada de tiles e define o comportamento de clique.      |
| `getQuadrant()`     | Calcula o quadrante geográfico baseado na latitude e longitude.            |
| `closeDialog()`     | Fecha o diálogo sem retornar dados.                                        |
| `confirmLocation()` | Fecha o diálogo e retorna a localização selecionada para o componente pai. |

### Observações

> - Utiliza a biblioteca Leaflet para renderização do mapa.
> - O id="map" deve estar presente no HTML e ocupar o espaço desejado na tela.
> - Recomendado abrir o diálogo em tela cheia (width: '100%', height: '100%').
> - Ideal para ser usado com o LocationFieldComponent.
