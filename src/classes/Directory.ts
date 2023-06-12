import { existsSync, mkdirSync, rmSync } from 'fs';
import { resolve } from 'node:path';
import * as readline from 'readline';
import * as inquirer from 'inquirer'

export interface ICreateDirectoryOptions {
    overwrite: boolean
}

export class Directory {
    private readonly _path: string;

    constructor(path: string, private readonly origin: string = __dirname) {
        this._path = resolve(this.origin, path);
    }

    public get path() {
        return this._path;
    }

    exists(): boolean {
        return existsSync(this.path);
    }

    getSubDirectory(subDirectory: string): Directory {
        const subDirectoryPath = resolve(this.path, subDirectory);
        return new Directory(subDirectoryPath);
    }

    async create(options: ICreateDirectoryOptions = { overwrite: false }): Promise<void> {
        return new Promise(async (resolve, reject) => {
            if (this.exists()) {
                if (options.overwrite) {
                    rmSync(this.path, { recursive: true });
                    mkdirSync(this.path, { recursive: true });
                    resolve();
                } else {
                    const answers = await inquirer.prompt<{ overwrite: boolean }>([
                        {
                            type: 'confirm',
                            name: 'overwrite',
                            message: `Directory ${this.path} already exists.\nDo you want to overwrite?`,
                            default: false
                        }
                    ]);

                    if (answers.overwrite) {
                        rmSync(this.path, { recursive: true });
                        mkdirSync(this.path, { recursive: true });
                        resolve();
                    } else {
                        reject(new Error(`Directory ${this.path} already exists.`));
                    }
                }
            } else {
                mkdirSync(this.path, { recursive: true });
                resolve();
            }
        });
    }
}
