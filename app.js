angular.module('demoApp', ["controllers", "forceng"])
    .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/addCustomer', {
        templateUrl: 'templates/customer.html',
        controller: 'AddCustomerCtrl'
      }).
      when('/inventoyCheck', {
        templateUrl: 'templates/inventory.html',
        controller: 'ContactCtrl'
      }).
      otherwise({
        redirectTo: '/#'
      })
  }])
    .controller('AddCustomerCtrl', function($scope,force) {
        $scope.message = "Add This Customer";
        $scope.addUser = function (user) {
            force.create('Customer__c', $scope.user).then(
                function (response) {
                    console.log(response);
                    $scope.user = {};
                    $scope.message = "Success..!";
                },
                function() {
                    alert("An error has occurred. See console for details.");
                });
        };
    })
	
    .run(function ($window, force) {

// ForceNG is built to work out of the box with sensible defaults.
// Uncomment the force.init() function call below to provide specific runtime parameters
        force.init({
            appId: '3MVG9ZL0ppGP5UrB1K1DjRzbtxjmkGwgbABOISTfk7ap63PDkdH1X8cH7vVuhfiYeYVvI66ydhH4j.glIBOqU',
            apiVersion: 'v32.0',
            loginUrl: 'https://login.salesforce.com',
            oauthRedirectURL: 'http://localhost:8200/oauthcallback.html',
            proxyURL: 'http://localhost:8200'
        });

    });