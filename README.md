# Simply Express Generator

<div align="center">

<!-- [![Build Status](https://github.com/marcosppollastri/simply-express-generator/actions/workflows/main.yml/badge.svg)](https://github.com/marcosppollastri/simply-express-generator/actions) -->
[![NPM version](https://img.shields.io/npm/v/simply-express-generator.svg?style=flat)](https://www.npmjs.com/package/simply-express-generator)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

</div>

<p align="center">
    <img src="https://github.com/marcosppollastri/simply-express-generator/blob/master/logo.svg?raw=true" alt="Logo" width="500" />
</p>

Simply Express Generator is a simple command-line utility for generating barebones Express/TypeScript projects. If you're tired of existing Express project generators that are either outdated or too bloated, this utility is for you.

This project is in active development and aims to offer more features and more comprehensive templates in the future.

## 🌟 New Features

- Multi-template support: Choose the template that best suits your needs - `Express + TS` or `NPM Library + TS`. 💪
- Improved user interaction: Enjoy a better experience during project setup. 😎

## 🚀 Templates You Can Generate

1. **Express + TS**: A simple ExpressJS server written in TypeScript. 
2. **NPM Library + TS**: A simple starter template for creating an NPM package written in TypeScript.

Both templates are designed to get your project up and running in no time!

## 🔗 Template Repositories

- [Express + TS Template Repository](https://github.com/marcosppollastri/simply-express-ts-template.git)
- [NPM Library + TS Template Repository](https://github.com/marcosppollastri/simply-npm-package-template.git)

Feel free to contribute or use these as stand-alone templates!

## Getting Started

1. Install Simply Express Generator globally via npm:

    ```bash
    npm install -g simply-express-generator
    ```

2. Generate a new project:

    ```bash
    simply-express-generator new <project-name>
    ```

This will create a new folder with the specified project name and set up a base Express/TypeScript project inside.

### npx
You can also use `npx` to use Simply Express Generator without installing globally:

```bash
npx simply-express-generator new <project-name>
```
## Options
Simply Express Generator will ask you if you want to overwrite if the project directory already exists, you can bypass this with the `-o` `--overwrite` flag.

```bash
simply-express-generator new <project-name> --overwrite
```
## Contributing
Contributions, issues and feature requests are welcome! Feel free to check issues page.

## License
This project is [ISC](https://opensource.org/license/isc-license-txt/) licensed.