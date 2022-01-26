#!/usr/bin/env node
var program= require('commander');
//var chalk= require('chalk');
//var clipboardy= require('clipboardy');
var log= console.log;
var createPassword= require('./utils/createPassword');
var savePassword= require('./utils/savePassword');
//var {clipboardy}= require('clipboardy');



program.version('1.0.0').description('Simple Password Generator')
program
// .Command('generate')
// .action(function () {
//         console.log('Generated');
//     })
.option('-l, --length <number>','length of password','8') 
.option('-s, --save','save password to password.txt') 
.option('-nn, --no-numbers','remove numbers') 
.option('-ns, --no-symbols','remove symbols') 
.parse()
const {length, save, numbers, symbols}=program.opts();
//console.log(numbers, symbols);

//clipboardy.writeSync(generatedPassword); 
var generatedPassword= createPassword(length, numbers, symbols);

if(save){
    savePassword(generatedPassword);
}
log('Generated Password: '+generatedPassword);
//log(chalk.Chalk.blue('Generated Password: ') + chalk.bold(generatedPassword));
log('Password copied to clipboard');