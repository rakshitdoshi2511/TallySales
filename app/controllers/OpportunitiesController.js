tallySales.controller('OpportunitiesController',function($scope,$routeParams,$location,data){
  $scope.opportunityList=[{
     opportunityName: "Opportunity1",
     accountName: "Test Account",
     stage: "Initial",
     closeDate: "29-12-2016",
     amount: "$100,000.00",
     opportunityOwner: "Rakshit Doshi"  
  },{
     opportunityName: "Opportunity2",
     accountName: "Test Account",
     stage: "Initial",
     closeDate: "29-12-2016",
     amount: "$100,000.00", 
     opportunityOwner: "Rakshit Doshi"  
  },{
     opportunityName: "Opportunity3",
     accountName: "Test Account",
     stage: "Initial",
     closeDate: "29-12-2016",
     amount: "$100,000.00",  
     opportunityOwner: "Rakshit Doshi"  
  },{
     opportunityName: "Opportunity4",
     accountName: "Test Account",
     stage: "Initial",
     closeDate: "29-12-2016",
     amount: "$100,000.00", 
     opportunityOwner: "Rakshit Doshi"  
  },{
     opportunityName: "Opportunity5",
     accountName: "Test Account",
     stage: "Initial",
     closeDate: "29-12-2016",
     amount: "$100,000.00",  
     opportunityOwner: "Rakshit Doshi"  
  }];
    
  $scope.showDetails = function(opportunity){
     // alert(opportunity.opportunityName);
      //var path = '/dashboard/Opportunities/OpportunitiesDetail/' + opportunity;
      var path = '/dashboard/Opportunities/OpportunitiesDetail/' + opportunity.opportunityName;
      data.set(opportunity);
      $location.path(path);
  }    
});