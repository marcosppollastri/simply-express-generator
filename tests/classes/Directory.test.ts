import { Directory } from '@src/classes';
import { existsSync, mkdirSync, rmSync } from 'fs';
import { resolve } from 'node:path';
import * as inquirer from 'inquirer';

jest.mock('fs', () => ({
  existsSync: jest.fn(),
  mkdirSync: jest.fn(),
  rmSync: jest.fn(),
}));

jest.mock('inquirer', () => {
    return {
      prompt: jest.fn(),
    };
  });
  

describe('Directory', () => {
  const TEST_DIR = '/some/directory';
  
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return the correct path', () => {
    const dir = new Directory(TEST_DIR);
    expect(dir.path).toBe(resolve(TEST_DIR));
  });

  it('should check if a directory exists', () => {
    const dir = new Directory(TEST_DIR);
    dir.exists();
    expect(existsSync).toHaveBeenCalledWith(TEST_DIR);
  });

  it('should create a new directory when it does not exist', async () => {
    (existsSync as jest.Mock).mockReturnValue(false);
    const dir = new Directory(TEST_DIR);
    await dir.create();
    expect(mkdirSync).toHaveBeenCalledWith(TEST_DIR, { recursive: true });
  });

  test.each([
    [true, true],
    [false, false],
])('should handle user confirmation: %s', async (userConfirmation, shouldOverwrite) => {
    (existsSync as jest.Mock).mockReturnValue(true);
    const dir = new Directory(TEST_DIR);

    // Mock inquirer to return userConfirmation
    (inquirer.prompt as unknown as jest.Mock).mockResolvedValue({ overwrite: userConfirmation });

    if (shouldOverwrite) {
        await dir.create({ overwrite: false });
        expect(rmSync).toHaveBeenCalledWith(TEST_DIR, { recursive: true });
        expect(mkdirSync).toHaveBeenCalledWith(TEST_DIR, { recursive: true });
    } else {
        await expect(dir.create({ overwrite: false })).rejects.toThrow();
        expect(rmSync).not.toHaveBeenCalled();
        expect(mkdirSync).not.toHaveBeenCalled();
    }
});
});
