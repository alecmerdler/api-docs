appConfig.$inject = [
    "$stateProvider",
    "$urlRouterProvider",
    "$locationProvider",
];

export function appConfig(
    $stateProvider,
    $urlRouterProvider,
    $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('docs', {url: '/', template: '<docs></docs>'})
        .state('forge', {url: '/forge', template: ''})
        .state('tools', {url: '/tools', template: ''});
}