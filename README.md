This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Setup 
   ##### Step1 : Node.js setup
 Angular requires Node.js version 10.x.
 
-  Run `curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh` add the PPA to the system to install Nodejs on Ubuntu.
-  Run `sudo bash  nodesource_setup.sh`
- Run `sudo apt-get install nodejs` to install  Node.js 

          -To check your version, run node -v in a terminal/console window.
          
You’ll also want to also install `npm`, the Node.js package manager. You can do this by typing :
 
 - Run `sudo apt install npm`   to install modules and packages to use with Node.js
 
			-To check your version, run npm-v in a terminal/console window.

  ##### Step2 : Angular setup
 - Run `sudo npm install -g @angular/cli@` to install  the Angular CLI 
 
 - Run `npm install --save-dev @angular-devkit/build-angular` to install  @angular-devkit/build-angular as dev dependency. This package is newly introduced in Angular 6.0
 
 ##### Step3 : Run the application

The Angular CLI includes a server, so that you can easily build and serve your app locally.
 - Run `cd cdcs_angular_demo_frontend/src/app`   to go to the workspace folder (app)

- Run `ng serve --open`   to launch the server and  open the browser to http://localhost:4200/.

The `ng serve` command launches the server, watches your files, and rebuilds the app as you make changes to those files

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
