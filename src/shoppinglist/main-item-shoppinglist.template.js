(function () {

    'use strict';

    angular.module('ShoppingList')
        .controller('MainitemShoppingListController', MainitemShoppingListController);

    MainitemShoppingListController.$inject = ['ShoppingListService'];

    function MainitemShoppingListController(ShoppingListService) {

        var mainitemList = this;
        var short_name;
        mainitemList.items = [];
        mainitemList.foundArray = [];
        mainitemList.$onInit = function () {

            //short_name = $stateParams.short_name;  //(parameter Name)

            //console.log('short_name', short_name);

            ShoppingListService.getMenuItems()
                .then(function (result) {

                    mainitemList.foundArray = result.data;
                    angular.forEach(mainitemList.foundArray, function (value, key) {
                        angular.forEach(value.menu_items, function (value1, key1) {
                            mainitemList.items.push(value1);
                            console.log('value1',value1);
                            
                            // if (value1.includes(menu.search_menuitems)) 
                            //     { menu.foundArray.push(value1); }
                        });
                    });

                    // mainitemList.items = result.data;
                });
        };

    }

})();