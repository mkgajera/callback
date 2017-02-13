var app = angular.module('artFlow', [
    'ngRoute',
    'ngMaterial',
    'ngMessages',
    'angular-loading-bar',
    'ngCookies'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.

    when('/', {
        templateUrl: '/tpl/login/signin.html',
        controller: 'signin'
    }).

    when('/signup', {
        templateUrl: '/tpl/login/signup.html',
        controller: 'signup'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);


app.controller('main', ['$scope', '$window', '$http',
    function($scope, $window, $http) {

    }
]);


app.controller('signin', ['$scope', '$window', '$http', '$cookies',
    function($scope, $window, $http, $cookies) {

        var auth_token = $window.sessionStorage.getItem("auth_token");

        serialize = function(obj) {
            var str = [];
            for (var p in obj)
                if (obj.hasOwnProperty(p)) {
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
            return str.join("&");
        };
        $scope.email = $cookies.get('auth_email');
        $scope.password = $cookies.get('auth_password');


        $scope.signin = function() {
            var email = $scope.email;
            var password = $scope.password;

            var params = {
                "email": email,
                "password": password
            };
            $http({
                method: "POST",
                url: "https://artflowserver.herokuapp.com/api/auth_user",
                data: serialize(params),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(
                function mySucces(res) {
                    console.log('res', res);
                    $window.sessionStorage.setItem("auth_token", res.data.auth_token);

                    var now = new Date();
                    now.setDate(now.getDate() + 1);

                    $cookies.put('auth_email', email, {
                        expires: now
                    });
                    $cookies.put('auth_password', password, {
                        expires: now
                    });

                    if (res.data.user.roles[0] == "csr") {
                        $window.sessionStorage.setItem("csr_id", res.data.user.id)

                        $window.location.href = "/csr";
                    } else {
                        $window.location.href = "/artlist";
                    }
                },
                function Error(err) {
                    console.log('err', err);
                });

            //$window.location.href = "/artlist";
        }


    }
]);

app.controller('signup', ['$scope', '$window', '$http',
    function($scope, $window, $http) {

    }
]);