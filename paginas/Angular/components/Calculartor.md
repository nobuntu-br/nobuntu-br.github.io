---
layout: default
title: Avalicao
permalink: /angular/Calculator
css:
  - material-style.css
---

# `CalculatorComponent`

### Descrição

Componente de calculadora customizada com suporte a operações básicas, porcentagem, histórico de cálculos e adaptação para dispositivos móveis. Pode ser utilizado como um diálogo (`MatDialog`) em formulários ou outras interfaces.

### Propriedades

| Propriedade           | Tipo             | Obrigatório | Descrição                                                                 | Exemplo                                         |
|-----------------------|------------------|-------------|---------------------------------------------------------------------------|-------------------------------------------------|
| `display`             | `string`         | Não         | Armazena a expressão atual digitada na calculadora.                      | `"5+3"`                                         |
| `history`             | `string[]`       | Não         | Histórico das expressões e resultados calculados.                        | `["5+3 = 8"]`                                   |
| `isVisible`           | `boolean`        | Não         | Controla a visibilidade da calculadora (útil para lógica externa).       | `true`                                          |
| `decimalOperator`     | `string`         | Sim         | Operador decimal traduzido via Transloco.                                | `","`                                           |
| `isMobile`            | `boolean`        | Não         | Define se a visualização atual é em um dispositivo móvel.                | `true` ou `false`                              |
| `isHistoryVisible`    | `boolean`        | Não         | Controla a exibição do histórico em telas menores.                       | `true`                                          |
| `dialogInjectorData`  | `any`            | Sim         | Dados injetados no diálogo, incluindo valor inicial de `formData`.       | `{ formData: '10' }`                            |

### Exemplo básico

```ts
this.dialog.open(CalculatorComponent, {
  data: {
    formData: '25+5'
  }
});
```
### Observações
> * O resultado da calculadora é retornado via `MatDialogRef.close(result)`. 
> * A função `safeEval()` é usada para avaliar expressões de forma segura.
> * A calculadora ajusta sua interface automaticamente para mobile via `window.innerWidth`.
> * A função `calculatePercentage()` aplica a lógica de porcentagem baseada no último operador.
> * A calculadora possui histórico de expressões, que pode ser exibido no modo mobile com `toggleHistoryVisibility()`. 
> * Eventos de mudança de linguagem são escutados através do `TranslocoService`.
 
### Métodos principais
* `appendCharacter(char: string)` – Adiciona um caractere à expressão.
* `calculate()` – Realiza o cálculo da expressão atual.
* `calculatePercentage()` – Calcula a porcentagem com base no último operador.
* `clear()` – Limpa toda a expressão.
* `backspace()` – Remove o último caractere da expressão.
* `confirm()` – Fecha o diálogo e retorna o resultado.
* `cancel()` – Fecha o diálogo sem retornar valor.
* `toggleHistoryVisibility()` – Mostra ou oculta o histórico de cálculos.
* `insertNumberIntoForm(number: string)` – Exemplo de função para integração com formulário externo.
* `subscribeChangeLanguageEvent()` – Inscreve-se nos eventos do Transloco para reações a mudanças de idioma.
* `safeEval(expression: string)` – Avalia expressões matemáticas de forma segura, evitando `eval()`.
