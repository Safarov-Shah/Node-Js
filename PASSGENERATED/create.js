var chalk=require('chalk');

var error = chalk.Chalk(bold.red);
var warning = chalk.supportsColorStderr(hex('#FFA500')); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));