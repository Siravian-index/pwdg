const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');

const createPassword = require('./utils/createPassword');

program.version('1.0.0').description('Simple Password Generator');

program
  .option('-l, --length <number>', 'length of password', '10')
  .option('-s, --save', 'save password to password.txt', false)
  .option('-x --extra', 'add extra characters', false)
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse();

const { length, save, numbers, symbols, extra } = program.opts();

const generatedPassword = createPassword(length, numbers, symbols, extra);

console.log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword));
