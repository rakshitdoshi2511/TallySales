tallySales.controller('LoginController',function($scope, $location, $http){
    $scope.username = '';
    $scope.password = '';
    
    $scope.login = function(){
        //Logic to Authenticate with Database
        /*var data = {"user": $scope.username,"password": $scope.password};
        $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        $http.defaults.headers.common['Content-Type']='application/json';
        $http.post('http://localhost:86/Login',data).then(function(response){
            console.log(response.data.authenticate);
            if(response.data.authenticate){
                 $location.path('/dashboard');
            }
            else if(response.data.errorMessage == "Failure"){
               alert("Authentication Failure");
            }
            else{
                alert("User not found");
            }
            //if(response.data.errorCode)
        },function(error){
            console.log(error);
        })*/
        window.localStorage.setItem('isLoggedIn','true');
        $location.path('/dashboard');
    }
})