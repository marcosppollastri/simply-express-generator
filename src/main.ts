import * as moduleAlias from 'module-alias';
moduleAlias.addAlias('@src', __dirname);
import {Command} from 'commander';
import * as packageJson from '../package.json';
import * as fs from 'fs-extra';
import { execSync } from 'node:child_process';
import { Directory } from '@src/classes';
import { Prompter } from './classes';

export async function mainProgram(argv: string[]) {
    const program = new Command();
    program
        .version(packageJson.version)
        .command('new <project-name>')
        .option('-o, --overwrite', 'Overwrites the target directory')
        .description('Create a new project')
        .action(async (projectName: string, options: {overwrite: boolean}) => {
            const { overwrite } = options;
            try {
                console.log(`Creating a new project: ${projectName}`);
                const { projectType } = await Prompter.ask();
                const temp = new Directory('../temp', __dirname);
                const target = new Directory(projectName, process.cwd());
                const gitOnTarget = target.getSubDirectory('.git');
                await temp.create({overwrite: true});
                await target.create({overwrite});

				


                // Clone template into a temporary directory
                execSync(`git clone ${projectType} ${temp.path}`, {
                    stdio: 'inherit', // Show git output in the console
                });

                // Copy template into the target directory
                fs.copySync(temp.path, target.path, {
                    overwrite: true
                });

                // Delete the temporary directory
                fs.removeSync(gitOnTarget.path);
                fs.removeSync(temp.path);


                console.log('Project created!');
                console.log('Go to the project folder and install the dependencies with npm or yarn');
                console.log('Test the project with npm run dev');
            } catch (error) {
                console.error('Error while creating your project: ', error.message);
                throw error;
            }
        });
    await program.parseAsync(argv);
}
