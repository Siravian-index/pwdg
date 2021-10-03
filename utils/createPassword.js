const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';
const extra = '()[]{}<>.~|\\/';

const createPassword = (
  length = 10,
  hasNumbers = true,
  hasSymbols = true,
  hasExtra = false
) => {
  let chars = alpha;
  hasNumbers ? (chars += numbers) : '';
  hasSymbols ? (chars += symbols) : '';
  hasExtra ? (chars += extra) : '';
  return generatePassword(length, chars);
};

const generatePassword = (length, chars) => {
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

module.exports = createPassword;
