import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SchemaService } from './services/schema/schema.service';


@Component({
    selector: 'app',
    styles: [`
       
    `],
    template: `
        <div style="display: flex; flex-direction: column;">
            <navbar></navbar>
            
            <div style="display: flex;">
                <div style="flex: 1;">
                    <sidenav 
                        [references]="references">
                    </sidenav>
                </div>
                
                <div style="flex: 4;">
                    <router-outlet></router-outlet>
                </div>
            </div>
        </div>
    `
})
export class AppComponent implements OnInit {

    private references: any[] = [
        {
            name: "Campaign",
        },
        {
            name: "Company",
        },
        {
            name: "Device"
        },
        {
            name: "Budget"
        },
    ];

    constructor(@Inject(Router) private router: Router,
                @Inject(SchemaService) private schemaService: SchemaService) {

    }

    public ngOnInit(): void {
        this.schemaService.retrieveSchema()
            .subscribe((schema: any) => {
                console.log(schema);
            });
    }
}