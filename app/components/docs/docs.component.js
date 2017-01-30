export const DocsComponent = {
    controller: DocsComponentController,
    bindings: {
        activeReference: "<",
    },
    template: `
        <md-content class="md-padding">
            <md-card>
                <md-card-title>
                    <md-card-title-text>
                        <code class="md-headline">{{ $ctrl.reference.name }}/{id}</code>
                    </md-card-title-text>
                </md-card-title>
                <md-card-content>
                    Some stuff here
                </md-card-content>
            </md-card>
        </md-content>
    `,
};

DocsComponentController.$inject = [
    "store",
];
export function DocsComponentController(store) {
    this.reference = {
        name: "Campaigns",
    };

    this.$onInit = () => {
        store.subscribe((state) => {
            console.log(state);
        });
        store.dispatch({type: "retrieveSchema"});
    };

    this.$onChanges = (changedProps) => {
        if (changedProps.activeReference.currentValue !== undefined) {
            this.reference = changedProps.activeReference.currentValue;
        }
    };
}