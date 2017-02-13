var app = angular.module('artFlow', [
    'ngMaterial',
    'ngMessages',
    'ngRoute',
    "ngAnimate",
    "ngAria",
    'angular-loading-bar',
    '720kb.datepicker',
    '$strap.directives',
    'ngCookies'
]).config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.latencyThreshold = 500;
    //cfpLoadingBarProvider.spinnerTemplate = '<div><span class="loading">Loading...<span/></div>';
    //cfpLoadingBarProvider.spinnerTemplate = '<div class="loading"><span class="spinner"><div></div><div></div><div></div><div></div></span></div>';
    cfpLoadingBarProvider.spinnerTemplate = '<div class="loading"><div class="cssload-container"><div class="cssload-loading"><i></i><i></i><i></i><i></i></div></div></div>';

}]);