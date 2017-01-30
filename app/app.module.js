import * as angular from 'angular';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';
import uirouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import "angular-material/angular-material.min.css"
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { SidenavComponent } from './components/common/sidenav/sidenav.component';
import { DocsComponent } from './components/docs/docs.component';
import { Store } from './store/store.service';
import { schemaReducer } from './reducers/schema.reducer';
import { BreadcrumbsComponent } from './components/common/breadcrumbs/breadcrumbs.component';


const appDependencies = [
    ngMaterial,
    uirouter,
];

export default angular
    .module("app", appDependencies)
    .config(appConfig)
    .component("app", AppComponent)
    .component("navbar", NavbarComponent)
    .component("sidenav", SidenavComponent)
    .component("docs", DocsComponent)
    .component("breadcrumbs", BreadcrumbsComponent)
    .factory("store", () => new Store([schemaReducer]))
    .name;