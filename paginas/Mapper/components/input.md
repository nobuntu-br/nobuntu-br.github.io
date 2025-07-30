---
layout: default
title: Input
permalink: /mapper/input/
css:
  - material-style.css
---

## 1. Inputs

Os inputs são componentes simples e adaptáveis ao tipo de dado definido. De forma geral, consistem em uma caixa retangular para entrada de dados, acompanhada de um rótulo (label) e com comportamento responsivo.
Eles podem ser configurados como campos obrigatórios ou opcionais.

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

#### resultado

<div class="custom-material-style">
  <div class="outlined-textfield">
    <input type="text" placeholder="" id="nome" />
    <label for="nome">Nome</label>
  </div>
</div>

### 1.1 Types e mascaras

**Inputs**

- `Texto(n)`: String com limite de n caracteres
- `TextoLongo()`: texto sem limite definido (maior capacidade para banco de dados)
- `Numero(n)`: número (com n limite)
- `Inteiro()`: número inteiro (apenas numeros possitivos)
- `Double()`: número decimal

**Inputs com mascaras**

- `Email()`: campo com máscara de e-mail
- `CPF()`, `CNPJ()`, `CPFCNPJ()`: campos com máscara para documentos
- `Telefone()`, `Celular()`, `TelefoneCelular()`: campos com máscara

**Checkbox**

- `Boolean()`: valor verdadeiro ou falso

**Calendar**

- `Data()`: campo de data
- `Time()`: campo de hora
- `DateTime()`: campo com data e hora

**Select**

- `Opcoes()`: campo com opcoes para selecionar 1 ou mais

---

### Exemplo

![atributo](/../../assets/imagens/atributo.png)

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

### 1.2 Tipo `Opcoes()` (Select)

Permite criar listas de seleção com valores definidos.
![opcoes](../../assets/imagens/opcoes.png)

para isso deve

- colocar o tipo `Opcoes()` no campo
- propriedades do atributo deve inserir `limiteSelecionado` com valores inteiros
- `opcoes`, onde cada valor deve ter:
  <!-- - `pt` o titulo em pt-br
  - `en` o titulo em ingles
  - `dbSave` o nome que serar salvo no banco de dados -->

```
<nomeAtributo>: Opcoes()
    @
        column
            <nome_coluna_no_banco>
        title
            pt-br
                <Título em português>
            en
                <Title in English>
        required
        limiteSelecionado
            1
        opcoes
            <exemplo1>
                pt
                    <exemplo1_nome_opcao_portugues>
                en
                    <exemplo1_nome_opcao_ingles>
                dbSave
                    <exemplo1_nome_opcao_registrado_banco_dados>
            <exemplo2>
                pt
                    <exemplo2_nome_opcao_portugues>
                en
                    <exemplo2_nome_opcao_ingles>
                dbSave
                    <exemplo2_nome_opcao_registrado_banco_dados>

            (...)
```

### Exemplo

```
tipoConta: Opcoes()
    @
        column
            tipo_conta
        title
            pt-br
                Tipo de Conta
            en
                Account Type
        required
        limiteSelecionado
            1
        opcoes
            Corrente
                pt
                    Corrente
                en
                    Checking
                dbSave
                    corrente
            Poupança
                pt
                    Poupança
                en
                    Savings
                dbSave
                    poupanca
            Pagamento
                pt
                    Pagamento
                en
                    Payment
                dbSave
                    pagamento

```
