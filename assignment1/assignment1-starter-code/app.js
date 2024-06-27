// Define the AngularJS module
angular.module('LunchCheckerApp', [])
.controller('LunchCheckerController', function($scope) {
  $scope.message = "";
  $scope.checkLunch = function() {
    // Check if the input is empty or just spaces
    if (!$scope.lunchItems || $scope.lunchItems.trim() === "") {
      $scope.message = "Please enter data first";
      return;
    }
    
    // Split the input by commas to get the items
    var items = $scope.lunchItems.split(',');
    
    // Count the items, ignoring empty strings resulting from split
    var validItemsCount = items.filter(function(item) {
      return item.trim() !== "";
    }).length;
    
    // Check the number of valid items and set the appropriate message
    if (validItemsCount <= 3) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
  };
});
