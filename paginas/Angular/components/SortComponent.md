---
layout: default
title: Ordenação
permalink: /angular/SortOrderDialog
css: material-style.css
---

# SortOrderDialogComponent

## Descrição  
Componente responsável por configurar a **ordenação (sort)** de listas.  
É exibido em um **diálogo modal** (geralmente acionado a partir da barra de pesquisa), permitindo que o usuário escolha:  

- o **campo** a ser ordenado,  
- a **direção** (crescente ou decrescente),  
- e defina **prioridades** entre múltiplos campos de ordenação.  

Os campos disponíveis são totalmente **personalizáveis**, sendo carregados a partir de um **JSON** configurável.

---

## Propriedades

| Propriedade | Tipo | Obrigatório | Descrição | Exemplo |
|--------------|------|--------------|------------|----------|
| `data` | `SortOrderData` | Sim | Dados injetados no diálogo, contendo os campos disponíveis e a ordenação atual. | `{ availableFields: [...], currentSorts: [...] }` |
| `sortForm` | `FormGroup` | Sim | Formulário reativo que gerencia as opções de ordenação. | — |
| `sortDirections` | `Array<{ value: string, label: string }>` | Não | Lista de direções disponíveis: ascendente ou descendente. | `[ { value: 'asc', label: 'Crescente' }, { value: 'desc', label: 'Decrescente' } ]` |

---

## Interfaces relacionadas

### `SortOrderData`
```typescript
export interface SortOrderData {
  availableFields: SortField[];
  currentSorts?: SortOption[];
}
```

### `SortField`
```typescript
export interface SortField {
  name: string;
  displayName: { pt: string, en: string };
  type: string;
}
```

### `SortOption`
```typescript
export interface SortOption {
  field: string;
  direction: 'asc' | 'desc';
  order?: number;
}
```

---

## Exemplo básico

O componente é aberto via `MatDialog` a partir de outro componente, por exemplo:

```typescript
openSortDialog(): void {
  const dialogRef = this.dialog.open(SortOrderDialogComponent, {
    width: '600px',
    data: {
      availableFields: [
        { name: 'name', displayName: { pt: 'Nome', en: 'Name' }, type: 'string' },
        { name: 'date', displayName: { pt: 'Data', en: 'Date' }, type: 'date' }
      ],
      currentSorts: [
        { field: 'name', direction: 'asc' }
      ]
    }
  });

  dialogRef.afterClosed().subscribe((result: SortOption[]) => {
    if (result) {
      console.log('Ordenação escolhida:', result);
      // aplicar ordenação na lista...
    }
  });
}
```

No diálogo, o usuário pode adicionar múltiplas linhas de ordenação, selecionar o campo e a direção, e alterar a prioridade com os botões “subir” ou “descer”.

---

## Observações

- Ao abrir o diálogo, caso já existam ordenações (`currentSorts`), elas são carregadas automaticamente.  
- Caso contrário, o componente cria uma linha inicial em branco.  
- O usuário pode adicionar, remover ou reordenar os critérios de ordenação.  
- O botão **“Limpar ordenação”** retorna uma lista vazia (`[]`).  
- O botão **“Confirmar”** retorna a lista de ordenações com o índice representando a **prioridade**.  
- O botão **“Cancelar”** fecha o diálogo sem salvar alterações.

---

## Métodos

| Método | Descrição |
|--------|------------|
| `ngOnInit()` | Inicializa o formulário e carrega as ordenações existentes (se houver). |
| `addSortOption(fieldValue?: string, directionValue?: string)` | Adiciona uma nova linha de ordenação. |
| `removeSortOption(index: number)` | Remove a linha de ordenação especificada. |
| `moveUp(index: number)` | Move uma opção de ordenação para cima, alterando sua prioridade. |
| `moveDown(index: number)` | Move uma opção de ordenação para baixo, alterando sua prioridade. |
| `onConfirm()` | Retorna as ordenações válidas e fecha o diálogo. |
| `onCancel()` | Fecha o diálogo sem salvar alterações. |
| `onClearSort()` | Limpa todas as ordenações e fecha o diálogo. |

---
