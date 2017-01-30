import * as angular from 'angular';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';
import uirouter from 'angular-ui-router';
import ngMaterial from 'angular-material';


const appDependencies = [
    ngMaterial,
    uirouter,
];

export default angular
    .module("app", appDependencies)
    .config(appConfig)
    .component("app", AppComponent)
    .name;