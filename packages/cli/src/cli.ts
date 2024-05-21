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
  .option('-i, --sourcePath <string>', 'Relative or absolute file path to the input file')
  .option(
    '-o, --outputPath <string>',
    'Optional relative or absolute file path to the JSON to be written'
  )
  .option('-s, --separator <char>', 'Comment separator for different object properties', ',')
  .option('-l, --labelText <string>', 'The labelText you want at the top of the accordion')
  .option(
    '-b, --basePath <string>',
    'The string you are passing to registerDefaults for the component theme'
  )
  .option('-e, --expanded', 'The initial accordion should be expanded');

program.parse();

const options = program.opts<IOptions>();

console.log(options);
