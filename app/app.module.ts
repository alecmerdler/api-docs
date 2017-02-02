import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { SidenavComponent } from './components/common/sidenav/sidenav.component';
import { DocsComponent } from './components/docs/docs.component';
import { MaterialModule, OVERLAY_PROVIDERS, InteractivityChecker, MdPlatform } from '@angular/material';
import { SchemaService } from './services/schema/schema.service';
import { SchemaServiceGraphQL } from './services/schema/schema.service.graphql';
import "primeng/resources/themes/omega/theme.css";
import "primeng/resources/primeng.min.css";
import "@angular/material/core/theming/prebuilt/deeppurple-amber.css";
import "hammerjs";


const routes = [
    {
        path: '',
        component: DocsComponent
    },
];

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        MaterialModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
        OVERLAY_PROVIDERS,
        { provide: InteractivityChecker, useClass: InteractivityChecker },
        { provide: MdPlatform, useClass: MdPlatform },
        { provide: SchemaService, useClass: SchemaServiceGraphQL },
    ],
    declarations: [
        AppComponent,
        SidenavComponent,
        NavbarComponent,
        DocsComponent,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {

}
