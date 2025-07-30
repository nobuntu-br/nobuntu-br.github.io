---
layout: default
title: Classe de Entidade
permalink: /mapper/class/
css:
  - material-style.css
---

# Classe

As **classes** representam entidades do domínio do sistema e são definidas em `app → domain`. Cada classe corresponde a uma tabela no banco de dados e possui propriedades e atributos (campos).

## 1. Estrutura Básica

Cada classe deve ser definida em PascalCase (ex: `Cliente`, `Pedido`, `ContaBancaria`) e conter dois blocos principais:

- `@`: Propriedades da entidade (metadados, configurações, etc.)
- `atributos`: Lista de atributos (campos) da entidade

### Exemplo

```
Cliente
    @
        table
            cliente
        id
            column
                id
            type
                Int()
        description
            pt-br
                Entidade de clientes do sistema
        localStorage
            true
        apiUrl
            api/cliente
        columnsQuantity
            2
        title
            pt-br
                Clientes
            en
                Customers
        frontPath
            cliente
        searchable
            id, nome, cpf
        iconMenu
            person_apron
    atributos
        nome: Texto(60)
            @
                column
                    nome
                title
                    pt-br
                        Nome
                    en
                        Name
                description
                    pt
                        Nome completo do cliente
                required
        cpf: CPF()
            @
                column
                    cpf
                title
                    pt-br
                        CPF
                required
        ativo: Boolean()
            @
                column
                    ativo
                title
                    pt-br
                        Ativo
```

---

## 2. Propriedades do Nó `@`

No bloco `@` de cada classe, defina as propriedades principais:

| Propriedade       | Descrição                                 | Exemplo                     |
| ----------------- | ----------------------------------------- | --------------------------- |
| `table`           | Nome da tabela no banco                   | `cliente`                   |
| `id`              | Configuração da chave primária            | `column: id`, `type: Int()` |
| `description`     | Descrição da entidade                     | `Entidade de clientes`      |
| `localStorage`    | Habilita cache local no frontend          | `true` ou `false`           |
| `apiUrl`          | Rota da API para a entidade               | `api/cliente`               |
| `columnsQuantity` | Número de colunas no layout do formulário | `2`                         |
| `title`           | Título da entidade (pt-br/en)             | `Clientes`/`Customers`      |
| `frontPath`       | Caminho da rota no frontend               | `cliente`                   |
| `searchable`      | Lista de campos pesquisáveis              | `id, nome, cpf`             |
| `iconMenu`        | Nome do ícone do menu                     | `person_apron`              |

> **Observação:**
>
> - `searchable` define os campos usados em buscas.
> - `columnsQuantity` define o layout do formulário no frontend.
> - `localStorage: true` habilita cache local para agilizar carregamento.

---

## 3. Atributos da Classe

No bloco `atributos`, liste cada campo da entidade seguindo a sintaxe:

```
<nomeAtributo>: <Tipo>(<limiteOpcional>)
    @
        column
            <nome_coluna_no_banco>
        title
            pt-br
                <Título em português>
            en
                <Title in English>
        description
            <descrição em pt ou en>
        required          ← (opcional) marca como obrigatório
        searchable        ← (opcional) marca como pesquisável
        (demais propriedades específicas)
```

### Exemplo de atributo

```
nome: Texto(60)
    @
        column
            nome
        title
            pt-br
                Nome
            en
                Name
        description
            pt
                Nome completo do cliente
        required
```

---

> **Observações**
>
> - O bloco `@` centraliza as configurações da entidade.
> - O bloco `atributos` define os campos e suas propriedades.
> - Utilize sempre títulos e descrições em português e inglês para internacionalização.
> - Para campos obrigatórios, adicione a propriedade `required`.
> - Para campos pesquisáveis, adicione a propriedade `searchable`.

---
