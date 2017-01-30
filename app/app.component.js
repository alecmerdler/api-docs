export const AppComponent = {
    controller: AppComponentController,
    bindings: {

    },
    template: `
        <navbar></navbar>
        
        <span ng-bind="$ctrl.greeting"></span>
        
        <ui-view></ui-view>
    `
};

AppComponentController.$inject = [

];
export function AppComponentController() {
    this.greeting = "Hello World!";

    this.$onInit = () => {
        console.log(this.greeting);
    }
}