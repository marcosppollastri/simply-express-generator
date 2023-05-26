import { existsSync, mkdirSync, rmSync } from 'fs';
import { resolve } from 'node:path';
import * as readline from 'readline';

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

    create(options: ICreateDirectoryOptions = {
        overwrite: false
    }): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.exists()) {
                if (options.overwrite) {
                    rmSync(this.path, { recursive: true });
                    mkdirSync(this.path, { recursive: true });
                    resolve();
                } else {
                    const rl = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout
                    });

                    rl.question(`Directory ${this.path} already exists.\nDo you want to overwrite? (yes/no): `, (answer) => {
                        rl.close();
                        if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
                            rmSync(this.path, { recursive: true });
                            mkdirSync(this.path, { recursive: true });
                            resolve();
                        } else {
                            reject(new Error(`Directory ${this.path} already exists.`));
                        }
                    });
                }
            } else {
                mkdirSync(this.path, { recursive: true });
                resolve();
            }
        });
    }
}
