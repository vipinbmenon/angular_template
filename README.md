# Angular 12.1.4 project template 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


# Module
## Core
Core module is dedicated to singleton providers. These services contain business logic used by other core services or app’s features.

## Layout
This module contain the layout and nav bar related to application.

## Shared
Shared module is a place to store all the reusable  components, directives, pipes, helpers and types

## Views
Views module is another module that usually turns out to be quite simple. It holds the views that are not a part of any feature and whose routing paths are defined in AppRoutingModule. An example of such a view is a 404 page (notfound404)

# Directory Structure
```
.
├── app
│   ├── app.component.html
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── app-routing.module.ts
│   ├── core
│   │   ├── constants
│   │   │   ├── index.ts
│   │   │   └── themes.ts
│   │   ├── core.module.ts
│   │   ├── guard
│   │   │   ├── auth.guard.ts
│   │   │   ├── index.ts
│   │   │   ├── module-import.guard.ts
│   │   │   └── noauth.guard.ts
│   │   ├── interceptor
│   │   │   ├── index.ts
│   │   │   └── token.interceptor.ts
│   │   └── service
│   │       ├── auth.service.ts
│   │       ├── index.ts
│   │       └── theme.service.ts
│   ├── layout
│   │   ├── components
│   │   │   ├── authlayout
│   │   │   │   ├── authlayout.component.html
│   │   │   │   ├── authlayout.component.scss
│   │   │   │   └── authlayout.component.ts
│   │   │   ├── contentlayout
│   │   │   │   ├── contentlayout.component.html
│   │   │   │   ├── contentlayout.component.scss
│   │   │   │   └── contentlayout.component.ts
│   │   │   ├── index.ts
│   │   │   └── sidenav
│   │   │       ├── sidenav.component.html
│   │   │       ├── sidenav.component.scss
│   │   │       └── sidenav.component.ts
│   │   └── layout.module.ts
│   ├── modules
│   │   ├── auth
│   │   │   ├── auth.module.ts
│   │   │   ├── auth-routing.module.ts
│   │   │   └── components
│   │   │       ├── index.ts
│   │   │       └── login
│   │   │           ├── login.component.html
│   │   │           ├── login.component.scss
│   │   │           └── login.component.ts
│   │   └── contact
│   │       ├── components
│   │       │   ├── contactus
│   │       │   │   ├── contactus.component.html
│   │       │   │   ├── contactus.component.scss
│   │       │   │   └── contactus.component.ts
│   │       │   └── index.ts
│   │       ├── contact.module.ts
│   │       └── contact-routing.module.ts
│   ├── shared
│   │   └── shared.module.ts
│   └── views
│       ├── components
│       │   ├── index.ts
│       │   └── notfound404
│       │       ├── notfound404.component.html
│       │       ├── notfound404.component.scss
│       │       └── notfound404.component.ts
│       └── views.module.ts
├── assets
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
├── favicon.ico
├── index.html
├── main.ts
├── polyfills.ts
├── styles.scss
└── test.ts

```

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
