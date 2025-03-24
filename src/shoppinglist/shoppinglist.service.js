(function () {
  'use strict';

  angular.module('ShoppingList')
    .service('ShoppingListService', ShoppingListService)
    .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com");

  ShoppingListService.$inject = ['$q', '$timeout', '$http', 'ApiBasePath']
  function ShoppingListService($q, $timeout, $http, ApiBasePath) {
    var service = this;

    // List of shopping items
    // var items = [];
    service.getItems = function () {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      });

       return response;
    };

    service.getMenuItems = function (id,short_name) {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      });

       return response;
    };
    // Pre-populate a no cookie list
    // items.push({
    //   name: "Sugar",
    //   quantity: "2 bags",
    //   description: "Sugar used for baking delicious umm... baked goods."
    // });
    // items.push({
    //   name: "flour",
    //   quantity: "1 bags",
    //   description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
    // });
    // items.push({
    //   name: "Chocolate Chips",
    //   quantity: "3 bags",
    //   description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
    // });

    // Simulates call to server
    // Returns a promise, NOT items array directly
    // service.getItems = function () {
    //   var deferred = $q.defer();

    //   // Wait 2 seconds before returning
    //   // $timeout(function () {
    //   //   // deferred.reject(items);
    //   //   deferred.resolve(items);
    //   // }, 800);

    //   return deferred.promise;
    // };
  }

})();
