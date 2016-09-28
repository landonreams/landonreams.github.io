(function(){
    angular
        .module('app')
        .config(AppRoutingConfig);

    function AppRoutingConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/terraria-overview/terraria-overview-template.html'
            })
            .when('/about', {
                templateUrl: 'app/about/about-template.html'
            });
    };
})();