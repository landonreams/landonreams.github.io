(function(){
    angular
        .module('app')
        .controller('NavbarController', NavbarController);

        function NavbarController() {
            var nav = this;

            nav.active = 'terraria';
            nav.isActive = function(page) {
                return nav.active === page;
            };
            nav.setActive = function(page) {
                nav.active = page;
            };
        };
})();