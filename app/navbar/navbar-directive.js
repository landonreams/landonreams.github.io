(function(){
    angular
        .module('app')
        .directive('navbarTemplate', NavbarDirective);

    function NavbarDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/navbar/navbar-template.html',
            controller: 'NavbarController',
            controllerAs: 'navbarCtrl',
        };
    };

})();