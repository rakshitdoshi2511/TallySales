var tallySales = angular.module('tallySales',['ngRoute']);

tallySales.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'app/templates/dashboard/home.html',
        controller: 'HomeController'
    })
    .when('/login',{
        templateUrl: 'app/templates/login.html',
        controller: 'LoginController'
    })
    .when('/dashboard',{
        templateUrl: 'app/templates/dashboard.html',
        controller: 'DashboardController'
    })
    .when('/dashboard/Home',{
        templateUrl: 'app/templates/dashboard/home.html',
        controller: 'HomeController'
    })
    .when('/dashboard/Opportunities',{
        templateUrl: 'app/templates/dashboard/opportunities.html',
        controller: 'OpportunitiesController'
    })
    .when('/dashboard/Opportunities/OpportunitiesDetail/:id',{
        templateUrl: 'app/templates/dashboard/opportunities/opportunitiesdetail.html',
        controller: 'OpportunitiesDetailController'
    })
    .when('/dashboard/Leads',{
        templateUrl: 'app/templates/dashboard/leads.html',
        controller: 'LeadsController'
    })
    .otherwise({
        redirectTo:'dashboard.html'
    })
}]);

tallySales.directive('header',function(){
   return {
        restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
        replace: true,
        templateUrl: "app/templates/views/header.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {
            // Your behaviour goes here :)
        }]
    } 
});

tallySales.directive('footer',function(){
   return {
        restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
        replace: true,
        templateUrl: "app/templates/views/footer.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {
            // Your behaviour goes here :)
        }]
    } 
});

tallySales.factory('data',function(){
   var savedObj = {};
   function set(object){
       savedObj = object;
   }
   function get(){
       return savedObj;
   }
   return{
       set: set,
       get: get
   }    
});

tallySales.factory('TimeSeriesChart', function () {
        return {
            getChart: function (target, oArgs) {
                return new TimeSeriesChart(target, oArgs);
            }
        };
    });
tallySales.factory('SparkLineChart', function () {
        return {
            getChart: function (target, oArgs) {
                console.log("I am called");
                return new SparkLine(target, oArgs);
            }
        };
    });
tallySales.directive('chart', function () {
        return {
            restrict: 'E',
            scope: {
                width: '@',
                height: '@',
                margin: '@',
                data: '='
            },
            controller: ['$scope', '$element', '$attrs', 'TimeSeriesChart',
            function ($scope, $element, $attrs, TimeSeriesChart) {
                var chart = TimeSeriesChart.getChart($element[0], {
                    width: $scope.width,
                    height: $scope.height,
                    margin: $scope.margin
                });
                chart.render($scope.data);
            }]
        };
    });
tallySales.directive('sparkline', function () {
        return {
            restrict: 'E',
            scope: {
                width: '@',
                height: '@',
                data: '='
            },
            controller: ['$scope', '$element', '$attrs', 'SparkLineChart',
            function ($scope, $element, $attrs, SparkLineChart) {
                var chart = SparkLineChart.getChart($element[0], {
                    width: $scope.width,
                    height: $scope.height,
                });
                chart.render($scope.data);
            }]
        };
});