#!/usr/bin/env node
import { MainProgram } from './Main';


if (require.main === module) {
  MainProgram(process.argv);
}

