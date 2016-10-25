		var app = angular.module('myApp', []);
	
	
	
		function checkInp()
{
  var x=document.forms["myform"]["telpon"].value;
   var regex=/^[a-zA-Z]+$/;
  if (!x.match(regex))
    {
        alert("Must input numbers");
        return false;
    }
}


	app.controller('MyController', ['$scope', function($scope){
	$scope.form = {};
	
	
	

	$scope.addDatabase = function(){
		
		$scope.databases.push($scope.form);
		$scope.form = {};
	}
	

	$scope.databases = [];

	 $scope.remove=function(database){ 
      var index=$scope.databases.indexOf(database)
      $scope.databases.splice(index,1);     
    }
	
	
	$scope.ubah= function() {
        var updatedActivities = {
                
            };
            $scope.databases.push(ubah);
    }

	
	 $scope.editActivity = function(database) {
        var selectedActivity = database;
        console.log(selectedActivity);
    }
	
	
	 $scope.edit = function(database){
            //set agar ketika user input
            //munculkan input type
            //$scope.data[index]['isedit'] = true;
            // masukan data yang di pilih ke array dataedit
            $scope.dataedit.push($scope.form);
			$scope.form = {};
	 }
	 
}]);
	



