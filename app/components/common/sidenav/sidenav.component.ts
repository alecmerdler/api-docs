import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'sidenav',
    styles: [`
        md-list-item {
            cursor: pointer;
        }
        .reference-item:hover {
            background: grey;
        }
        .list-root {
            
        }
    `],
    template: `
        <md-card style="padding: 0;">
            <md-card-content>
                <md-list>
                    <md-list-item 
                        class="list-root"
                        (click)="onToggleShowObjects()">
                        Objects
                    </md-list-item>
                    <div *ngIf="showObjects">
                        <md-list-item 
                            class="reference-item"
                            *ngFor="let object of schemaViewModel.objects"
                            (click)="setActiveObject(object)">
                            <span>
                                {{ object.name }}
                            </span>
                        </md-list-item>
                    </div>
                </md-list>
            </md-card-content>
        </md-card>
    `
})
export class SidenavComponent implements OnInit {

    @Input() schemaViewModel: any;
    @Output() objectSelected: EventEmitter<any> = new EventEmitter();
    private showObjects: boolean = false;
    private activeReference: string;

    constructor() {

    }

    public ngOnInit(): void {

    }

    public onToggleShowObjects(): void {
        this.showObjects = !this.showObjects;
    }

    public setActiveObject(object: any): void {
        this.activeReference = object.name;
        this.objectSelected.emit({ data: object });
    }
}
