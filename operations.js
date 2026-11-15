// Add one object per operation. See README.md for the operation contract.

export const operations = [
  {
    id: "add",
    label: "Addition",
    symbol: "+",
    arity: 2,
    contributor: "Elimelech",
    execute: (first, second) => first + second,
  },
  {
    id: "sub",
    label: "Subtraction",
    symbol: "-",
    arity: 2,
    contributor: "Shneor bardugo",
    execute: (first, second) => first - second,
  },
  {
    id: "mul",
    label: "Multiplication",
    symbol: "*",
    arity: 2,
    contributor: "Shneor bardugo",
    execute: (first, second) => first * second,
  },
  {
    id: "modulo",
    label: "Modulo",
    symbol: "%",
    arity: 2,
    contributor: "pinchas",
    execute: (first, second) => {
      if (second === 0) {
        throw new Error("Cannot modulo by zero");
      }
      return first % second;
    },
  },
  {
    id: "power",
    label: "Power",
    symbol: "^",
    arity: 2,
    contributor: "shmuel",
    execute: (base, exponent) => base ** exponent,
  },
  {
    id: "factorial",
    label: "Factorial",
    symbol: "n!",
    arity: 1,
    contributor: "pinchas",
    execute: (n) => {
      if (!Number.isInteger(n) || n < 0) {
        throw new Error("Factorial requires a non-negative integer");
      }
      if (n > 170) {
        throw new Error("Number too large (Infinity)");
      }
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    },
  },
  {
    id: "division",
    label: "Division",
    symbol: "÷",
    arity: 2,
    execute: (a, b) => {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    },
  },

  {
    id: "min",
    label: "minimum",
    symbol: "Min",
    arity: 2,
    contributor: "Eliav Mauda",
    execute: (a, b) => Math.min(a, b),
  },
  {
    id: "max",
    label: "maximum",
    symbol: "Max",
    arity: 2,
    contributor: "Eliav Mauda",
    execute: (a, b) => Math.max(a, b),
  },
  {
    id: "avg",
    label: "average",
    symbol: "Avg",
    arity: 2,
    contributor: "Eliav Mauda",
    execute: (a, b) => (a + b) / 2,
  },
  {
    id: "sqrt",
    label: "Square Root",
    symbol: "√",
    arity: 1,
    contributor: "יצחק בלוך וג'מיני",
    execute: (n) => {
      if (n < 0) {
        throw new Error("Cannot take square root of a negative number");
      }
      return Math.sqrt(n);
    },
  },
  {
    id: "percentage",
    label: "Percentage",
    symbol: "%",
    arity: 2,
    contributor: "יחיאל",
    execute: (a, b) => (a / 100) * b,
  },

];
