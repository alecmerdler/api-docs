import * as angular from 'angular';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';
import uirouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import "angular-material/angular-material.min.css"
import { NavbarComponent } from './components/common/navbar/navbar.component';


const appDependencies = [
    ngMaterial,
    uirouter,
];

export default angular
    .module("app", appDependencies)
    .config(appConfig)
    .component("app", AppComponent)
    .component("navbar", NavbarComponent)
    .name;