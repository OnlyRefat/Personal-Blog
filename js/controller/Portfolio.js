app.controller('portfolioCtrl',function($scope){

	$scope.project = [{name:'Teachers Assistance',details:"The project is a group project based on android. we 4 friends have done this in varsity life. It won the 3rd prize in software contest of Buet CSE Fest 2012 ", image:['image/TA/2.jpg','image/TA/3.jpg','image/TA/4.jpg'],link:'https://www.dropbox.com/sh/0q5myr2xse4a6pb/AAChjHYCIaWK6olL0S0Atv1oa?dl=0'},
	{name:'Angular JS Application',details:"The project is done with the latest technologies. I have used angularjs and bootstrap  CSS framework for front end. I have learned a lot b this project.", image:['image/Angular/1.jpg','image/Angular/2.jpg','image/Angular/3.jpg'], link:'https://github.com/OnlyRefat/Personal-Blog.git'},
	{name:'Blood Bank',details:"The project is done with the latest technologies. I have used Java for functional works and used MySQl for the database. I have learned a lot on this project.", image:['image/BB/1.jpg','image/BB/2.jpg','image/BB/3.jpg'],link:'https://www.dropbox.com/sh/6oht6huqvvcsu92/AABif-cfykv_KRkBxf9OdMr4a?dl=0'},
	{name:'UVA Problems',details:"In my academic years i have solved a lot of problems on the UVA, LightOJ, Code force. Out of them 150 on UVA. Here is the link of my uhunt link in the project button. That helpped me to be a better programmer.", image:['image/UVA/1.jpg','image/UVA/2.jpg','image/UVA/3.jpg'],link:'http://uhunt.felix-halim.net/id/67139'}
	];
	$scope.selected = 0;

    $scope.showModal = false;
    $scope.toggleModal = function(pos){
    	$scope.selected=pos;
        $scope.showModal = !$scope.showModal;
    };
})