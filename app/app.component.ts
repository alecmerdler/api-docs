import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app',
    styles: [

    ],
    template: `
        <div style="display: flex; flex-direction: column;">
            <!-- TODO: Navbar -->
            
            <div style="display: flex;">
                <div style="flex: 1; height: 100%;">
                    <sidenav 
                        [references]="references">
                    </sidenav>
                </div>
                
                <div style="flex: 4;">
                    <!-- TODO: Router outlet -->
                </div>
            </div>
        </div>
    `
})
export class AppComponent implements OnInit {

    private greeting: string = "Hello World!";
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

    public ngOnInit(): void {

    }
}