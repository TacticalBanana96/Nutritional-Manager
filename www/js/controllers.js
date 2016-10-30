angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('ScanCtrl',[ '$scope', '$ionicPopup','$timeout', '$state','$stateParams',
	function($scope, $ionicPopup, $timeout, $state, $stateParams) {
  

    $scope.gotoURL = function(state){

    	$state.go(state);
    }


  $scope.Tester = function (msg) {
    alert(msg);
  }
 }])

.controller('ScannedCtrl', function($scope){})
.controller('LogCtrl', function($scope) {})
.controller('ProfileCtrl', function($scope) {})

.controller('ItemDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
});



