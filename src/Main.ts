import * as moduleAlias from 'module-alias';
moduleAlias.addAlias('@src', __dirname);
import { Command } from 'commander';
import * as packageJson from '../package.json';
import * as fs from 'fs-extra';
import * as path from 'node:path';

export async function MainProgram(argv: string[]) {
    const program = new Command();
  
    program
      .version(packageJson.version)
      .command('new <project-name>')
      .description('Create a new project')
      .action(async (projectName: string) => {
        console.log(`Creating a new project: ${projectName}`);
        const templateDir = path.resolve(__dirname, '../../template/simply-express-ts');
        const targetDir = path.resolve(process.cwd(), projectName);
  
        await fs.copy(templateDir, targetDir);
        console.log('Project created!');
      });
  
    await program.parseAsync(argv);
  }
  