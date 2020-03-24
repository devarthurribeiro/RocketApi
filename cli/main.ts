import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';


import files from './lib/files';
import inquirer from './lib/inquirer';

const log = (d:string) => console.log(d);

clear();


async function run() {
  inquirer
  log(
    chalk.yellow(
      figlet.textSync('RocketApi', { horizontalLayout: 'full', })
    )
  );

  if (files.directoryExists('package.json')) {
    const credentials = await inquirer.askRocketApiCredentials();
  }
}

run();