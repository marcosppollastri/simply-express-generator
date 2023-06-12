// Prompter.test.ts

import { Prompter } from '@src/classes';
import * as inquirer from 'inquirer';
import { config } from '@src/config/index';

jest.mock('inquirer');

describe('Prompter', () => {
  it('should return the user\'s project type selection', async () => {
    // Mock the user selecting 'Simply Express + TS'
    (inquirer.prompt as unknown as jest.Mock).mockResolvedValueOnce({
      projectType: config.EXPRESS_TS_REPO
    });

    const result = await Prompter.ask();

    expect(result).toEqual({ projectType: config.EXPRESS_TS_REPO });
    expect(inquirer.prompt).toHaveBeenCalledWith([
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
  });
});
