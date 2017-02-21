import { Component, OnInit, Inject } from '@angular/core';


@Component({
    selector: 'navbar',
    styles: [`
       md-tab-group {
         margin-bottom: -16px;
       }
    `],
    template: `
        <md-toolbar color="primary">
            <div class="flex flex-column flex-center full-height">
            <div class="flex">
                <img 
                    src="https://files.slack.com/files-pri/T2JS9A28J-F46682A13/shape-logo-color-no-text.png"
                    height="40px"
                    width="100px"
                    alt="Shape">
                <img
                    src="https://files.slack.com/files-pri/T2JS9A28J-F46687TL5/shape-api.png"
                    height="40px"
                    width="60px"
                    alt="api"
                    style="margin-left: 5px;">
                </div>
            </div>         
            
            <md-tab-group>
                <md-tab label="Docs"></md-tab>
                <md-tab label="Forge"></md-tab>
                <md-tab label="Tools"></md-tab>
            </md-tab-group>
        </md-toolbar>
    `
})
export class NavbarComponent implements OnInit {

    constructor() {

    }

    public ngOnInit(): void {

    }
}