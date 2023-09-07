import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

console.log(argv[2]);
const color = randomColor({ hue: argv[2], luminosity: argv[3] });

console.log(
  chalk.hex(color).bold(`
###############################
###############################
###############################
#####                     #####
#####       ${color}      #####
#####                     #####
###############################
###############################
###############################`),
);
