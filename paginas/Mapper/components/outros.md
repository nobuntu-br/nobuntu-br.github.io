# componentes

## 2. Formulário de Steps

Para utilizar o Formulário em Steps (etapas), é necessário configurar a classe da seguinte forma:

1. Definir a propriedade `isFormStepper` com o valor `true`, indicando que será utilizado o formulário em etapas.
1. Adicionar a propriedade `formTabs` com a lista de grupos (etapas) do formulário, na ordem desejada (de cima para baixo).

### Exemplo de definição na propriedade da classe:

```
@
    (...)
    isFormStepper
        true
    formTabs
        <passo 1>
        <passo 2>
        <passo 3>
    (...)
```

### Atributos no Formulário com Steps

Cada campo (atributo) do formulário deve indicar a etapa (tab) à qual pertence, utilizando a anotação `formTab`.

Estrutura do atributo:

```
<nomeDoAtributo>: <Tipo>(<opcional>)
    @
        (...)
        formTab
            <passo 2>

```

### Exemplo completo:

- propriedade

```
@
    (...)
    isFormStepper
        true
    formTabs
        Dados
        Veiculos
        Importacao
    (...)

```

- atributo

```
nomeCliente: Texto(60)
    @
        column
            nome_cliente
        description
            pt-br
                Nome do cliente ou da empresa.
        title
            pt-br
                Nome Cliente
        formTab
            Dados
        required
        searchable

```

## tipos

opcoes
arquivo

sub forms
Menus
Consultas
Ambientes

---
