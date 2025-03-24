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
        controller: 'MainShoppingListController as mainList',
        resolve:{
          data: ['ShoppingListService', function (ShoppingListService) {
            return ShoppingListService.getItems();
          }]
        }
      })

      .state('mainList.mainListItem', {
        url: '/main-list-item/{short_name}',
        templateUrl: 'src/shoppinglist/templates/main-item-shoppinglist.template.html',
         controller: 'MainitemShoppingListController as mainitemList',
         resolve:{
          data1: ['ShoppingListService', function (ShoppingListService) {
            return ShoppingListService.getMenuItems();
          }]
        }
      });
  }

})();
