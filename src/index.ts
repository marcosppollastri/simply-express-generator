import { Command } from 'commander';
import * as fs from 'fs-extra';
import * as path from 'node:path';

const program = new Command();

program
  .version('0.0.1')
  .command('new <project-name>')
  .description('Create a new project')
  .action(async (projectName: string) => {
    try {
      console.log(`Creating a new project: ${projectName}`);
      const templateDir = path.resolve(__dirname, '../template/express-ts');
      const targetDir = path.resolve(process.cwd(), projectName);

      await fs.copy(templateDir, targetDir);
      console.log('Project created!');
    } catch (error) {
      console.error('Error while creating your project: ', error.message);
      throw error
    }
    
  });

program.parse(process.argv);
