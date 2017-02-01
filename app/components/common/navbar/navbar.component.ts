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
            <span>Shape API</span>
            
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