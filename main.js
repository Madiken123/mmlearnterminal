import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv)).argv;

const calculate = (value1, sign, value2) => {
  switch (sign) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      if (value2 !== 0) {
        return value1 / value2;
      } else {
        return 'Error: Division by zero';
      }
    default:
      return 'Error: Invalid operator';
  }
};

const result = calculate(parseFloat(argv.value1), argv.sign, parseFloat(argv.value2));

console.log(`${argv.value1} ${argv.sign} ${argv.value2} = ${result}`);
