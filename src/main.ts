import * as moduleAlias from 'module-alias';
moduleAlias.addAlias('@src', __dirname);
import {Command} from 'commander';
import * as packageJson from '../package.json';
import * as fs from 'fs-extra';
import * as path from 'node:path';
import { execSync } from 'node:child_process';
import { config } from '@src/config';

export async function mainProgram(argv: string[]) {
    const program = new Command();
    program
        .command('new <project-name>')
        .description('Create a new project')
        .version(packageJson.version)
        .action(async (projectName: string) => {
            try {
                console.log(`Creating a new project: ${projectName}`);
                const tempDir = path.resolve(__dirname, '../temp');
                if(!fs.existsSync(tempDir)){
                    fs.mkdirSync(tempDir);
                } else {
                    fs.removeSync(tempDir);
                    fs.mkdirSync(tempDir);
                }
                const targetDir = path.resolve(process.cwd(), projectName);
                const gitOnTarget = path.resolve(targetDir, '.git');

				


                // Clone template into a temporary directory
                execSync(`git clone ${config.TEMPLATE_REPO} ${tempDir}`, {
                    stdio: 'inherit', // Show git output in the console
                });

                // Copy template into the target directory
                await fs.copySync(tempDir, targetDir, {
                    overwrite: true
                });

                // Delete the temporary directory
                await fs.removeSync(gitOnTarget);
                await fs.removeSync(tempDir);


                console.log('Project created!');
            } catch (error) {
                console.error('Error while creating your project: ', error.message);
                throw error;
            }
        });
    await program.parseAsync(argv);
}
