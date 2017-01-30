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
                    <li ng-class="{'active': $ctrl.activeOption == 'overview'}"
                        ng-click="$ctrl.onOptionSelect('overview')">
                        <a>Overview</a>
                    </li>
                    <li ng-class="{'active': $ctrl.activeOption == 'usage'}"
                        ng-click="$ctrl.onOptionSelect('usage')">
                        <a>Using the API</a>
                    </li>
                    <li ng-class="{'active': $ctrl.activeOption == 'reference'}"
                        ng-click="$ctrl.onOptionSelect('reference')">
                        <a ng-click="$ctrl.referencesVisible = true">Reference</a>
                        <ul ng-if="$ctrl.referencesVisible">
                            <li ng-repeat="reference in $ctrl.references">
                                <a ng-click="$ctrl.onReferenceSelect({reference: reference})">{{ reference.name }}</a>
                            </li>
                        </ul>
                    </li>
                    <li ng-class="{'active': $ctrl.activeOption == 'segmentations'}"
                        ng-click="$ctrl.onOptionSelect('segmentations')">
                        <a>Segmentations</a>
                    </li>
                    <li ng-class="{'active': $ctrl.activeOption == 'scenarios'}"
                        ng-click="$ctrl.onOptionSelect('scenarios')">
                        <a>Common Scenarios</a>
                    </li>
                    <li ng-class="{'active': $ctrl.activeOption == 'advanced'}"
                        ng-click="$ctrl.onOptionSelect('advanced')">
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
    this.activeOption = '';

    this.onOptionSelect = (name) => {
        this.activeOption = name;
    }
}