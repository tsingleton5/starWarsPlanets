angular.module('app').controller('mainCtrl', function ($scope, starWarsService) {

  $scope.planets1 = function() {
    starWarsService.getPlanets1().then(function(response) {
      $scope.homePlanets1 = response;
      console.log('asdf');
    })
  }

  $scope.planets1();

//2
  $scope.planets2 = function() {
    starWarsService.getPlanets2().then(function(response) {
      $scope.homePlanets2 = response;
      console.log('asdf');
    })
  }

  $scope.planets2();

//3
  $scope.planets3 = function() {
    starWarsService.getPlanets3().then(function(response) {
      $scope.homePlanets3 = response;
      console.log('asdf');
    })
  }

  $scope.planets3();


//4
  $scope.planets4 = function() {
    starWarsService.getPlanets4().then(function(response) {
      $scope.homePlanets4 = response;
      console.log('asdf');
    })
  }

  $scope.planets4();


  //5
    $scope.planets5 = function() {
      starWarsService.getPlanets5().then(function(response) {
        $scope.homePlanets5 = response;
        console.log('asdf');
      })
    }

    $scope.planets5();


    //6
      $scope.planets6 = function() {
        starWarsService.getPlanets6().then(function(response) {
          $scope.homePlanets6 = response;
          console.log('asdf');
        })
      }

      $scope.planets6();



      //7 Jakku
        $scope.planets7 = function() {
          starWarsService.getPlanets7().then(function(response) {
            $scope.homePlanets7 = response;
            console.log('asdf');
          })
        }

        $scope.planets7();






})
