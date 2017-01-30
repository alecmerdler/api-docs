export const NavbarComponent = {
    controller: NavbarComponentController,
    bindings: {
        activeView: "<",
        onTabSelect: "&",
    },
    template: `
        <md-nav-bar 
            nav-bar-aria-label="navbar"
            md-selected-nav-item="$ctrl.activeView">
            <span style="display: flex; flex: 1;">
                <h1 style="margin: 12px;">Shape API</h1>
            </span>
            <span style="flex: 1;"></span>
            <div style="display: flex; flex: 6;">
                <md-nav-item
                    name="home"
                    md-nav-click="$ctrl.onTabSelect({newValue: 'docs'})">
                    Docs
                </md-nav-item>
                <md-nav-item
                    name="forge"
                    md-nav-click="$ctrl.onTabSelect({newValue: 'forge'})">
                    Forge
                </md-nav-item>
                <md-nav-item
                    name="tools"
                    md-nav-click="$ctrl.onTabSelect({newValue: 'tools'})">
                    Tools
                </md-nav-item>
            </div>
            <div style="flex: 2; display: flex; align-items: center; margin-left: auto;">
                <md-input-container style="margin-top: 16px;">
                    <md-icon>
                        <i class="material-icons">search</i>
                    </md-icon>
                    <label>Search</label>
                    <input ng-model="$ctrl.searchText">
                </md-input-container>
            </div>
        </md-nav-bar>
    `,
};

NavbarComponentController.$inject = [

];
export function NavbarComponentController() {

    this.$onInit = () => {

    };

    this.$onChanges = (changedProps) => {

    };
}