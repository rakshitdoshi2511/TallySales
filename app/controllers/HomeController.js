tallySales.controller('HomeController',function($scope, Data){
  /*  $scope.data = [
            { "time": 1446824340000.0, "cpu": 0.486 },
            { "time": 1446824640000.0, "cpu": 0.483 },
            { "time": 1446824940000.0, "cpu": 0.486 },
            { "time": 1446825240000.0, "cpu": 0.493 },
            { "time": 1446825540000.0, "cpu": 0.513 },
            { "time": 1446825840000.0, "cpu": 0.503 },
            { "time": 1446826140000.0, "cpu": 0.486 },
            { "time": 1446826440000.0, "cpu": 0.503 },
            { "time": 1446826740000.0, "cpu": 0.493 },
            { "time": 1446827040000.0, "cpu": 0.486 } ];*/
    $scope.assistantList = Data.assistantList();
    
        $scope.dashboarddata= [{
            month: "July",
            date: "01/07/2016",
            open: "0",
            goal:"100000",
            closed:"265000"
        },{
            month: "July",
            date: "02/07/2016",
            open: "0",
            goal:"100000",
            closed:"265000"
        },{
            month: "July",
            date: "03/07/2016",
            open: "0",             
            goal:"100000",
            closed:"265000"
        },{
            month: "July",
            date: "04/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "05/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "06/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "07/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "08/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "09/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "10/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "11/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "12/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "13/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "14/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "15/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "16/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "17/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "18/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"   
        },{
            month: "July",
            date: "19/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "20/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "21/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "22/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "23/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "24/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "25/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "26/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "27/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "28/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "29/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "30/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "July",
            date: "31/07/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "01/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"   
        },{
            month: "August",
            date: "02/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"   
        },{
            month: "August",
            date: "03/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "04/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "05/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "06/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "07/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "08/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "09/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "10/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "11/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "12/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "13/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "14/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "15/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "16/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "17/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "18/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"   
        },{
            month: "August",
            date: "19/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "20/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "21/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "22/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "23/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "24/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "25/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "26/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "27/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "28/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "29/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "30/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "31/08/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "01/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"   
        },{
            month: "September",
            date: "02/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"   
        },{
            month: "September",
            date: "03/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "04/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "05/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "06/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "07/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "08/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "August",
            date: "09/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "10/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "11/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "12/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "13/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "14/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "15/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "16/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "17/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "18/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"   
        },{
            month: "September",
            date: "19/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "20/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "21/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "22/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "23/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "24/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "25/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "26/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "27/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "28/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "29/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        },{
            month: "September",
            date: "30/09/2016",
            open: "0",             
            goal:"100000",             
            closed:"265000"
        }]
    
    $scope.data = [
            { 
              "time": 1446824340000.0, 
              "cpu": 0.486,
              "cpu1": 0.186    
            },
            { 
              "time": 1446824640000.0, 
              "cpu": 0.483,
              "cpu1": 0.283  
            },
            { 
              "time": 1446824940000.0, 
              "cpu": 0.486,
              "cpu1": 0.386   
            },
            { 
              "time": 1446825240000.0, 
              "cpu": 0.493,
              "cpu1": 0.093   
            },
            { 
              "time": 1446825540000.0, 
              "cpu": 0.513,
              "cpu1": 0.413   
            },
            { 
              "time": 1446825840000.0, 
              "cpu": 0.503,
              "cpu1": 0.103   
            },
            { 
              "time": 1446826140000.0, 
              "cpu": 0.486,
              "cpu1": 0.486   
            },
            { 
              "time": 1446826440000.0, 
              "cpu": 0.503,
              "cpu1": 0.403   
            },
            { 
              "time": 1446826740000.0, 
              "cpu": 0.493,
              "cpu1": 0.393   
            },
            { 
              "time": 1446827040000.0, 
              "cpu": 0.486,
              "cpu1": 0.386   
            } 
        ];
})