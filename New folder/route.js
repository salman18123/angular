myApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/',{
 templateUrl:'views/index-view.html',
 controller : 'blogController',
 controllerAs : 'main'


  })
  .when('/stats',{

  	templateUrl : 'views/stats-view.html',
  	controller : 'teamnames',
  	controllerAs : 'teams'
  })
.when('/data',{

	templateUrl : 'views/data-view.html',
	controller : 'blogController',
	controllerAs : 'main'
})
.otherwise(
{
redirectTo : '/'

}
);


}]);