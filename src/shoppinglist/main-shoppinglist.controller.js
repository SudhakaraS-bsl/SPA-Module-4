(function () {

  'use strict';

  angular.module('ShoppingList')
    .controller('MainShoppingListController', MainShoppingListController);

  MainShoppingListController.$inject = ['data'];

  function MainShoppingListController(data) {

    var mainList = this;
    mainList.items = [];
    mainList.$onInit = function () {

      console.log('items',data);
      mainList.items = data.data;
    };

  }

})();
