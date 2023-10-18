const calculate = (expression) => {
    const regex = /(\d+\.?\d*)([\+\-\x\÷\*\/])(\d+\.?\d*)/;
    const match = expression.match(regex);

    if (match) {
      let num1 = parseFloat(match[1]);
      let operator = match[2];
      let num2 = parseFloat(match[3]);

      switch (operator) {
        case '+':
          return (num1 + num2).toString();
        case '-':
          return (num1 - num2).toString();
        case 'x' || '*':
          return (num1 * num2).toString();
        case '÷' || '/':
          return (num1 / num2).toString();
        default:
          throw new Error('Invalid operator');
      }
    }

    throw new Error('Invalid expression');
}

export default calculate