import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/common/sidenav/sidenav.component';
import { TreeModule } from 'primeng/primeng';
import "primeng/resources/themes/omega/theme.css";
import "primeng/resources/primeng.min.css";


const routes = [];


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        TreeModule,
        RouterModule.forRoot(routes),
    ],
    providers: [

    ],
    declarations: [
        AppComponent,
        SidenavComponent,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {

}