(function () {

    'use strict';

    angular.module('ShoppingList')
        .controller('MainitemShoppingListController', MainitemShoppingListController);

    MainitemShoppingListController.$inject = ['$stateParams', 'data1'];

    function MainitemShoppingListController($stateParams, data1) {

        var mainitemList = this;
        var short_name;
        mainitemList.items = [];
        mainitemList.foundArray = data1.data;
        mainitemList.category ;

        mainitemList.$onInit = function () {
            short_name = $stateParams.short_name;  //(parameter Name)
            console.log('short_name', short_name);
            console.log('mainitemList.foundArray', mainitemList.foundArray);

            angular.forEach(mainitemList.foundArray, function (value, key) {
                if (key == short_name) {
                    console.log('key', key);
                    console.log('value', value);
                    mainitemList.category = value.category;

                    angular.forEach(value.menu_items, function (value1, key1) {
                        mainitemList.items.push(value1);
                    });
                }
            });
            // mainitemList.items = result.data;
        };
    }
})();