import { Component, OnInit, Inject, Input, Output } from '@angular/core';


@Component({
    selector: 'sidenav',
    styles: [

    ],
    template: `
        <md-card style="height: 100%;">
            <md-card-title>
                <h3>Sidenav</h3>
            </md-card-title>
            <md-card-content>
                <span style="display: flex; flex-direction: column;"
                    *ngFor="let reference of references">
                    <a>{{ reference.name }}</a>
                </span>
            </md-card-content>
        </md-card>
    `
})
export class SidenavComponent implements OnInit {

    @Input() references: any[];

    constructor() {

    }

    public ngOnInit(): void {

    }
}
