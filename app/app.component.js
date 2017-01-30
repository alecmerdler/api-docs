export const AppComponent = {
    controller: AppComponentController,
    bindings: {

    },
    template: `
        <span ng-bind="$ctrl.greeting"></span>
        
        <ui-view></ui-view>
    `
};
export class AppComponentController {

    constructor() {
        this.$inject = [];
        this.greeting = "Hello World";
    }

    $onInit() {
        console.log(this.greeting);
    }
}