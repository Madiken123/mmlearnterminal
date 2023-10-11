import chalk from 'chalk';
import boxen from 'boxen';


function write(text){

    process.stdout.write(text);

}

 

console.log(boxen(chalk.bgGreen.whiteBright('Madikene'), {borderStyle:'round'}))
console.log(boxen(chalk.blue.bgRed.bold ('kass'), {padding: 5, margin: 4, borderStyle: 'double'}));
console.log(boxen(chalk.yellow.bgRed.bold('Karu metsas'), {title: 'Seen ', titleAlignment: 'center'}));
console.log(boxen(chalk.bgCyan.magentaBright('Madikene'), {margin: 7,  padding: 9, borderStyle:'arrow'}))
console.log(boxen(chalk.bgMagentaBright.green('Konn'), {padding: 3, borderStyle:'bold'}))
console.log(boxen(chalk.bgYellow.magentaBright('Härg'), {margin: 7,  padding: 2, borderStyle:'classic', backgroundColor: 'blue', borderColor: 'red'}))