(function(){
    var MainApp = angular.module('MainApp', []);

    MainApp.directive('navbarTemplate', function() {
        return {
            restrict: 'E',
            templateUrl: 'navbar-template.html',
            controller: function(){
                this.active = 'terraria';
                this.isActive = function(page) {
                    return this.active === page;
                };
                this.setActive = function(page) {
                     this.active = page;
                };
                this.getActive = function() {
                    return this.active;
                };
            },
            controllerAs: 'navbarCtrl'
        };
    });

})();
