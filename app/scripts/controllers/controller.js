'use strict';

angular.module('accessibleTodoListApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item 1','Item 2','Item 3'];
  });
