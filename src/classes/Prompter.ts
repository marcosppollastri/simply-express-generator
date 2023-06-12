import { config } from '@src/config/index';
import * as inquirer from 'inquirer';

type PrompterResponses = {
    projectType: string
}

export class Prompter {
    static async ask(): Promise<PrompterResponses> {
        return inquirer.prompt<PrompterResponses>([
            {
                type: 'list',
                name: 'projectType',
                message: 'What template do you want to use for your project?',
                choices: [
                    {name: 'Simply Express + TS', value: config.EXPRESS_TS_REPO},
                    {name: 'Simply NPM Library + TS', value: config.NPM_TS_REPO}
                ]
            }
        ]);
    }
}