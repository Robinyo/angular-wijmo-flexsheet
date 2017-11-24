# Excel-like Worksheet

A sample Angular project that uses the wijmo FlexSheet component:

![angular-ng-bootstrap screenshot](https://github.com/Robinyo/angular-wijmo-flexsheet/blob/master/excel-like-worksheet-with-ribbon.png)

## Development

To clone the project:

    git clone https://github.com/Robinyo/angular-wijmo-flexsheet.git

To install the project's dependencies:

    cd angular-wijmo-flexsheet
    npm install

The wijmo FlexSheet [download](https://www.grapecity.com/en/wijmo-flexsheet) includes npm images of the Wijmo external 
modules in the `/NpmImages` folder. You can add wijmo to your project using npm:

    npm install --save ~/downloads/wijmo-5-enterprise/NpmImages/wijmo-amd-min

To build the project:

    ng build

**Note:** The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

To launch the project:

    ng serve

Then navigate to:
 
    http://localhost:4200/
     
**Note:** The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Scaffolding

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.3.

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Documentation

Run `npm run compodoc` to generate documentation (using Compodoc) in the `/documentation` directory.

We can use Python's SimpleHTTPServer to serve the files in the `/documentation` directory:

```
cd documentation
python -m SimpleHTTPServer 8080
```

Open your browser and navigate to:
```
http://localhost:8080
``` 

## Resources 

## Blog Posts 
* Rob Ferguson's blog: [Angular CLI, Angular 4 and wijmo's FlexSheet](https://robferguson.org/blog/2017/08/28/angular-cli-angular-4-and-wijmo-flexsheet/)
* Rob Ferguson's blog: [Angular 4 and Sibling Component Interaction](https://robferguson.org/blog/2017/08/31/angular-4-and-sibling-component-interaction/)
* Rob Ferguson's blog: [A simple logging service for Angular 4](https://robferguson.org/blog/2017/09/09/a-simple-logging-service-for-angular-4/)
