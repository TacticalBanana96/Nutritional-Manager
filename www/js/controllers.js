angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('ScanCtrl',[ '$scope', '$ionicPopup','$timeout', '$state','$stateParams',
	function($scope, $ionicPopup, $timeout, $state, $stateParams) {
  

    $scope.gotoURL = function(state){

    	$state.go(state);
    }

 }])

.controller('ScannedCtrl',[ '$scope', '$ionicPopup','$timeout', '$state','$stateParams',
	function($scope, $ionicPopup, $timeout, $state, $stateParams) {
  

    $scope.gotoURL = function(state){

    	$state.go(state);
    }

 }])
.controller('RecipesCtrl', function($scope) {})

.controller('LogCtrl', [ '$scope', '$ionicPopup','$timeout', '$state','$stateParams',
	function($scope, $ionicPopup, $timeout, $state, $stateParams) {
  

    $scope.gotoURL = function(state){

    	$state.go(state);
    }

 }])

.controller('ProfileCtrl', function($scope) {})

.controller('ItemDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
});



