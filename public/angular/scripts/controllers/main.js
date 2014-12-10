'use strict';

angular.module('myangApp')
  .controller('MainCtrl', function ($scope) {
    $scope.solved = false;
    $scope.tiles = []; 
    for (var i = 0; i < 8; i++) {
      $scope.tiles.push({id:i+1, ps:i+1});
    }
    $scope.tiles.push({id:9, ps:''});
    $scope.scramble = function(){
      var tmp, current, top = $scope.tiles.length;
      if(top) {
        while(--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = $scope.tiles[current].ps;
          $scope.tiles[current].ps = $scope.tiles[top].ps;
          $scope.tiles[top].ps = tmp;
        }
      }

      $scope.solved = false;
    };

    $scope.disable = function(array){
      var n1 = array - 4;
      var n2 = array - 2;
      var p1 = array + 2;
      var p2 = array;

      var r1 = true;
      var r2 = true;
      var r3 = true;
      var r4 = true;

      if (n1 >= 0){
        r1 = ($scope.tiles[array - 4].ps !== '') ? true : false;
      }

      if (n2 >= 0) {
        r2 = ($scope.tiles[array - 2].ps !== '') ? true : false;
      }

      if (p1 <= 8){
        r3 = ($scope.tiles[array + 2].ps !== '') ? true : false;
      }

      if (p2 <= 8){
        r4 = ($scope.tiles[array].ps !== '') ? true : false;
      }

      if (r1 && r2 && r3 && r4) {return true;}

      if (array === 3 || array === 6){
        if ($scope.tiles[array].ps === '') {return true;}
      }

      if (array === 4 || array === 7){
        if ($scope.tiles[array - 2].ps === '') {return true;}
      }
    };

    $scope.move = function(array){
      for (var i = 0; i < 9; i++){

        if ($scope.tiles[i].ps === ''){
          var temp = $scope.tiles[array - 1].ps;
          $scope.tiles[array-1].ps = $scope.tiles[i].ps;
          $scope.tiles[i].ps = temp;
          break;
        }
      }
      $scope.check();
    };

    $scope.check = function(){
      for (var i = 0; i < 8; i++){
        if ($scope.tiles[i].id !== $scope.tiles[i].ps) {return;}
      }

      $scope.solved = true;
    };
  });
