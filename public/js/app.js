var Rollercoaster = angular.module("Rollercoaster", ['ngSanitize']);

Rollercoaster.config( function( $routeProvider ) {
  $routeProvider
    // .when( '/', {
    //   templateUrl: 'views/welcome.html',
    //   controller: 'WelcomeCtrl'
    // })
		.when( '/', {
			templateUrl: 'views/home.html',
			controller: 'HomeCtrl'
		})
    .when( '/goodbye', {
      templateUrl: 'views/goodbye.html',
      controller: 'GoodbyeCtrl'
    })
    .when( '/todo', {
      templateUrl: 'views/todo.html',
      controller: 'TodoCtrl'
    })
    .when( '/stickerchart', {
      templateUrl: 'views/stickerchart.html',
      controller: 'StickerChartCtrl'
    })
    .otherwise( { redirectTo: '/'});
    
});

