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

This project is in early development and mostly for personal use. It's planned to include more features and more complete template in the future.

## Features

- Quick setup with TypeScript, Jest, ESLint. ✅
- Personalized folder organization. 🚧
- Simple command to generate a new project. ✅

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

## Options

Simply Express Generator will ask you if you want to overwrite if the project directory already exists, you can bypass this with the `-o --overwrite` flag.

```bash
simply-express-generator new <project-name> --overwrite
```


## Contributing

Contributions, issues and feature requests are welcome! Feel free to check [issues page](https://github.com/marcosppollastri/simply-express-generator/issues).

## License

This project is [ISC](https://opensource.org/licenses/ISC) licensed.
