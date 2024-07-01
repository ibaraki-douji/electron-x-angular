# Angular x Electron

This project is a template for creating Windows and Linux desktop applications using Angular 18 and Electron 31. (since i don't have any apple product, i can't test it on MacOS).

## Versions

- Angular: 18 (tested from v17 to v18)
- Electron: 31 (tested from v30 to v31)
- NodeJS: 20.14.X (tested from v20.14 to v20.14)


## Getting Started

To get started, clone the repository and run `npm install` to install the dependencies.

```bash
git clone https://git.ibaraki.app/examples/electron-x-angular.git
cd electron-x-angular
npm install
```

## Development

To start the development server, run `npm run start`. This will start the Angular development server and the Electron application.

```bash
npm run start
```

You might need to reload the Electron application after the Angular development server has started. You can do this by pressing `Ctrl + R` or `Cmd + R` in the Electron window.

## Building / Packaging

To build the application, run `npm run build`. This will build the Angular application and package it with Electron.

```bash
npm run build
```

You can also build the application for a specific platform by running `npm run build:win`, `npm run build:linux`.

```bash
npm run build:win
npm run build:linux
```

The packaged application will be in the `dist` directory.

## Automated Builds

This repository is configured to automatically build the application for Windows and Linux using GitLab CI/CD. The artifacts are uploaded to the GitLab repository and can be downloaded from the [Package Registry](https://git.ibaraki.app/examples/electron-x-angular/-/packages).

### Development

The CI/CD pipeline is configured to build the application for Windows and Linux on every push to the `dev` branch.
It will publish a specific version of the application to the GitLab Package Registry with the package and version ending with `-dev`.

### Release

The CI/CD pipeline is configured to build the application for Windows and Linux on every push to the `master` branch.
It will publish a specific version of the application to the GitLab Package Registry with the package and version without additional suffixes.
It will also create a new release on the GitLab repository with the version number and with direct download links to the artifacts.