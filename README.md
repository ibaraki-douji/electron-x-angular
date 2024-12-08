# Angular x Electron

This project is a template for creating Windows and Linux desktop applications using Angular 18 and Electron 31. (since i don't have any apple product, i can't test it on MacOS).

It also integreate [Ngx Electronizer](https://github.com/bampakoa/ngx-electronify/tree/master/packages/core/projects/electron) to make the integration between Angular and Electron easier.

## Versions

- Angular: 19 (tested from v17 to v19)
- Electron: 33 (tested from v30 to v33)
- NodeJS: 20.14 (tested only v20.14)


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

Before building, make sure all the icons are presents and the `package.json` is correctly configured.

Also check for the following fields in the `package.json` file:
- `name`: No special characters, no spaces, no uppercase (replace your spaces with `-` and your uppercase with lowercase)
- `version`: The version of your application (don't add any suffixes like `-dev` or `-beta`)
- `build.productName`: The name of your application. This is the same as the `name` field but with spaces and uppercase.
- `build.extraResources`: Path for custom resources (like icons, etc.), for now it's only taking the `.ico` files in the `public` folder.


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