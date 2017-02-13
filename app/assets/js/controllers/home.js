app.controller('HomeCltr', ['$scope', '$window', '$http', '$mdSidenav', '$cookies',
    function($scope, $window, $http, $mdSidenav, $cookies) {


        var auth_token = $window.sessionStorage.getItem("auth_token");

        if (auth_token) {
            console.log('keep me logged in !');
        } else {
            console.log('logout me!');
            $window.location.href = "/";
        }

        $scope.showMobileMainHeader = true;

        $scope.openSideNavPanel = function() {
            $mdSidenav('left').open();
        };
        $scope.closeSideNavPanel = function() {
            $mdSidenav('left').close();
        };
        $scope.logout = function() {
            console.log('logout ');
            $window.sessionStorage.clear("auth_token");
            $window.location.href = "/";
        }
        debug(true);
    }
]);