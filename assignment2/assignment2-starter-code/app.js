// Define the AngularJS module
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// Controller for the "To Buy" list
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  // Get the list of items to buy
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  // Function to move an item to the "Already Bought" list
  toBuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };

  // Function to check if all items are bought
  toBuy.isEmpty = function () {
    return toBuy.items.length === 0;
  };
}

// Controller for the "Already Bought" list
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  // Get the list of already bought items
  alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

  // Function to check if no items are bought yet
  alreadyBought.isEmpty = function () {
    return alreadyBought.items.length === 0;
  };
}

// Service to manage the shopping lists
function ShoppingListCheckOffService() {
  var service = this;

  // Pre-populated list of items to buy
  var toBuyItems = [
    { name: "cookies", quantity: 10 },
    { name: "chips", quantity: 5 },
    { name: "soda", quantity: 3 },
    { name: "bread", quantity: 2 },
    { name: "milk", quantity: 1 }
  ];

  // Empty list for already bought items
  var alreadyBoughtItems = [];

  // Get the list of items to buy
  service.getToBuyItems = function () {
    return toBuyItems;
  };

  // Get the list of already bought items
  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };

  // Move an item from "To Buy" to "Already Bought"
  service.buyItem = function (itemIndex) {
    var item = toBuyItems.splice(itemIndex, 1)[0];
    alreadyBoughtItems.push(item);
  };
}
