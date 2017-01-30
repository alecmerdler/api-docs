export const NavbarComponent = {
    controller: NavbarComponentController,
    bindings: {

    },
    template: `
        <md-nav-bar aria-label="navbar">
            <md-nav-item
                name="home"
                ng-click="$ctrl.onHomeClick()"
                md-nav-click="$ctrl.onHomeClick()">
                Home
            </md-nav-item>
        </md-nav-bar>
    `,
};

NavbarComponentController.$inject = [

];
export function NavbarComponentController() {

    this.$onInit = () => {
        
    };

    this.onHomeClick = () => {
        console.log("Go Home");
    };
}