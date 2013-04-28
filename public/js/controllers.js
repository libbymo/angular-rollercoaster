Rollercoaster.directive('sticker', function () {
	return {
		restrict: "E",
		template: "<i class='icon-heart'><i>"
	}
})

Rollercoaster.controller('StickerChartCtrl', function ($scope, $location) {
	$scope.users = [
		{ 
			id: 1,
			name: "Libby",
			stars: [
				{
					task_name: "Potty",
					counter: 3
				},
				{
					task_name: "Used Manners",
					counter: 3
				}
			]
		},
		{ 
			id: 2,
			name: "Lily",
			stars: [
				{
					task_name: "No Binky",
					counter: 4
				}
			]
		},
		{ 
			id: 3,
			name: "Nathan",
			stars: [
				{
					task_name: "Used Manners",
					counter: 2
				}
			]
		}
	];
	
	$scope.showStar = function( counter) {
		var stickers = "";
		for( var i=0; i< counter; i++ ) {
			stickers += "<p class='sticker'></p>";
		}
		
		return stickers;
		
	};
		
	// $scope.addUser = function() {
	// 	$scope.user.push( {name: $scope.name} );
	// 	$scope.name = "";
	// };
	
});


Rollercoaster.controller('WelcomeCtrl', function ($scope, $location) {
  // Do stuff
  
  $scope.prettyModels = [];
  
  $scope.navMe = function() {
    $location.url('/goodbye');
  }
  
  $scope.submitMe = function() {
    $scope.prettyModels.push( $scope.PrettyModel );
    console.log( $scope.prettyModels );
  }
  
});

Rollercoaster.controller('GoodbyeCtrl', function ($scope, $location) {
  $scope.step = 0;
  
  $scope.isShown = function() {
    return $scope.step; // boolean
  }
  
  $scope.toggleMe = function( step ) {
    console.log(step);
    $scope.step = step;
  }
  
});

Rollercoaster.controller('TodoCtrl', function($scope, $location) {
	
	$scope.todos = [
		{"text": "Learn Angular", "done": false},
		{"text": "Write an App", "done": false},
		{"text": "Get it into Github", "done": false}
	];
	
	$scope.getTotalTodos = function() {
		return $scope.todos.length;
	};
	
	$scope.getRemainingTodos = function() {
		return _.filter($scope.todos, function(todo) {
			return todo.done === false;
		}).length;		
	};
	
	$scope.clearCompleted = function() {
		$scope.todos = _.filter($scope.todos, function(todo) {
			return todo.done === false;
		});
	};
	
	$scope.addTodo = function() {
		$scope.todos.push( {"text": $scope.todo, "done": false } );
		$scope.todo = "";
	};
	
});

Rollercoaster.directive('coasterCar', function() {
	return {
		restrict: "E",
		template: "<div> Here I am to save the day!</div>"
	}
});


