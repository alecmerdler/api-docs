import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


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