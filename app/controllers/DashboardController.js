tallySales.controller('DashboardController',function($scope,$location,Data){
  $scope.masterList = Data.masterlist();
  console.log($scope.masterList);   
});