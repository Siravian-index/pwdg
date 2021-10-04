const fs = require('fs');
const path = require('path');
const os = require('os');
const chalk = require('chalk');

const chmod = 400;
const flag = 'a';

const savePassword = (password) => {
  fs.open(
    path.join(__dirname, '../', 'password.txt'),
    flag,
    chmod,
    (error, fd) => {
      fs.write(fd, password + os.EOL, null, 'utf-8', () => {
        fs.close(fd, () => {
          console.log(chalk.underline('Password saved to password.txt'));
        });
      });
    }
  );
};

module.exports = savePassword;
