tallySales.controller('OpportunitiesDetailController',function($scope,$routeParams,data){
    var opportunity = data.get();
    $scope.opportunityName = opportunity.opportunityName;
    $scope.accountName = opportunity.accountName;
    $scope.closeDate = opportunity.closeDate;
    $scope.amount = opportunity.amount;
    $scope.opportunityOwner = opportunity.opportunityOwner;
    
    //Setting images
    $scope.qualificationImage = "assets/img/start.png";
    $scope.analysisImage = "assets/img/mid.png";
    $scope.proposalImage = "assets/img/mid.png";
    $scope.negotiationImage = "assets/img/mid.png";
    $scope.closedImage = "assets/img/end.png";
    $scope.completeStage = function(){
        
    }
    $scope.logCall = function(params){
        debugger;
        if($scope.activity_logcall_subject==""){
            alert("No subject");
        }
    }
})