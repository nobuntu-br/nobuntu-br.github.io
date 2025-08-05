---
layout: default
title: BaseResourceList
permalink: /angular/BaseResourceList
css:
  - material-style.css
---
## `BaseResourceListComponent<T>`

### Descrição

Classe abstrata que fornece comportamento padrão para listagens de recursos no Angular. Pode ser estendida por componentes concretos que representam listas de entidades específicas. Inclui lógica para carregamento e exclusão de registros via `BaseResourceService`.

### Propriedades

| Propriedade | Tipo  | Descrição                            | Exemplo                       |
| ----------- | ----- | ------------------------------------ | ----------------------------- |
| `resources` | `T[]` | Lista de recursos carregados da API. | `[ { id: 1, nome: 'João' } ]` |

### Construtor

| Parâmetro         | Tipo                     | Descrição                                       |
| ----------------- | ------------------------ | ----------------------------------------------- |
| `resourceService` | `BaseResourceService<T>` | Serviço genérico utilizado para consumir a API. |

### Métodos

| Método                        | Descrição                                                                                   |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| `ngOnInit()`                  | Carrega todos os recursos ao iniciar o componente. Assina o método `getAll()` do serviço.   |
| `deleteResource(resource: T)` | Exibe um `confirm()`, e caso confirmado, deleta o recurso via API e atualiza a lista local. |

### Exemplo de uso

```ts
@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
})
export class ProdutoListaComponent extends BaseResourceListComponent<Produto> {
  constructor(service: ProdutoService) {
    super(service);
  }
}
```

### Observações

> - Esta classe está anotada com @Directive() pois não possui template próprio — deve ser estendida por componentes concretos.
> - A lógica de exclusão é simples e baseada em confirmação via window.confirm().
> - É possível adicionar ordenação à lista modificando a linha comentada no getAll().
