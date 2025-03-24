(function () {
  'use strict';

  angular.module('Registration')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to Registration page if no other URL matches
    $urlRouterProvider.otherwise('/');
    // *** Set up UI states ***
    $stateProvider

      // Registration page
      .state('Registration', {
        url: '/',
        templateUrl: 'src/Registration/templates/Registration.template.html',
        controller: 'RegistrationController as ctrl',
        resolve: {
          data: ['RegistrationService', function (RegistrationService) {
            // var responseObject = RegistrationService.getMenuItems();
            // console.log('responseObject', responseObject);

            // return responseData;
            console.log('RegistrationService.responseObject', RegistrationService.responseObject);

            if (RegistrationService.responseObject == undefined) {
              console.log('api call');
              return RegistrationService.getMenuItems();
            } else {
              console.log('reuse data');
              return RegistrationService.responseObject;
            }

            // var responseObject;
            // RegistrationService.getMenuItems()
            //   .then(function (response) {
            //     responseObject = response;
            //     console.log('responseObject', responseObject);
            //     return responseObject;
            //   });
            //return responseObject;
          }]
        }
      })
      .state('MyInfo', {
        url: '/my-info',
        templateUrl: 'src/Registration/templates/myinfo.template.html',
        controller: 'MyInfoController as ctrl',
        resolve: {
          reguser: ['RegistrationService', function (RegistrationService) {
            return RegistrationService.reguser;
          }]
        }
      })
      ;
  }

})();
