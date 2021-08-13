# Vermont

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

## In particular, this is how I created this from the prerequisites (nodejs and npm):
```
$ node --version
v16.6.1
$ npm --version
7.20.5

$ npm exec --package=@angular/cli -- ng new vermontApp --minimal
```

Note: this downloads the Angular CLI locally and calls the Angular `ng` program to create a new project.
You might see people tell you to `npm install -g @angular/cli` so you have the Angular CLI installed globally
on your computer but it is not a good idea to install things globally unless you really think you need to.
For one, you'll need admin priviledges and it might install node modules over what may be installed by your
Linux distribution's own package manager, possibly leading to obscure errors when installing or uninstalling packages.
Keep things local if possible.

The new project that's created will also have the Angular CLI installed as a dependency, so once you're in the new
project, you can run ng by using `npx ng <args...>`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

In my case, the server will be running within a VM, so I need to bind it to the host-only network interface in order to access it from my host (i.e. the laptop's browser): `npx ng serve --host 192.168.56.21`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## My Code Edits

I split off the html into its own file by substituting the `template: ` property with `templateUrl: 'app.component.html'`.

I wanted to create random names, so I looked up `random names` on `https://www.npmjs.com/`, and then used `npm i unique-names-generator`.

Now in the code, I can import using `import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';`.
