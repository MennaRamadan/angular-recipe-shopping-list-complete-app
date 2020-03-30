# AngularProApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.0.

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

## Further help
Creating components,
Passing Data using EventEmitter,
Passing Data using Data Binding (@input()),
Passing Data to 2 parents levels,
Using @ViewChild(),
Creating Custom Directive,
Creating services and passing parameters through components using EventEmitter,
Adding Routing,
Adding child routes,
Using Subject as Observable
Forms using Template method,
adding new FornArray in reactive forms
Using Reactive form approach
Using Firebase,
sperating Recipes, Shopping list route and module files,
Dealing with shared Module,
Dealing with core modulw to add services,
Using Lazy loading to load only component files, dependencies, declaration only when component loaded,
creating service and use @Injectable or adding it in providers in app module will create an instance of the service throught all the application,
If we add a service in providers inside app module and another one inside shopping list for example that mean
there are 2 instances of of the service one shared across the app and another one for shopping list component,
If we add a service in shared folder which egalry loaded or injected in app module and also used in shopping list lazy loading component, this mean that all applicaion has one instance of the service but shopping list component has it's own instanve of the service ,
Just in time compilation (JIT) means that we write typescript and angular syntex like *ngIf and *ngFor then typesript compiler convert it to javascript after that JIT convert this to DOM instructions which run on the browser (occured at run time),
(AOT) Ahead of time this compile the template ahead of the execution time and no in the browser before the app is deployed,
to use AOT using ng build --prodو
I will use static hosting to host javascript, html and css as angular application




