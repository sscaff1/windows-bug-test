import { Command } from 'commander';

const program = new Command();

interface IOptions {
  inputPath: string;
  outputPath?: string;
}

program
  .name('echo-commander')
  .description('Logs out an input path and output path');

program
  .option('-i, --inputPath <string>', 'Input path')
  .option('-o, --outputPath <string>', 'Output path');

program.parse();

const options = program.opts<IOptions>();

console.log(options);
