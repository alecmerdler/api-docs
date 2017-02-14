import { Component, OnInit, Inject, Input } from '@angular/core';
import { SchemaService } from '../../services/schema/schema.service';


@Component({
    selector: 'docs',
    styles: [`
    
    `],
    template: `
        <md-card>
            <md-card-title>
                <h3 *ngIf="activeReference !== undefined">
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

    constructor(@Inject(SchemaService) private schamaService: SchemaService) {

    }

    public ngOnInit(): void {
        this.schamaService.activeReference().subscribe((newReference) => {
            console.log(newReference);
            this.activeReference = newReference;
        });
    }
}