import { Component, OnInit, OnChanges, Inject } from '@angular/core';
import { SchemaService } from '../../services/schema/schema.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ReferenceField } from '../../models/schema';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/from';


@Component({
    selector: 'docs',
    styles: [`
    
    `],
    template: `
        <md-card *ngIf="activeReference !== undefined">
            <md-card-title>
                <h3>
                    <code>{{ activeReference.name }}/{{ '{' }}id{{ '}' }}</code>
                </h3>
            </md-card-title>
            <md-card-subtitle>
                {{ activeReference.description }}
            </md-card-subtitle>
            <md-card-content>
                <h2>Fields</h2>
                <div class="flex">
                    <p-dataTable 
                        [value]="activeReference.fields"
                        class="flex-2">
                        <p-column 
                            field="name" 
                            header="Name">
                        </p-column>
                        <p-column 
                            field="description" 
                            header="Description">
                        </p-column>
                        <p-column 
                            field="type.name" 
                            header="Type">
                        </p-column>
                    </p-dataTable>
                    <div class="flex-1"></div>
                </div>
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