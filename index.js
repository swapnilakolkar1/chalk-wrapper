const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
console.log(chalk.red('Hello world!'));
console.log(chalk.yellow('Hello world!'));
const ChalkWrapper = (string, color) => {
    if (string && color) {
        switch (color) {
            case 'blue': console.log(chalk.blue(string)); break;
            case 'red': console.log(chalk.red(string)); break;
            case 'yellow': console.log(chalk.yellow(string)); break;

        }
    }
}
export default ChalkWrapper;