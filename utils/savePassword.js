const fs = require('fs');
const path = require('path');
const os = require('os');
const chalk = require('chalk');

const chmod = 666;

const savePassword = (password) => {
  fs.open(
    path.join(__dirname, '../', 'password.txt'),
    'a',
    chmod,
    (error, fd) => {
      console.log(fd);
      fs.write(fd, password + os.EOL, null, 'utf-8', () => {
        fs.close(fd, () => {
          console.log(chalk.yellow('Password saved to password.txt'));
        });
      });
    }
  );
};

module.exports = savePassword;
