#!/usr/bin/env node
import {mainProgram} from './main';

if (require.main === module) {
    mainProgram(process.argv);
}

