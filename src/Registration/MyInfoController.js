(function () {
    'use strict';

    angular.module('Registration')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['reguser'];
    function MyInfoController(reguser) {
        var ctrl = this;
        console.log('reguser', reguser);
        if (reguser == undefined) {
            ctrl.LinktoSignUp = true;
        }
        else {
            ctrl.userdetail = true;
            ctrl.FirstName = reguser.FirstName;
            ctrl.LastName = reguser.LastName;
            ctrl.EmailAddress = reguser.EmailAddress;
            ctrl.PhoneNumber = reguser.PhoneNumber;
            ctrl.Favourite = reguser.Favourite;
        }
    }
})();