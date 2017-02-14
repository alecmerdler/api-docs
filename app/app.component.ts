import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SchemaService } from './services/schema/schema.service';


@Component({
    selector: 'app',
    styles: [`
       :host >>> .flex {
            display: flex;
        }
        :host >>> .flex-column {
            flex-direction: column;
        }
        :host >>> .flex-center {
            justify-content: center;
        }
        :host >>> .flex-start {
            justify-content: flex-start;
        }
        :host >>> .flex-end {
            justify-content: flex-end;
        }
        :host >>> .flex-space-around {
            justify-content: space-around;
        }
        :host >>> .flex-align-center {
            align-items: center;
        }
        :host >>> .flex-1 {
            flex: 1;
        }
        :host >>> .flex-2 {
            flex: 2;
        }
        :host >>> .flex-3 {
            flex: 3;
        }
        :host >>> .flex-4 {
            flex: 4;
        }
        :host >>> .flex-5 {
            flex: 5;
        }
        :host >>> .flex-6 {
            flex: 6;
        }
        :host >>> .flex-7 {
            flex: 7;
        }
        :host >>> .flex-8 {
            flex: 8;
        }
        :host >>> .flex-9 {
            flex: 9;
        }
        :host >>> .flex-10 {
            flex: 10;
        }
    `],
    template: `
        <div class="flex flex-column">
            <navbar></navbar>
            
            <div class="flex">
                <div class="flex-1">
                    <sidenav 
                        [schemaViewModel]="schemaViewModel"
                        (objectSelected)="onReferenceSelect($event)">
                    </sidenav>
                </div>
                
                <div class="flex-4">
                    <router-outlet></router-outlet>
                </div>
            </div>
        </div>
    `
})
export class AppComponent implements OnInit {

    private schemaViewModel: any;
    private activeReference: any;

    constructor(@Inject(Router) private router: Router,
                @Inject(SchemaService) private schemaService: SchemaService,
                @Inject(ActivatedRoute) private route: ActivatedRoute) {

    }

    public ngOnInit(): void {
        this.schemaService.retrieveSchema()
            .subscribe((schemaViewModel: any) => {
                this.schemaViewModel = schemaViewModel;
            });
        this.route.params.subscribe((params: Params) => {
            console.log(params);
        });
    }

    public onReferenceSelect($event: any): void {
        this.router.navigate([`./${$event.data.name}`])
        this.schemaService.activeReference().next($event.data);
    }
}