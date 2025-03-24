(function () {
    'use strict';

    angular.module('Registration')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['data', 'RegistrationService'];
    function RegistrationController(data, RegistrationService) {
        var ctrl = this;
        ctrl.FirstName = "";
        ctrl.LastName = "";
        ctrl.EmailAddress = "";
        ctrl.PhoneNumber = "";
        ctrl.Favourite = "";
        ctrl.isMenuItemExists = false;
        ctrl.menuItems = [];
        console.log('data from controller', data.data);
        RegistrationService.responseObject = data;
        ctrl.validateMenuItem = function () {
            ctrl.isMenuItemExists = false;
            angular.forEach(data.data, function (value, key) {
                angular.forEach(value.menu_items, function (value1, key1) {
                    ctrl.menuItems.push(value1);
                });
            });
            console.log('ctrl.menuItems', ctrl.menuItems);
            angular.forEach(ctrl.menuItems, function (value1, key1) {
                if (value1.short_name == ctrl.Favourite) {
                    ctrl.isMenuItemExists = true;
                }
            });
        };

        ctrl.signup = function () {

            var reguser = {
                "FirstName": ctrl.FirstName,
                "LastName": ctrl.LastName,
                "EmailAddress": ctrl.EmailAddress,
                "PhoneNumber": ctrl.PhoneNumber,
                "Favourite": ctrl.Favourite
            };
            RegistrationService.reguser = reguser;
            console.log('RegistrationService.reguser', RegistrationService.reguser);
            ctrl.isFormSaved = true;
        };

    }
})();