(function () {
  'use strict';

  angular.module('ShoppingList')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/shoppinglist/templates/home.template.html'
      })

      // Premade list page
      .state('mainList', {
        url: '/main-list',
        templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
        data: {
          short_name: 'A'
        },
        controller: 'MainShoppingListController as mainList'
      })

      .state('mainitemList', {
        url: '/main-item-list',
        templateUrl: 'src/shoppinglist/templates/main-item-shoppinglist.template.html',
         controller: 'MainitemShoppingListController as mainitemList'
      });
  }

})();
