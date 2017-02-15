import { Component, OnInit, OnChanges, Inject } from '@angular/core';
import { SchemaService } from '../../services/schema/schema.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/from';


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
export class DocsComponent implements OnInit, OnChanges {

    private activeReference: any;

    constructor(@Inject(SchemaService) private schemaService: SchemaService,
                @Inject(ActivatedRoute) private route: ActivatedRoute) {

    }

    public ngOnInit(): void {
        this.route.params
            .filter(params => params['reference'] !== undefined)
            .subscribe((params: Params) => {
                console.log(params);
                this.schemaService.retrieveSchema("1.0")
                    .switchMap(schemaViewModel => Observable.from(schemaViewModel.objects))
                    .filter((object: any) => object.name === params['reference'])
                    .subscribe((object) => {
                        this.activeReference = object;
                    });
            });
    }

    public ngOnChanges(): void {

    }
}