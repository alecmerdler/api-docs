import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { SidenavComponent } from './components/common/sidenav/sidenav.component';
import { MaterialModule, OVERLAY_PROVIDERS, InteractivityChecker, MdPlatform } from '@angular/material';
import "primeng/resources/themes/omega/theme.css";
import "primeng/resources/primeng.min.css";
import "@angular/material/core/theming/prebuilt/deeppurple-amber.css";
import "hammerjs";

const routes = [];


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        MaterialModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
        OVERLAY_PROVIDERS,
        {
            provide: InteractivityChecker,
            useClass: InteractivityChecker
        },
        {
            provide: MdPlatform,
            useClass: MdPlatform
        },
    ],
    declarations: [
        AppComponent,
        SidenavComponent,
        NavbarComponent,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {

}
