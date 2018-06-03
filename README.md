# FirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5.

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


#Poznámky, postřehy, užitečné příkazy

##ng

###ng test

Spuštění testů s výstupem o pokrytí kódu (coverage-istambul)
Vytvoří výstup do složky "coverage", kde se dá v prohlížeči procházet

    ng test --code-coverage

Spuštění testů v režimu pro debuggování pomocí chrome debug
"ChromeTestDebug" je klíč odkazující na konfiguraci karma.conf.js na sekci "customLaunchers"

    ng test --browsers ChromeTestDebug

###ng e2e

TODO dopsat e2e testy

###ng lint

linter pro ? typescript; klasické lint rady, celkem dobré

###ng server

Klasické spuštění

    ng serve --open

Spuštění a poslouchání na všech IP hosta

    ng serve --host 0.0.0.0

###ng build

Normall build (debug)

    ng build

Production (release) build is much smaller and optimized

    ng buld --prod

Produkční build s přesměrováním mimo root (třeba podsložka apod.)

    ng build --prod --base-href="http://mysite.com/someangular..."