import 'zone.js/dist/zone.js';
import 'reflect-metadata';
// import 'core-js/es7/reflect';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';


const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);