import { Component, OnInit, Inject, Input } from '@angular/core';


@Component({
    selector: 'docs',
    styles: [`
    
    `],
    template: `
        <md-card>
            <md-card-title>
                <h3>
                    <code>{{ activeReference.name }}/{{ '{' }}id{{ '}' }}</code>
                </h3>
            </md-card-title>
            <md-card-content>
            
            </md-card-content>
        </md-card>
    `
})
export class DocsComponent implements OnInit {

    @Input() private activeReference: any;

    constructor() {

    }

    public ngOnInit(): void {
        this.activeReference = {
            name: "campaigns",
        };
    }
}