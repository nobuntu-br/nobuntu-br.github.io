---
layout: default
title: MatStepperForm
permalink: /angular/MatStepperForm
css:
  - material-style.css
---

## `MatStepperFormComponent`

### Descrição

Componente de formulário dinâmico em etapas (stepper) baseado no `MatStepper` do Angular Material. Usa o `FormGeneratorService` para construir dinamicamente os campos do formulário a partir de um dicionário JSON (como `variations.json`). Estende o `BaseResourceFormComponent` e suporta renderização dinâmica de campos usando `ViewContainerRef`.

> ⚠️ Obs.: A implementação funcional do componente está comentada no código original. Esta documentação considera a intenção funcional completa com base nesse código.

### Propriedades

| Propriedade     | Tipo               | Obrigatório            | Descrição                                                        | Exemplo                                    |
| --------------- | ------------------ | ---------------------- | ---------------------------------------------------------------- | ------------------------------------------ |
| `fieldsStepMap` | `string[][]`       | Não                    | Define os campos exibidos em cada etapa do stepper.              | `[["nome","telefone"],["genero","idade"]]` |
| `pathJSON`      | `string`           | Não                    | Caminho para o dicionário JSON contendo os metadados dos campos. | `"assets/dicionario/variations.json"`      |
| `target`        | `ViewContainerRef` | Sim (via `@ViewChild`) | Container onde os campos gerados dinamicamente serão inseridos.  | —                                          |

### Serviços e Dependências

- `FormGeneratorService`: responsável por buscar o JSON do dicionário e gerar dinamicamente os campos do formulário.
- `HttpClient`: utilizado para fazer a requisição ao JSON do dicionário.
- `MatDialog`: para modais associados aos campos, se necessário.
- `BaseResourceService`: serviço genérico para recursos.
- `BaseResourceFormComponent`: classe base de formulário que fornece lógica comum.

### Exemplo básico

```html
<app-mat-stepper-form
  [fieldsStepMap]="[['nome', 'telefone'], ['idade', 'genero']]"
  [pathJSON]="'assets/dicionario/variations.json'"
>
</app-mat-stepper-form>
```

### Ciclo de vida

| Método       | Descrição                                                                                     |
| ------------ | --------------------------------------------------------------------------------------------- |
| `ngOnInit()` | Executa a lógica de carregamento do JSON, leitura de atributos e criação dinâmica dos campos. |

### Métodos

| Método                | Descrição                                                              |
| --------------------- | ---------------------------------------------------------------------- |
| `buildResourceForm()` | Constrói a estrutura reativa base do formulário.                       |
| `printForm()`         | Imprime o valor atual do `resourceForm` no console (usado para debug). |

### Observações

> - O método createComponentsOnView() é chamado com setTimeout, mas o ideal seria usá-lo no ngAfterViewInit.
> - A estrutura permite criar múltiplas etapas, agrupando campos por etapa.
> - O dicionário JSON deve conter nomes e tipos dos atributos.
> - A linha de construção do BaseResourceFormComponent exige uma modelTest ou valor compatível como modelo da entidade.
