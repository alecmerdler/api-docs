import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import "primeng/resources/themes/omega/theme.css";
import "primeng/primeng.min.css";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(routes),
    ],
    providers: [

    ],
    declarations: [

    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {

}