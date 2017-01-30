import './sidenav.component.css';


export const SidenavComponent = {
    controller: SidenavComponentController,
    bindings: {
        references: "<",
        onReferenceSelect: "&",
    },
    template: `
        <md-sidenav
            class="md-sidenav-left"
            md-component-id="left"
            md-is-locked-open="true">
            <md-toolbar class="md-theme-indigo">
                <h1 class="md-toolbar-tools">Graph API</h1>
            </md-toolbar>
            <md-content layout-fill>
                <ul>
                    <li>
                        <a>Overview</a>
                    </li>
                    <li>
                        <a>Using the API</a>
                    </li>
                    <li>
                        <a ng-click="$ctrl.referencesVisible = true">Reference</a>
                        <ul ng-if="$ctrl.referencesVisible">
                            <li ng-repeat="reference in $ctrl.references">
                                <a ng-click="$ctrl.onReferenceSelect({reference: reference})">{{ reference.name }}</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>Segmentations</a>
                    </li>
                    <li>
                        <a>Common Scenarios</a>
                    </li>
                    <li>
                        <a>Advanced</a>
                    </li>
                </ul>
            </md-content>
        </md-sidenav>
    `,
};

SidenavComponentController.$inject = [

];
export function SidenavComponentController() {
    this.referencesVisible = false;
}