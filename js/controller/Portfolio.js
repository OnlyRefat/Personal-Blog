app.controller('portfolioCtrl',function($scope){

	 $scope.project = [{name:'First App',details:"The project is done with the latest technologies. I have used angularjs for front end and Sailsjs for backend.", image:['image/2.jpg','image/3.jpg','image/4.jpg']},
	{name:'Second App',details:"The project is done with the latest technologies. I have used angularjs for front end and Sailsjs for backend.", image:['image/3.jpg','image/4.jpg','image/5.jpg']},
	{name:'Third App',details:"The project is done with the latest technologies. I have used angularjs for front end and Sailsjs for backend.", image:['image/4.jpg','image/5.jpg','image/6.jpg']},
	{name:'Fourth App',details:"The project is done with the latest technologies. I have used angularjs for front end and Sailsjs for backend.", image:['image/5.jpg','image/6.jpg','image/1.jpg']},
	{name:'Fifth App',details:"The project is done with the latest technologies. I have used angularjs for front end and Sailsjs for backend.", image:['image/6.jpg','image/1.jpg','image/2.jpg']}
	];

	$scope.selected = 0;

    $scope.showModal = false;
    $scope.toggleModal = function(pos){
    	$scope.selected=pos;
        $scope.showModal = !$scope.showModal;
    };
})