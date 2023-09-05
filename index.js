import chalk from 'chalk';
import randomColor from 'randomcolor';

function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function generateColoredBlock(hexColor, colorName) {
  const coloredChar = chalk.hex(hexColor)('#');
  const block = Array(9).fill(coloredChar.repeat(31)).join('\n');

  const middleRow = Math.floor(block.split('\n').length / 2); // Calculate the middle row
  const middleCol = Math.floor(block.split('\n')[0].length / 2) - (hexColor.length / 2); // Calculate the middle column

  const lines = block.split('\n');
  lines[middleRow] = lines[middleRow].substring(0, middleCol) + hexColor + ' ' + colorName + lines[middleRow].substring(middleCol + hexColor.length + colorName.length + 1);

  return lines.join('\n');
}

const args = process.argv.slice(2);
const hue = args[0] || '';
const luminosity = args[1] || '';
const color = randomColor({
  hue: hue,
  luminosity: luminosity,
});

console.log(`Random Color: ${color}`);

const hexColor = color.slice(1); // Remove the '#' from the color code
const colorName = randomColor({ hue: hexColor, format: 'name' });

const coloredBlock = generateColoredBlock(hexColor, colorName);
console.log(coloredBlock);
