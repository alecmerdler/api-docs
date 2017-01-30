export const AppComponent = {
    controller: AppComponentController,
    bindings: {

    },
    template: `
        <div style="display: flex; flex-direction: column;">
            <navbar 
                active-view="$ctrl.activeView"
                on-tab-select="$ctrl.onViewChange(newValue)">
            </navbar>
        
            <div style="display: flex;">
                <div style="flex: 1; height: 100%;">
                    <sidenav
                        references="$ctrl.references"
                        on-reference-select="$ctrl.onReferenceSelect(reference)">
                    </sidenav>
                </div>
                
                <div style="flex: 4;">
                    <ui-view></ui-view>
                </div>
            </div>
        </div>
    `
};

AppComponentController.$inject = [

];
export function AppComponentController() {
    this.greeting = "Hello World!";
    this.activeView = "home";
    this.references = [
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

    this.$onInit = () => {

    };

    this.onViewChange = (newValue) => {
        this.activeView = newValue;
    };

    this.onReferenceSelect = (reference) => {
        console.log(reference);
    };
}