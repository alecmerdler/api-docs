export const BreadcrumbsComponent = {
    controller: BreadcrumbsComponentController,
    bindings: {
        path: "<",
    },
    template: `
        <md-toolbar class="md-menu-toolbar">
            <md-menu-bar>
                <div style="display: flex;">
                    <div ng-repeat="link in $ctrl.path">
                        <a>{{ link.name }}</a>
                        <span> / </span>
                    </div>
                </div>
            </md-menu-bar>
        </md-toolbar>
    `,
};

BreadcrumbsComponentController.$inject = [

];
export function BreadcrumbsComponentController() {

    this.$onInit = () => {
        this.path = [
            {name: "campaigns"},
            {name: "edges"},
        ];
    };
}