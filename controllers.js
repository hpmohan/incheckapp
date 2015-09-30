angular.module('controllers', ['forceng','ngRoute','ngSanitize'])
    
    .controller('AddCustomerCtrl', ['$scope',function($scope, force) {
        $scope.addUser = function(){
            alert("Hi");
        };
    }])

    .controller('NavbarCtrl', function ($scope, force) {

        $scope.login = function () {
            force.login().then(
                function () {
                    console.log('Salesforce login succeeded');
                },
                function () {
                    alert('Salesforce login failed');
                });
        };

        $scope.discardToken = function () {
            force.discardToken();
            alert("Token discarded");
        };

        $scope.isLoggedIn = function () {
            alert(force.isLoggedIn());
        };

    })
    .controller('ContactCtrl', function ($scope, force, $sce) {
    
        $scope.newItem = function() {
            $scope.item = {FirstName:'', LastName:''};
        };

        $scope.query = function () {
            force.query('SELECT id,Name,Availability__c,Build__c,Capacity_GB__c,Chipset__c,Inventory__c,Item_Name__c,Operating_System__c,Price__c,Sensors__c FROM item__c limit 50').then(
                function (result) {
                    $scope.items = result.records;
                    console.log($scope.items);
                },
                function() {
                    alert("An error has occurred. See console for details.");
                });
        };

        $scope.create = function () {
            force.create('contact', $scope.contact).then(
                function (response) {
                    console.log(response);
                },
                function() {
                    alert("An error has occurred. See console for details.");
                });
        };

        $scope.update = function () {
            force.update('contact', $scope.contact).then(
                function (response) {
                    console.log(response);
                },
                function() {
                    alert("An error has occurred. See console for details.");
                });
        };

        $scope.del = function () {
            force.del('contact', $scope.contact.Id).then(
                function (response) {
                    console.log(response);
                },
                function() {
                    alert("An error has occurred. See console for details.");
                });
        };

        $scope.showItem = function (item) {
//            force.retrieve('item', id, null ).then(
//                function (item) {
//                    console.log(item);
//                    //$scope.contact = contact;
//                },
//                function() {
//                    alert("An error has occurred. See console for details.");
//                });
//            var index = $scope.items.indexOf(item);
//            $scope.bdays.splice(index, 1);
            console.log(item);
        };

    });
