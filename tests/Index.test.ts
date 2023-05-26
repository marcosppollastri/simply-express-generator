import { Command } from 'commander';
import * as fs from 'fs-extra';
import * as path from 'node:path';

jest.mock('fs-extra');
jest.mock('path');
jest.mock('commander', () => {
  return { Command: jest.fn() };
});

describe.skip('Test the command line application', () => {
  const copyMock = jest.mocked(fs.copy);
  const resolveMock = jest.mocked(path.resolve);
  // const MockedCommand = jest.createMockFromModule(typeof Command) as Command;
  
  beforeEach(() => {
    jest.clearAllMocks()
  });

  it('Should create a new project', async () => {
    // const projectName = 'test-project';

    // resolveMock.mockImplementation((...args) => {
    //   return args.join('/');
    // });

    // copyMock.mockImplementation(() => Promise.resolve());

    // const commandInstance = MockedCommand
    // commandInstance.version = jest.fn().mockReturnThis();
    // commandInstance.command = jest.fn().mockReturnThis();
    // commandInstance.description = jest.fn().mockReturnThis();
    // commandInstance.action = jest.fn().mockImplementation((cb) => {
    //   cb(projectName);
    //   return commandInstance;
    // });
    
    // // Here we simulate process.argv values
    // await run(['node', 'test', 'new', projectName]);

    // expect(commandInstance.version).toHaveBeenCalledWith(expect.any(String));
    // expect(commandInstance.command).toHaveBeenCalledWith('new <project-name>');
    // expect(commandInstance.description).toHaveBeenCalledWith('Create a new project');
    // expect(commandInstance.action).toHaveBeenCalledWith(expect.any(Function));
    // expect(resolveMock).toHaveBeenCalledWith(expect.any(String), '../template/simply-express-ts');
    // expect(resolveMock).toHaveBeenCalledWith(process.cwd(), projectName);
    // expect(copyMock).toHaveBeenCalledWith(expect.any(String), expect.any(String));
  });
});
