---
layout: default
title: Validador de CPF/CNPJ
permalink: /angular/Validators/CpfCnpj
css: material-style.css
---

# Validador de CPF/CNPJ

##  Descrição
Módulo responsável pela **validação de campos de CPF e CNPJ**, tanto numéricos quanto alfanuméricos.  
É utilizado pelo **backend** e **frontend** para garantir que valores informados em formulários sejam **válidos** e **não falsos**.

Durante o processo de validação, caso o valor informado não seja um CPF ou CNPJ válido, é retornado um **erro específico** informando ao usuário que o documento é inválido.

Além disso, há suporte para remover máscaras antes da validação, garantindo que formatos como `111.222.333-44` e `11.222.333/0001-81` sejam tratados corretamente.

---

## Funções

### `unmask(value: string): string`
Remove todos os caracteres não numéricos de uma string (ex: pontos, barras, traços).

```typescript
const unmask = (value: string): string => {
  return value.replace(/\D/g, '');
}
```

**Exemplo:**
```typescript
unmask("11.222.333/0001-81"); // Retorna "11222333000181"
```

---

### `isValidCnpj(cnpj: string): boolean`
Valida um **CNPJ** (com ou sem máscara).  
A função também permite CNPJs **alfanuméricos**, convertendo letras para valores numéricos equivalentes antes do cálculo dos dígitos verificadores.

```typescript
export const isValidCnpj = (cnpj: string): boolean => {
  const unmaskedCnpj = unmask(cnpj).toUpperCase();

  if (
    unmaskedCnpj.length !== 14 ||
    /^(\w)\1{13}$/.test(unmaskedCnpj) ||
    !/^[A-Z0-9]{12}\d{2}$/.test(unmaskedCnpj)
  ) {
    return false;
  }

  const getCharValue = (char: string): number => {
    const charCode = char.charCodeAt(0);
    if (charCode >= 48 && charCode <= 57) {
      return parseInt(char, 10);
    }
    return charCode - 55;
  };
  
  const calculateDigit = (digits: string, weights: number[]): number => {
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      sum += getCharValue(digits[i]) * weights[i];
    }
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  const base = unmaskedCnpj.substring(0, 12);
  const dv1 = calculateDigit(base, weights1);

  if (dv1 !== parseInt(unmaskedCnpj.charAt(12))) {
    return false;
  }

  const dv2 = calculateDigit(base + dv1, weights2);

  return dv2 === parseInt(unmaskedCnpj.charAt(13));
};
```

**Exemplo:**
```typescript
isValidCnpj("11.222.333/0001-81"); // true
isValidCnpj("11.222.333/0001-00"); // false
```

---

### `isValidCpf(cpf: string): boolean`
Valida um **CPF** (com ou sem máscara).

```typescript
export const isValidCpf = (cpf: string): boolean => {
  const unmaskedCpf = cpf.replace(/\D/g, '');
  
  if (
    unmaskedCpf.length !== 11 ||
    /^(\d)\1{10}$/.test(unmaskedCpf)
  ) {
    return false;
  }
  
  const calculateDigit = (digits: string, weights: number[]): number => {
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      sum += parseInt(digits[i], 10) * weights[i];
    }
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };
  
  const weights1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
  const weights2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  
  const base = unmaskedCpf.substring(0, 9);
  const dv1 = calculateDigit(base, weights1);
  
  if (dv1 !== parseInt(unmaskedCpf.charAt(9), 10)) {
    return false;
  }
  
  const dv2 = calculateDigit(base + dv1, weights2);
  
  return dv2 === parseInt(unmaskedCpf.charAt(10), 10);
};
```

**Exemplo:**
```typescript
isValidCpf("123.456.789-09"); // false
isValidCpf("390.533.447-05"); // true
```

---

##  Observações

- O **backend** valida automaticamente se o valor informado é CPF ou CNPJ.  
- Caso a verificação falhe, é retornado um erro informando que o documento não é válido.  
- A função `unmask` garante que qualquer máscara aplicada no campo seja removida antes da validação.  
- O CNPJ possui suporte opcional a caracteres alfanuméricos (para casos empresariais especiais).  

---


