import { Component, OnInit, Inject, Input, Output } from '@angular/core';


@Component({
    selector: 'sidenav',
    styles: [

    ],
    template: `
        <md-sidenav #sidenav
            mode="side"
            opened="true">
            <h1>Sidenav</h1>
        </md-sidenav>
    `
})
export class SidenavComponent implements OnInit {

    @Input() references: any[];

    constructor() {

    }

    public ngOnInit(): void {

    }
}
