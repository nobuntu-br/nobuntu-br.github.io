## 1. Sub forms

Sub forms são componentes de mini-formulários que podem ser chamados dentro de outro formulário. Eles oferecem duas ações iniciais: buscar um dado já cadastrado ou cadastrar um novo registro.
O funcionamento é baseado em uma classe já existente, sendo que os campos do sub form serão gerados de acordo com os atributos da classe referenciada.

Existem dois tipos principais de configuração:

- Simples (1:1) — relação de um para um.

- Composta (N:N) — relação de muitos para muitos, permitindo adicionar múltiplos itens.

### 1.1 Simples (1:1)

Para criar esse tipo de relação, o tipo do atributo deve ser o nome da classe referenciada.
É necessário adicionar as seguintes propriedades:

`apiUrl` → Rota da API para a entidade.

`fieldDisplayedInLabel` → Nome de um dos atributos da entidade que será exibido na listagem.

Exemplo de estrutura:

```
<Classe1>
    (...)
<Classe2>
    <nome_do atributo>:<Classe1>()
        @
            column
                nome_coluna_no_banco>
            title
                pt-br
                    <Título em português>
                en
                    <Title in English>
            description
                <descrição em pt ou en>
            apiUrl
                <Rota da API para a entidade>
            fieldDisplayedInLabel
                <Um dos atributos da entidade>

```

### 1.2 Composta (N:N)

Nesse caso, cada classe possui um atributo referenciando a outra.
Somente a classe principal precisa ter a propriedade column.

Exemplo de estrutura:

```
<Classe1>
    <nome_do atributo>: <Classe2>()
        @
            column
                nome_coluna_no_banco>
            title
                pt-br
                    <Título em português>
                en
                    <Title in English>
            description
                <descrição em pt ou en>
            apiUrl
                <Rota da API para a entidade>
            fieldDisplayedInLabel
                <Um dos atributos da entidade>
<Classe2>
    <nome_do atributo>: <Classe1>()
        @
           title
                pt-br
                    <Título em português>
                en
                    <Title in English>
            description
                <descrição em pt ou en>
            apiUrl
                <Rota da API para a entidade>
            fieldDisplayedInLabel
                <Um dos atributos da entidade>

```
