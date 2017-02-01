import { Component, OnInit, Inject, Input, Output } from '@angular/core';
import { TreeNode } from 'primeng/primeng';


@Component({
    selector: 'sidenav',
    styles: [

    ],
    template: `
        <div style="display: flex; flex-direction: column; justify-content: flex-start;">
            <h1 style="background: purple;">Testing</h1>
        </div>
    `
})
export class SidenavComponent implements OnInit {

    @Input() references: any[];

    constructor() {

    }

    public ngOnInit(): void {

    }
}
