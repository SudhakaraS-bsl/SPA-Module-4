(function () {
    'use strict';

    angular.module('Registration')
        .service('RegistrationService', RegistrationService)
        .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com");

    RegistrationService.$inject = ['$http', 'ApiBasePath'];

    function RegistrationService($http, ApiBasePath) {
        var service = this;
        service.reguser;
        service.responseObject;
        
        service.getMenuItems = function () {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            });

            return response;
        };
    }
})();

